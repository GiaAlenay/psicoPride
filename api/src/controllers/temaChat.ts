
import { Request, Response } from 'express';
import TemaChat from '../models/temaChat';
import { chatArray } from '../data';



export const findOrCreateTemasChat = async (req: Request, res: Response) => {
    
    try {
        
        chatArray.map(async(s)=>{
            const newTema=await TemaChat.findOrCreate({
                where:{pregunta:s.pregunta },
                defaults:{pregunta:s.pregunta,respuesta:s.respuesta},
            })
            // if (s.sexos) {
            //     await newTema.setSexos(await s.sexos)
            // }
        })
        const Temas= await TemaChat.findAll({attributes:['id','pregunta']})
        
      res.status(201).json(Temas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error obteniendo preguntas.' });
    }
  };