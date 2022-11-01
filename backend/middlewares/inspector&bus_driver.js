const Users = require('../models/userModel')

const authInspectorAndBusDriver = async (req, res, next) => {
    try {
        // Get user information by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if (user.role === 'inspector' || user.role === 'bus_driver') {
            next()
        } else {
            return res.status(400).json({ msg: "Inspector or BusDriver resources access denied" })
        }

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = authInspectorAndBusDriver