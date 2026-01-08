import userModel from "../models/usermodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(password, salt);

    return hashedpass;
}

export const registerUser = async (req,res) => {
    try {
        const { username, password, email} = req.body;
        if(!username || !email || !password) {
            return res.json({ success : false, message : "missing credentials"});
        }
        const hashedpass = await hashPassword(password);
        const userData = {
            name : username,
            email : email,
            password : hashedpass
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id: user._id},process.env.JWT_SECRET);

        return res.json({ success : true, token, user : { name : user.name}});

    }catch (err) {
        console.log(err);
        return res.json({ success : false, message : err.message});
    }
}

export const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await userModel.findOne({ email });

        if(!foundUser) {
            return res.status(404).json({ success : false, message : "user not found"});
        }

        const isMatch = await bcrypt.compare(password,foundUser.password);

        if(isMatch) {
           const token = jwt.sign({id: foundUser._id},process.env.JWT_SECRET);
            return res.json({ success : true, token, user : { name : foundUser.name}});
        } else {
            res.json({ success :  false, message : "invalid credentials"});
        }
    } catch (err) {
        console.log(err);
        return res.json({ success : false, message : err.message});
    }
}

export const userCredits = async (req,res) => {
    try {
        const { id } = req.body;

        const user = await userModel.findById(id);

        if(!user) {
            return res.status(404).json({success: false,message : "user not found"});
        }

        return res.json({ success : true,credits : user.creditBalance , name : user.name });
    }catch (err) {
        console.log(err);
        return res.json({success : false,message : err.message});
    }
}