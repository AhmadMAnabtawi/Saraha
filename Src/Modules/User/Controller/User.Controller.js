import userModel from "../../../../DB/Modeles/User.models.js";

export const Profile = async (req, res) => {

    const user =await userModel.findByID(req.id);
    return res.json({ message: user });
};