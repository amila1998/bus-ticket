const Token = require("../models/tokenModel");
const User = require("../models/userModel");

const tokenController = {
    genarateToken: async(req, res) = () => {
        try {
            const { tokenID, expireDate, user_NIC_No, tokenType } = req.body;
            const tempExpiredate = new Date()
            tempExpiredate.setMonth(tempExpiredate.getMonth() + 3);
            console.log("🚀 ~ file: tokenController.js ~ line 10 ~ genarateToken:async ~ tempExpiredate", tempExpiredate)

            if (!tokenID)
                return res.status(400).json({ msg: "Token ID cannot be empty" })

            if (!tokenType)
                return res.status(400).json({ msg: "Token tiken type cannot be empty" })

            if (user_NIC_No)
                return res.status(400).json({ msg: "User NIC No cannot be empty" })

            if (tokenType === 'tempery') {
                if (!expireDate) {
        }
            }

        } catch (error) {
            console.log("🚀 ~ file: tokenController.js ~ line 9 ~ genarateToken:async ~ error", error)
            return res.status(500).json({ msg: err.message })
        }

},
}

module.exports = tokenController;










