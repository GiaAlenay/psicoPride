import { Request, Response } from 'express';
import TemaChat from '../models/temaChat';
import TemaChatSexo from '../models/temaChatSexo';
import Sexo from '../models/sexo';
import { chatArray } from '../data';

export const findOrCreateTemasChat = async (req: Request, res: Response) => {    
    try {        
        chatArray.map(async(s)=>{
            const [newTema,created]=await TemaChat.findOrCreate({
                where:{pregunta:s.pregunta },
                defaults:{pregunta:s.pregunta,respuesta:s.respuesta},
            })
            if (s.sexos && s.sexos.length>0) {
                for (const sexoId of s.sexos) {
                    const sexo = await Sexo.findByPk(sexoId);
                    if (sexo) {
                        await TemaChatSexo.findOrCreate({
                            where:{TemaChatId: newTema.id,
                                SexoId: sexo.id,}, 
                                defaults:{TemaChatId: newTema.id,
                            SexoId: sexo.id}
                        });}                        
                    }
                
            }
        })
  
        const Temas = await TemaChat.findAll({
            attributes:['id','pregunta'],
            include: [{ model: Sexo, as: 'sexos',
            attributes:["id","name"],
            through: {
                attributes: [],
              }, }]
          });
        
      res.status(201).json(Temas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  };