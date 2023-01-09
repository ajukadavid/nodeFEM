import prisma from "../db";
import { createJwt, hashPassword } from "../modules/auth";

 export const createNewUser = async (req, res) =>{
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJwt(user)
    res.json({token})
 }

 export const signIn = async (req, res) => {
    
 }