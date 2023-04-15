
import { Request, Response } from 'express';
import  User  from '../models/user'; 
import TemaChat from '../models/temaChat';
import TemaChatSexo from '../models/temaChatSexo';
import TemaChatGenero from '../models/temaChatGenero';
import TemaChatOrientacion from '../models/temaChatOrientacion';
import Sexo from '../models/sexo';
import GenderIdentity from '../models/genderIdentity';
import SexualOrientation from '../models/sexualOrientation';
import { chatArray } from '../data';

export const getTemasChatOrderByPriority=async(req:Request,res:Response)=>{
  try {
    interface JustId{
      id:number;
    }

    const {sexo,genero,orientacion}=req.query

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
    
   
    function calcularCompatibilidad(pregunta:any): number {
      let compatibilidad = 0;
 
      if (pregunta.Sexos.length && pregunta.Sexos.find((s:JustId)=>s.id.toString()===sexo)) {
        compatibilidad++;
      }
      if (pregunta.GenderIdentities.length && pregunta.GenderIdentities.find((s:JustId)=>s.id.toString()===genero)) {
        compatibilidad++;
      }
      if (pregunta.SexualOrientations.length && pregunta.SexualOrientations.find((s:JustId)=>s.id.toString()===orientacion)) {
        compatibilidad++; }      
      return compatibilidad;
    }
    
  
    const finalTemas=Temas.sort(
      (a, b) => calcularCompatibilidad(b) - calcularCompatibilidad(a)
    ).map((f)=>{return{id:f.id, pregunta:f.pregunta}});

    res.status(201).json(finalTemas)
  } catch (error) {
    res.status(500).json({message:'Error al obtener preguntas del chat, Intentelo de nuevo.'})
  }
}






export const createUser = async (req: Request, res: Response) => {
  try {

    const {age,SexoId,GenderIdentityId,SexualOrientationId}=req.body

    const findSexo = await Sexo.findByPk(SexoId);

    const findGender = await GenderIdentity.findByPk(GenderIdentityId);

    const findOrientation = await SexualOrientation.findByPk(SexualOrientationId);

    if (findGender && findSexo && findOrientation ) {
      const newUser = await User.create({
        age,
        GenderIdentityId:findGender.id,
        SexoId:findSexo.id,
        SexualOrientationId:findOrientation.id     
      });
      if (newUser) {
        res.status(201).json({ message: 'Usuario creado correctamente.' });
      }else{
        res.status(404).json({ message: 'Error creando usuario, intentelo otra vez.' });
      }
   }else{
      res.status(404).json({ message: "Información incorrecta, itentelo otra vez." });  
   }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creando usuario, intentelo otra vez.' });
  }
};

