const joi = require("joi");

const userSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi
    .string()
    .min(3)
    .max(8)
    .required()
});

function validate(model) {
  return joi.validate(model, userSchema);
}

module.exports = { validate };
