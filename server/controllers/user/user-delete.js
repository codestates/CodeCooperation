const { user } = require("../../models");

module.exports = {
    userDelete : async (req, res) => {
        const { id } = req.params;
        if(!id) {
            return res.status(400).send({ message : "해당하는 id값이 없음" })
        } else {
            await user.destroy({ where : { id } });
            return res.status(200).send({ message : "유저아이디 삭제" })
        }
    }
    
}