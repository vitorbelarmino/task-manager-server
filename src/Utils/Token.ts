import jwt from "jsonwebtoken";

interface IUser {
  email: string;
}

export class Token {
  static async createToken(user: IUser) {
    const payload = {
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET || "mysecretkey", {
      expiresIn: "1d",
      algorithm: "HS256",
    });
    return token;
  }
}
