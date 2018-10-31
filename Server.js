const express = require('express'),
      rigInfoController = require('./src/RigInfoController/RigInfoController'),
      rigInfoUpdateController = require('./src/RiginfoController/RigInfoUpdateController'),
      app = module.exports = express();

//setInterval(rigInfoUpdateController.updateRigInfo, 30000);

app.use(express.static(__dirname + '/build'));

app.get('/api/miningStats', rigInfoController.getRigInfo)

app.listen(3000);