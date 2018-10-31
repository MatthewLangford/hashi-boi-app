const axios = require ('axios');

const miningInfoGetter = require('./MiningInfoGetter');

module.exports = {
    updateMiningStats: async () => {
        let miningStats = [];
        
        miningStats = await miningInfoGetter.getMiningInfo();
        return miningStats;
    },
};