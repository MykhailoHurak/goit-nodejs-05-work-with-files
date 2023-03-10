const BookModel = require("../../models/book")

const { HttpError } = require("../../helpers")

const removeBook = async (req, res) => {
    const { id } = req.params

    const result = await BookModel.findByIdAndRemove(id)

    if (!result) {
        throw (HttpError(404, "Not found"))
    }
    
    res.json({
        message: "Book deleted"
    })
}

module.exports = removeBook