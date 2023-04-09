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
       const genders= await GenderIdentity.findAll() 
       res.status(201).json(genders)   
    } catch (error) {
        
      res.status(500).json({ message: 'Error creating user' });
    }
}