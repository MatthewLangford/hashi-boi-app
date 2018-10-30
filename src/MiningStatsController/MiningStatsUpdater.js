const axios = require ('axios');
let requestArray = [];
let miningStats = [];

for(let i = 2; i < 7; i++){
    requestArray.push(axios.get('http://192.168.1.'+ i + ':3333'));
}

axios.all(requestArray)
.then(result => {
    result.map((rig, index) => {
        let data = rig.data;
        let formattedString = data.slice(data.indexOf('{'), data.indexOf('}')+1);
        let jsonData = JSON.parse(formattedString);
        let resultArray = jsonData.result;
        miningStats.push({
            rigNumber: index,
            totalTimeInMinutes: resultArray[1],
            rigHashrateTotal: resultArray[2],
            rigHashRatePerCard: resultArray[3].split(';')
        });
    });
    console.log(miningStats);
});



module.exports = {
    updateMiningStats: () => {
        // axios.get('http://192.168.1.2:3333')
        //  .then(result => {
        //      let data = result.data;
        //      let formattedString = data.slice(data.indexOf('{'), data.indexOf('}')+1);
        //      let jsonData = JSON.parse(formattedString);
        //      const 
        //     console.log(jsonData.result);
        // }).catch(error => {
        //     console.log(error)
        // });

        // miningStats.push("added stat")
        // console.log("mining stats updated");
    },

    miningStats: miningStats 
};