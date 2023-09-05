import Joi from "joi";

const eventSchema = Joi.object({
  eventHost: Joi.number(),
  name: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^[A-Za-z\s]+$/)
    .messages({
      "string.pattern.base": "Name must contains only letters.",
      "string.min": "Name should have a minimum length of 3 characters",
      "string.empty": "Name is required",
    })
    .required(),
  date: Joi.string(),
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
  event_images: Joi.string(),
  location: Joi.string(),
  categories: Joi.array()
    .min(1)
    .messages({ "string.empty": "At least one Category is required" }),
});
export default eventSchema;
