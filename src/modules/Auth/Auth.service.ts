import prisma from "../../../prisma/script";
import { BCrypt } from "../../Utils/BCrypt";
import { CustomError } from "../../Utils/CustomError";
import { Token } from "../../Utils/Token";
import { LoginDTO, RegisterDTO } from "./dto/AuthDTO";

class AuthService {
  async login(loginData: LoginDTO) {
    const { email, password } = loginData;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new CustomError(404, "Invalid credentials");
    }

    await BCrypt.comparePasswords(password, user.password);

    const token = await Token.createToken(user);

    return token;
  }

  async register(userData: RegisterDTO) {
    const { email, password } = userData;
    const userByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userByEmail) {
      throw new CustomError(409, "User already exists");
    }

    const hashedPassword = await BCrypt.hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const token = await Token.createToken(newUser);
    return token;
  }

  async claimUser(userId: string) {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!getUser) {
      throw new CustomError(404, "User not found");
    }
  }
}

export const authService = new AuthService();
