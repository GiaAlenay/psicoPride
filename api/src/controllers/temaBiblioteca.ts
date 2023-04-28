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
        const temas= await TemaBiblioteca.findAll({attributes:['id','titulo','mainImagen'],})
      if (temas) {
          res.status(201).json(temas);          
      }else{
        res.status(404).send('Error Obteniendo Temas, intente de nuevo.');
      }
    } catch (error) {
        res.status(500).send('Error Obteniendo Temas, intente de nuevo.')
    }
}

export const findTemaBiblioteca=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params;
        const findTemaBiblioteca= await TemaBiblioteca.findByPk(id)
        if (findTemaBiblioteca) {
            const contenidoArray=findTemaBiblioteca.contenido.replace(/\n/g, '').replace(/\t/g, '').split('<hr/>').map(c=>{
                if (c.includes('<s>')) {
                    return c.split('<s>')
                }
                else{
                    return c
                }
            })

            res.status(201).json({id:findTemaBiblioteca.id,titulo:findTemaBiblioteca.titulo,contenido:contenidoArray,mainImagen:findTemaBiblioteca.mainImagen});
        }else{
            res.status(404).send('Error Obteniendo Tema, intente de nuevo.');
        }
    } catch (error) {
        res.status(500).send('Error Obteniendo Tema, intente de nuevo.')
    }
}