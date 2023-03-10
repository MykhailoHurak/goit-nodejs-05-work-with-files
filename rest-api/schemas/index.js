const { addSchema } = require("./schemaJoiBook")
const { schemaJoiRegister } = require("./schemaJoiAuthUser")
const { schemaJoiLogin } = require("./schemaJoiAuthUser")

module.exports = {
    addSchema,
    schemaJoiRegister,
    schemaJoiLogin,
}