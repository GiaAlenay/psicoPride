import { Request, Response } from 'express';
import SexualOrientation from '../models/sexualOrientation';
import { orientationArray,SexualOrientationAttributes } from '../data';
export const findOrCreateOrientations = async (req: Request, res: Response) => {
    try {  
        orientationArray.map(async(s:SexualOrientationAttributes)=>{
            await SexualOrientation.findOrCreate({
                where:{name:s.name },
                defaults:{name:s.name,flag:s.flag},
            })
        })
      res.status(201).json({ Orientaciones: 'creados' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating Orientations' });
    }
  };