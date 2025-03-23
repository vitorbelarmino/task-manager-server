import Joi from "joi";

const messages = {
  email: {
    "string.email": "Email must be a valid email",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  },
  password: {
    "string.empty": "Password is required",
    "string.min": "Password must be at least 4 characters long",
    "any.required": "Password is required",
  },
};

export const authSchema = Joi.object({
  email: Joi.string().email().required().messages(messages.email),
  password: Joi.string().min(4).required().messages(messages.password),
});
