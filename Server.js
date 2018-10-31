const express = require('express'),
      bodyParser = require('body-parser'),
      miningStatsCtrl = require('./src/MiningStatsController/MiningStatsCtrl'),
      miningStatsUpdater = require('./src/MiningStatsController/MiningStatsUpdater'),
      app = module.exports = express();

//miningStatsUpdater.updateMiningStats();

setInterval(miningStatsUpdater.updateMiningStats, 10000);



app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));



app.get('/api/miningStats', miningStatsCtrl.getStats)






app.listen(3000);