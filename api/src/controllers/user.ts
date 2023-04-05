
import { Request, Response } from 'express';
import  User  from '../models/user'; 


export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ user: newUser });
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