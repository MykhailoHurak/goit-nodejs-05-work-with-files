const BookModel = require("../../models/book")
const { HttpError } = require("../../helpers")
const { addSchema } = require("../../schemas")

const addBook = async (req, res) => {
    console.log("OWNER: ", req.user)
    const { _id: owner } = req.user
        const { error } = addSchema.validate(req.body)
        if (error) {
            throw HttpError(400, "Missing required name field")
        }
        const result = BookModel.create({...req.body, owner})
        
        res.status(201).json(result)
}

module.exports = addBook