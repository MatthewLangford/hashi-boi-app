const rigInfoRepository = require(`../RigInfoRepository/RigInfoRepository`);
module.exports = {
    getRigInfo : async (req, res, next) => {
        const responseData = await rigInfoRepository.getCurrentRigInfo();
        res.json({
            rigInfo: responseData
        });
    }
};