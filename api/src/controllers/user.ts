
import { Request, Response } from 'express';
import  User  from '../models/user'; 
import GenderIdentity from '../models/genderIdentity';
import Sexo from '../models/sexo';
import SexualOrientation from '../models/sexualOrientation'

GenderIdentity.hasMany(User);
User.belongsTo(GenderIdentity);

Sexo.hasMany(User);
User.belongsTo(Sexo);

SexualOrientation.hasMany(User);
User.belongsTo(SexualOrientation);


export const createUser = async (req: Request, res: Response) => {
  try {
    const {age,sexo,gender,orientation}=req.body

    const findSexo = await Sexo.findOne({
      where: { name: sexo },
    });

    const findGender = await GenderIdentity.findOne({
      where: { name: gender },
    });

    const findOrientation = await SexualOrientation.findOne({
      where: { name: orientation },
    });

    if (findGender && findSexo && findOrientation ) {
      const newUser = await User.create({
        age,
        GenderIdentityId:findGender.id,
        SexoId:findSexo.id,
        SexualOrientationId:findOrientation.id     
      });
      res.status(201).json({ user: newUser });
   }else{
      res.status(404).json({ msg: "Información incorrecta, itentelo otra vez." });  
   }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
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