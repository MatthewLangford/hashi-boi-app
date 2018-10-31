const axios = require('axios'),
      miningInfoFormatter = require('./MiningInfoFormatter'),  
      rigCount = 61;

module.exports = {
    getMiningInfo : async () => {
        let miningInfoArray = [];

        for(let i = 2; i < rigCount; i++){
            await axios({
                method: 'get',
                url: 'http://192.168.1.'+ i + ':3333',
                timeout: 1000
            })
            .then(async response => {
                const resultArray = await miningInfoFormatter.formatMiningInfo(response);
                miningInfoArray.push({
                        rigNumber: i ,
                        totalTimeInMinutes: resultArray[1],
                        rigHashrateTotal: resultArray[2],
                        rigHashRatePerCard: resultArray[3].split(';')
                        });
            }).catch(async error => {
                console.log('error message: ' + error);
                miningInfoArray.push({
                    rigNumber: i ,
                    totalTimeInMinutes: 'error',
                    rigHashrateTotal: 'error',
                    rigHashRatePerCard: 'error'
                });
            });
        }
        return miningInfoArray;
    },
}