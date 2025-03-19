import Joi from "joi";

const messages = {
  email: {
    "string.email": "Email must be a valid email",
    "string.empty": "Email cannot be empty",
    "any.required": "Email is a required field",
  },
  password: {
    "string.empty": "password cannot be an empty field",
    "string.min": "password must be at least 4 characters long",
    "any.required": "password is a required field",
  },
};

export const createUserSchema = Joi.object({
  email: Joi.string().email().required().messages(messages.email),
  password: Joi.string().min(4).required().messages(messages.password),
});
