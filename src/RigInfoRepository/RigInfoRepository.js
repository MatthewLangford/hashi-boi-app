const rigInfoFetcher = require(`./RigInfoFetcher`),
      rigInfo = {
        currentRigInfo : []
      };
module.exports = {
    
    updateRigInfo : async () => {
        console.log(`rig info updated`)
        rigInfo.currentRigInfo = await rigInfoFetcher.update();
    },

    getCurrentRigInfo : () => { 
        return rigInfo.currentRigInfo;
    }
};