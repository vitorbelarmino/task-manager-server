import jwt, { TokenExpiredError } from "jsonwebtoken";
import { CustomError } from "./CustomError";
import { Request } from "express";

interface IUser {
  id: string;
  email: string;
}

export class Token {
  static async createToken(user: IUser) {
    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET || "mysecretkey", {
      expiresIn: "1d",
      algorithm: "HS256",
    });
    return token;
  }
  static async verifyToken(token: string) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET || "senha");
      return user;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new CustomError(401, error.message);
      }

      if (error instanceof jwt.JsonWebTokenError) {
        throw new CustomError(401, error.message);
      }

      throw new CustomError(500, "Internal Server Error");
    }
  }

  static async validateToken(req: Request) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError(401, "Token not found");
    }

    const [, token] = authorization.split(" ");
    if (!token) {
      throw new CustomError(401, "Token not found");
    }
    const user = await Token.verifyToken(token);
    return user;
  }
}
