import Joi from "joi";

const messages = {
  userId: {
    "string.empty": "User ID cannot be empty",
    "any.required": "User ID is a required field",
  },
  title: {
    "string.empty": "Title cannot be empty",
    "any.required": "Title is a required field",
  },
  description: {
    "string.empty": "Description cannot be empty",
    "any.required": "Description is a required field",
  },
  status: {
    "string.empty": "Status cannot be empty",
    "any.required": "Status is a required field",
    "any.only": "Status must be Concluído or Pendente",
  },
};

export const createTaskSchema = Joi.object({
  userId: Joi.string().required().messages(messages.userId),
  title: Joi.string().required().messages(messages.title),
  description: Joi.string().required().messages(messages.description),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string().required().messages(messages.title),
  description: Joi.string().required().messages(messages.description),
  status: Joi.string().valid("Concluído", "Pendente").required().messages(messages.status),
});
