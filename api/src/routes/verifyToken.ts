import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwt_key } from "../config";
interface TokenPayload {
    user: string;
    // Otros datos que desees incluir en el token
  }

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No estas autentificado' });
  }

  try {
    const decoded = jwt.verify(token, jwt_key) as TokenPayload;
    (req as any).user = decoded.user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
};