const axios = require ('axios');
let requestArray = [];
let miningStats = [];
const rigCount = 61;







module.exports = {
    updateMiningStats: () => {
        for (let i = 2; i < rigCount; i++) {
            miningStats.push({
                rigNumber: i,
                totalTimeInMinutes: 10,
                rigHashrateTotal: 30,
                rigHashratePerCard: [10,10,10,10,10,10,10,10,10,10,10,10]
            });
        }
        // for(let i = 2; i < 61; i++){
        //     requestArray.push(axios.get('http://192.168.1.'+ i + ':3333'));
        // }
        // axios.all(requestArray)
        // .then(result => {
        //     result.map((rig, index) => {
        //         let data = rig.data;
        //         let formattedString = data.slice(data.indexOf('{'), data.indexOf('}')+1);
        //         let jsonData = JSON.parse(formattedString);
        //         let resultArray = jsonData.result;
        //         miningStats.push({
        //             rigNumber: index,
        //             totalTimeInMinutes: resultArray[1],
        //             rigHashrateTotal: resultArray[2],
        //             rigHashRatePerCard: resultArray[3].split(';')
        //         });
        //     });
        //     console.log(miningStats);
        // });
    },

    miningStats: miningStats 
};