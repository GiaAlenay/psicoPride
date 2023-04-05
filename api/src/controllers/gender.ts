import { Request,Response } from "express";
import GenderIdentity from "../models/genderIdentity";
import { genderArray } from "../data";

export const findOrCreatGender=async(req:Request, res:Response)=>{
    try {
       genderArray.map(async(g)=>{
        await GenderIdentity.findOrCreate({
            where:{name:g.name },            
        })
       }) 
       res.status(200).json({gender:'generos creados'})   
    } catch (error) {
        
      res.status(500).json({ message: 'Error creating user' });
    }
}