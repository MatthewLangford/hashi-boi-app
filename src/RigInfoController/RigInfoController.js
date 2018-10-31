//const rigInfoUpdateController = require('./RigInfoUpdateController');
const rigInfoRepository = require(`../RigInfoRepository/RigInfoRepository`);

module.exports = {
    getRigInfo : async (req, res, next) => {
        //const rigInfo = rigInfoUpdateController.getUpdatedRigInfo();
        const rigInfo = await rigInfoRepository.updateRigInfo();
        res.json({
            rigInfo: rigInfo
        });
    }
};