const axios = require('axios');
const rigInfoRepository = require(`../RigInfoRepository/RigInfoRepository`);
module.exports = {
    // getRigInfo : async (req, res, next) => {
    //     const rigInfoArray = await rigInfoRepository.getCurrentRigInfo();
    //     let rigTotals = {
    //         acceptedShares : 0,
    //         rejectedShares : 0,
    //         invalidShares : 0,
    //         hashrate : 0
    //     };
    //     rigInfoArray.forEach(val =>{
    //         if(val.acceptedShares !== 'error'){
    //             rigTotals.acceptedShares += parseInt(val.acceptedShares)
    //             rigTotals.rejectedShares += parseInt(val.rejectedShares)
    //             rigTotals.invalidShares += parseInt(val.invalidShares)
    //             rigTotals.hashrate += parseInt(val.hashrate)
    //         }
    //     });

    //     res.json({
    //         rigInfo: rigInfoArray,
    //         totals : rigTotals
    //     });
    // }
    sendRigInfo : async () => {
        const rigInfoArray = await rigInfoRepository.getCurrentRigInfo();
        let rigTotals = {
            acceptedShares : 0,
            rejectedShares : 0,
            invalidShares : 0,
            hashrate : 0
        };
        rigInfoArray.forEach(val =>{
            if(val.acceptedShares !== 'error'){
                rigTotals.acceptedShares += parseInt(val.acceptedShares)
                rigTotals.rejectedShares += parseInt(val.rejectedShares)
                rigTotals.invalidShares += parseInt(val.invalidShares)
                rigTotals.hashrate += parseInt(val.hashrate)
            }
        });

        axios({
            url : 'http://192.168.1.66:3500/api/updateRigInfo',
            method : 'post',
            body : {
                rigInfo: rigInfoArray,
                totals : rigTotals
            }
        });
    }
};