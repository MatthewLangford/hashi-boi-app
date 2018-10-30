let miningStatsUpdater = require('./MiningStatsUpdater.js');


module.exports = {

    getStats : (req, res, next) => {
        console.log('first rig is: ' + miningStatsUpdater.miningStats[0]);

        res.json({
            rigArray: miningStatsUpdater.miningStats
        });
    }
};