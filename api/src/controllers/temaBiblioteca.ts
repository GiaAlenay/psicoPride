import {Request, Response} from 'express'
import TemaBiblioteca from '../models/temaBiblioteca'
import { BibliotecaArray ,TemaBibliotecaAttributes} from '../data'

export const findOrcreateBibliotecaTemas=async(req:Request,res:Response)=>{
    try {
        BibliotecaArray.map(async(t:TemaBibliotecaAttributes)=>{
            await TemaBiblioteca.findOrCreate({
                where:{titulo:t.titulo },
                defaults:{titulo:t.titulo,contenido:t.contenido,mainImagen:t.mainImagen}
            })
        })
        const temas= await TemaBiblioteca.findAll()
      
      res.status(201).json(temas);  
    } catch (error) {
        res.status(500).send('Error Obteniendo Temas, intente de nuevo.')
    }
}