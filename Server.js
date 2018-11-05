const express = require('express'),
      rigInfoController = require('./src/RigInfoController/RigInfoController'),
      rigInfoRepository = require('./src/RigInfoRepository/RigInfoRepository'),
      app = module.exports = express();

rigInfoRepository.updateRigInfo();      
setInterval(rigInfoRepository.updateRigInfo, 30000);

setInterval(rigInfoController.sendRigInfo, 35000);
//app.use(express.static(__dirname + '/build'));

//app.get('/api/rigInfo', rigInfoController.getRigInfo);

//app.listen(8080);
