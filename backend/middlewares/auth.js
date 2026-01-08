import jwt from "jsonwebtoken";

const userAuth = async (req,res,next) => {
    const { token } = req.headers;

    if(!token) {
        return res.json({ success : false, message: "unauthorized access"});
    }

    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

        if(tokenDecode.id) {
            req.body.id = tokenDecode.id;
        } else {
            return res.json({success: false, message: "unauthorized access"});
        }
        next();
    } catch (err) {
        console.log(err);
        return res.json({success: false, message: err.message});
    }
}

export default userAuth;
