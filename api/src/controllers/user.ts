
import { Request, Response } from 'express';
import  User  from '../models/user'; 
import GenderIdentity from '../models/genderIdentity';
import Sexo from '../models/sexo';
import SexualOrientation from '../models/sexualOrientation'




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

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting users' });
  }

    
};


export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting user' });
  }
};

// Controlador para actualizar un usuario por ID
// export const updateUserById = async (req: Request, res: Response) => {
//   try {
//     const [numUpdated, updatedUser] = await User.update(req.body, {
//       where: { id: req.params.id },
//       returning: true,
//     });
//     if (numUpdated) {
//       res.status(200).json({ user: updatedUser[0] });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error updating user' });
//   }
// };

// // Controlador para eliminar un usuario por ID
// export const deleteUserById = async (req: Request, res: Response) => {
//   try {
//     const numDeleted = await User.destroy({ where: { id: req.params.id } });
//     if (numDeleted) {
//       res.status(200).json({ message: 'User deleted' });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error deleting user' });
//   }
// };