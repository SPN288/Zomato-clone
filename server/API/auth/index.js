import  express  from "express";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import { UserModel } from "../../database/user";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.credentials;
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if (checkUserByEmail || checkUserByPhone) {
            return res.json({ error: "user already exists" });
        }
        //hashin and salting
        const bcryptSalt =await bcrypt.genSalt(2);

        const hashedPassword = await bcrypt.hash(password,bcryptSalt);
        //DataBase
        await UserModel.create({
            ...req.body.credentials,
            password:hashedPassword
        })
        //JWT Auth token
        const token =jwt.sign({user:{fullname,email}},"zomatoApp");
        
        return res.status(200).json({token});



    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default router;

