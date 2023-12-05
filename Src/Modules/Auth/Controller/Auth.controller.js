import userModel from "../../../../DB/Modeles/User.models.js";
import bcrypt from 'bcryptjs';
export const signup =async(req,res)=>{

    const {userName,email,password,gender} = req.body;
    const user =await userModel.findOne({email});

    if(user){
        return res.json({message:"Email exists"});
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALTROUND));
    const createUser = await userModel.create({
        userName, email, password: hashedPassword, gender
    });
    return res.json({message:"success",user:createUser._id});
    return res.json({message:hashedpassword});

}

export const signin = async(req,res)=>{

    const {email,password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.json({message:"data ivalid"});
    }

    const match = bcrypt.compareSync(password,user.password);
    if(!match){
        return res.json({message:"data imvalid"})
    }
    return res.json({message:"success"});
}

export const signin = async(req,res)=>
const user  {email,password} =req.body;
const user = await userModel.findOne({email});
return res.json()
