const axios = require('axios'),
      rigInfoFormatter = require('./RigInfoFormatter'),  
      rigCount = 61,
      requestArray = [],
      rigInfoArray = [];

      for (let i = 2; i < rigCount; i++){
          requestArray.push(`http://192.168.1.${ i }:3333`);
      };

module.exports = {
    updateRigInfo : async () => {
        requestArray.map((ipAddress, index) => {
            axios.get(ipAddress)
            .then(async response => {
                const rigInfo = await rigInfoFormatter.formatRigInfo(index, response);
                rigInfoArray[index] = rigInfo;
            }).catch(async error => {
                //console.log('error message: ' + error);
                const rigError = await rigInfoFormatter.formatRigError(index, error);
                rigInfoArray[index] = rigError;
            });
        });
        return rigInfoArray;
    },
};