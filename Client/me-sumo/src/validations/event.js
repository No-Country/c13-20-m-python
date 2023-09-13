import Joi from "joi";

const eventSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(60)
    .messages({
      "string.pattern.base": "El nombre solo acepta letras",
      "string.min": "Name should have a minimum length of 3 characters",
      "string.empty": "Name is required",
    })
    .required(),
  date: Joi.date().min("now"),
  description: Joi.string()
    .min(25)
    .max(400)
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
  location: Joi.string(),
  categories: Joi.any(),
});
export default eventSchema;
