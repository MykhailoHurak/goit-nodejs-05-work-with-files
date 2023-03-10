const ModelAuthUser = require("../../models/authUser")

const logout = async (req, res) => {
    const { _id } = req.user
    await ModelAuthUser.findByIdAndUpdate(_id, { token: "" })
    
    res.json({
        message: "Logout success"
    })
}

module.exports = logout