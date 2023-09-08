import Joi from "joi";

const eventSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(35)
    .pattern(/^[A-Za-z\s\d!@#$%^&*()_+-=[\]{};':"\\|,.<>/?]+$/)
    .messages({
      "string.pattern.base": "Name must contains only letters.",
      "string.min": "Name should have a minimum length of 3 characters",
      "string.empty": "Name is required",
    })
    .required(),
  date: Joi.date(),
  description: Joi.string()
    .min(5)
    .max(100)
    .messages({
      "string.min": "Description should have a minimun of 20 characters",
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
