import { Request, Response } from 'express';
import TemaChat from '../models/temaChat';
import TemaChatSexo from '../models/temaChatSexo';
import Sexo from '../models/sexo';
import GenderIdentity from '../models/genderIdentity';
import { chatArray } from '../data';
import TemaChatGenero from '../models/temaChatGenero';

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
            if (s.generos && s.generos.length>0) {
                for (const GeneroId of s.generos) {                    
                    const genero = await GenderIdentity.findByPk(GeneroId);
                    if (genero) {
                        await TemaChatGenero.findOrCreate({
                            where:{TemaChatId: newTema.id,
                                GeneroId: genero.id,}, 
                                defaults:{TemaChatId: newTema.id,
                            GeneroId: genero.id}
                        });}                        
                    }
                
            }
        })
  
        const Temas = await TemaChat.findAll({
            attributes:['id','pregunta'],
            include: [
                { model: Sexo,
            attributes:["id","name"],
            through: {
                attributes: [],
              }, },
              { model: GenderIdentity,
                attributes:["id","name"],
                through: {
                    attributes: [],
                  }, }

            ]
          });
        
      res.status(201).json(Temas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  };