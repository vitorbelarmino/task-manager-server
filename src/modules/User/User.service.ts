import { CreateUserDTO } from "./dto/createUserDTO";
import prisma from "../../../prisma/script";
import { CustomError } from "../../Utils/CustomError";
import { BCrypt } from "../../Utils/BCrypt";

class UserService {
  async createUser(userData: CreateUserDTO) {
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

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }
}

export const userService = new UserService();
