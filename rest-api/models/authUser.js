const { Schema, model } = require("mongoose")

// const handleMongooseError = require("../helpers")

// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const schemaMongooseAuthUser = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        // match: emailRegex,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    avatarURL: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    }
}, { versionKey: false, timestamps: true })

// schemaMongooseAuthUser.post("save", handleMongooseError)

const ModelAuthUser = model("authUser", schemaMongooseAuthUser) // authUser - це назва папки в MongoDB

module.exports = ModelAuthUser