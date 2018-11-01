const express = require('express'),
      rigInfoController = require('./src/RigInfoController/RigInfoController'),
      rigInfoRepository = require('./src/RigInfoRepository/RigInfoRepository'),
      app = module.exports = express();

setInterval(rigInfoRepository.updateRigInfo, 30000);

app.use(express.static(__dirname + '/build'));

app.get('/api/rigInfo', rigInfoController.getRigInfo);

app.listen(3000);