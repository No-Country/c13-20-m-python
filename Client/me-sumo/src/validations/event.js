import Joi from "joi";

const eventSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(35)
    .messages({
      "string.pattern.base": "El nombre solo acepta letras",
      "string.min": "Name should have a minimum length of 3 characters",
      "string.empty": "Name is required",
    })
    .required(),
  date: Joi.date().min("now"),
  description: Joi.string()
    .min(19)
    .max(140)
    .messages({
      "string.min": "La descripcion tiene que tener un minimo de 20 caracteres",
      "string.empty": "Description is required",
    })
    .required(),
  virtual: Joi.boolean(),
  state: Joi.boolean(),
  capacity: Joi.number(),
  ticketPrice: Joi.number(),
  event_images: Joi.any(),
  location: Joi.string().min(10).max(100).messages({
    "string.min": "La Locacion tiene que tener un minimo de 10 caracteres",
    "string.empty": "Description is required",
  }),
  categories: Joi.any(),
});
export default eventSchema;
