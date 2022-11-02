const Users = require('../models/userModel')

const authAdminOrTransportManager = async (req, res, next) => {
    try {
        // Get user information by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if (user.role === 'transport_manager' || user.role === 'admin') {
            next()
        } else {
            return res.status(400).json({ msg: "Transport Manager and admin resources access denied" })
        }

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = authAdminOrTransportManager