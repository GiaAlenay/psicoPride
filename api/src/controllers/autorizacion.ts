import { Request,Response ,NextFunction } from "express";
import { admin_password,jwt_key } from "../config";
import jwt, { JwtPayload, VerifyOptions, VerifyCallback } from 'jsonwebtoken';
const admin={username:"admin",password:admin_password}



export const login=async (req:Request, res:Response) => {
    try {

        const {username,password}=req.body;
        if (admin.username===username && admin.password===password) {
            const accessToken=jwt.sign({username:admin.username},jwt_key)
            res.status(200).json({username:admin.username,accessToken})
            
        }else{
            res.status(400).send('Usuario o contraseña equivocados')
        }
     } catch (error) {         
       res.status(500).json({ message: 'Error al acceder a la cuenta, intentelo de nuevo. ' });
     }
}


 export const Comprobar=(req:Request, res:Response)=>{
    res.status(200).json("Comprobado")
  }