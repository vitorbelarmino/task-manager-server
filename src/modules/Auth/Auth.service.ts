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
}

export const authService = new AuthService();
