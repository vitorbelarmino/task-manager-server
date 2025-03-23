import prisma from "../../../prisma/script";
import { BCrypt } from "../../Utils/BCrypt";
import { CustomError } from "../../Utils/CustomError";
import { Token } from "../../Utils/Token";
import { loginDTO } from "./dto/loginDTO";

class AuthService {
  async login(loginData: loginDTO) {
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
