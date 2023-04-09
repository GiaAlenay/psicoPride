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
        const orientations= await SexualOrientation.findAll()
      res.status(201).json(orientations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating Orientations' });
    }
  };