const miningStatsUpdater = require('./MiningStatsUpdater.js');

module.exports = {
    getStats : async (req, res, next) => {
        const rigArray =  await miningStatsUpdater.updateMiningStats();
        res.json({
            rigArray: rigArray
        });
    }
};