import userModel from "../../../../DB/Modeles/User.models.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { userName, email, password, gender } = req.body;

    try {
        // التحقق مما إذا كان البريد الإلكتروني مستخدمًا بالفعل
        const userExists = await userModel.findOne({ email });

        if (userExists) {
            return res.status(409).json({ message: "Email already exists" });
        }

        // هاش كلمة المرور
        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALTROUND));

        // إنشاء المستخدم الجديد
        const createUser = await userModel.create({
            userName, email, password: hashedPassword, gender
        });

        // إذا تم إنشاء المستخدم بنجاح، قم بتوليد التوكن
        const token = jwt.sign({ userId: createUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(201).json({ message: "Success", userId: createUser._id, token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", error: error.stack });
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // البحث عن المستخدم بواسطة البريد الإلكتروني
        const user = await userModel.findOne({ email });

        // إذا لم يتم العثور على المستخدم
        if (!user) {
            return res.status(404).json({ message: "Invalid credentials" });
        }

        // التحقق من تطابق كلمة المرور
        const match = bcrypt.compareSync(password, user.password);

        // إذا كانت كلمة المرور غير صحيحة
        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // إذا كانت جميع التحققات صحيحة، قم بتوليد التوكن
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ message: "Success", userId: user._id, token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", error: error.stack });
    }
};
