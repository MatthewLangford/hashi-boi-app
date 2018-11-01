const rigInfoRepository = require('../RigInfoRepository/RigInfoRepository');
let rigInfo = [];

module.exports = {
    updateRigInfo: () => {
       // console.log(`inside the rig info update controller`);
        rigInfo = rigInfoRepository.rigInfo;
        //console.log(rigInfo);
    },

};