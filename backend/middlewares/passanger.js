const Users = require('../models/userModel')

const authPassanger = async (req, res, next) => {
    try {
        // Get user information by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if (user.role === 'f_passanger' || user.role === 'n_passanger') {
            next()
        } else {
            return res.status(400).json({ msg: "Passanger resources access denied" })
        }

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = authPassanger