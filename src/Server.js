const express = require('express'),
      bodyParser = require('body-parser'),
      MiningStatsCtrl = require('./MiningStatsCtrl'),
      app = module.exports = express();

let rigArray = [];


//setInterval(Min)



app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));



app.get('/api/miningStats', MiningStatsCtrl.getStats)






app.listen(3000, 'listening on 3000');