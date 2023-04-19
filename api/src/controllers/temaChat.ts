import { Request, Response } from 'express';
import TemaChat from '../models/temaChat';
import TemaChatSexo from '../models/temaChatSexo';
import TemaChatGenero from '../models/temaChatGenero';
import TemaChatOrientacion from '../models/temaChatOrientacion';
import Sexo from '../models/sexo';
import GenderIdentity from '../models/genderIdentity';
import SexualOrientation from '../models/sexualOrientation';
import { chatArray } from '../data';

export const getRespuesta=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params
        const respuesta = await TemaChat.findByPk(id)
        if (respuesta) {
            res.status(201).json({respuesta:respuesta.respuesta})            
        }
        else{
            res.status(404).send('Perdón no tengo una respuesta para esa pregunta.')
        }
    } catch (error) {
        res.status(500).send('Perdón no tengo una respuesta para esa pregunta.')
    }
}

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
            if (s.orientaciones && s.orientaciones.length>0) {
                for (const OrientacionId of s.orientaciones) {                    
                    const orientacion = await SexualOrientation.findByPk(OrientacionId);
                    if (orientacion) {
                        await TemaChatOrientacion.findOrCreate({
                            where:{TemaChatId: newTema.id,
                                OrientacionId: orientacion.id,}, 
                                defaults:{TemaChatId: newTema.id,
                            OrientacionId: orientacion.id}
                        });}                        
                    }
                
            }
        })
  
        const Temas = await TemaChat.findAll({
            attributes:['id','pregunta'],
            include: [
                { model: Sexo,
            attributes:["id"],
            through: {
                attributes: [],
              }, },
              { model: GenderIdentity,
                attributes:["id"],
                through: {
                    attributes: [],
                  }, },
                { model: SexualOrientation,
                attributes:["id"],
                through: {
                    attributes: [],
                  }, }

            ]
          });

        
        
      res.status(201).json(Temas);
    } catch (error) {
      res.status(500).json({ message:'Error al crear temas' });
    }
  };