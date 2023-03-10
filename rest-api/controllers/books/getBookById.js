const BookModel = require("../../models/book")

const getBookById = async (req, res) => {
    const { id } = req.params
    const result = await BookModel.findById(id)

    if (!result) {
        res.status(404).json({ message: `Not found Book with id:${id}` })
    }
    
    res.json(result)
}

module.exports = getBookById