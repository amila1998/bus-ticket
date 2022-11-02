const Token = require("../models/tokenModel");
const User = require("../models/userModel");

const tokenController = {
    genarateToken: async (req, res) => {
        try {
            const { tokenID, expireDate, user_NIC_No,user_Passport_No, tokenType } = req.body;
            const tempExpiredate = new Date()
            tempExpiredate.setMonth(tempExpiredate.getMonth() + 3);
            console.log("🚀 ~ file: tokenController.js ~ line 10 ~ genarateToken:async ~ tempExpiredate", tempExpiredate)

            if (!tokenID)
                return res.status(400).json({ msg: "Token ID cannot be empty" })

            if (!tokenType)
                return res.status(400).json({ msg: "Token tiken type cannot be empty" })

            if (tokenType === 'tmp') {
                // if (user_Passport_No)
                //     return res.status(400).json({ msg: "User Passport No cannot be empty" })
            }else {
                if (user_NIC_No)
                return res.status(400).json({ msg: "User NIC No cannot be empty" })
            }


            const newToken = new Token({
                expireDate: tokenType === 'tmp' ? tempExpiredate : expireDate ? new Date(expireDate) : tempExpiredate,
                tokenID,
                user_NIC_No,
                tokenType
            })

            const savedToken = await newToken.save();

            res.status(200).json({
                Token: savedToken,
                message: "Token genarate is succeessfull !!!",
                success: true,
            });


        } catch (error) {
            console.log("🚀 ~ file: tokenController.js ~ line 9 ~ genarateToken:async ~ error", error)
            return res.status(500).json({ msg: err.message })
        }

    },
    checkToken: async (req, res) => {

        try {
            const { token } = req.body;

            const exToken = await Token.findOne({ tokenID: token })

            if (!exToken) {
                res.status(200).json({
                    success: false,
                });
            } else {
                res.status(200).json({
                    success: true,
                });
            }

        } catch (err) {
            console.log("🚀 ~ file: tokenController.js ~ line 49 ~ checkToken:async ~ error", err)
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = tokenController;










