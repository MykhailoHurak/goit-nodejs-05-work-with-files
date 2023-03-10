const Joi = require("joi")

// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const schemaJoiRegister = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    // email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
})

const schemaJoiLogin = Joi.object({
    email: Joi.string().required(),
    // email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
})

module.exports = {
    schemaJoiRegister,
    schemaJoiLogin,
}