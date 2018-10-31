const rigInfoRepository = require('../RigInfoRepository/RigInfoRepository');
let rigInfo = [];

module.exports = {
    updateRigInfo: () => {
       // console.log(`inside the rig info update controller`);
        rigInfo = rigInfoRepository.updateRigInfo();
        //console.log(rigInfo);
    },

    getUpdatedRigInfo: () => {
       // console.log(rigInfo);
        return rigInfo;
    }
};