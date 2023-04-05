
import { Request, Response } from 'express';
import Sexo from '../models/sexo';
import { sexArray } from '../data';
export const findOrCreateSexs = async (req: Request, res: Response) => {
    try {  
        sexArray.map(async(s)=>{
            await Sexo.findOrCreate({
                where:{name:s.name }
            })
        })
      res.status(201).json({ sexos: 'creados' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating Sexs' });
    }
  };