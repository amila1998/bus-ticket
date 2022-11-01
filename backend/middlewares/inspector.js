const Users = require('../models/userModel')

const authInspector = async (req, res, next) => {
    try {
        // Get user information by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if (user.role === 'inspector') {
            next()
        } else {
            return res.status(400).json({ msg: "Inspector resources access denied" })
        }

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = authInspector