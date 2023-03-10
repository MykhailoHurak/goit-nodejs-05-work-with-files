const BookModel = require("../../models/book")

const { HttpError } = require("../../helpers")
const { addSchema } = require("../../schemas")

const updateBook = async (req, res) => {
    const { error } = addSchema.validate(req.body)

    if (error) {
        throw HttpError(400, "Missing fields")
    }

    const { id } = req.params
    const result = await BookModel.findByIdAndUpdate(id, req.body, { new: true })

    if (!result) {
        throw(HttpError(404, "Not found"))
    }

    res.json(result)
}

module.exports = updateBook