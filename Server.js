const express = require('express'),
    bodyParser = require('body-parser'),  
    app = module.exports = express(),
    rigInfo = {
        rigInfoArray : [],
        rigTotals : {
            totalAcceptedShares : 0,
            totalHashrate : 0,
            totalRejectedShares : 0,
            totalInvalidShares : 0,
            totalTimeInMinutes : 0
        }
    };

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.get('/api/rigInfo', (req,res) => {
    res.send(rigInfo)
});

app.post('/api/updateRigInfo', (req, res) =>{
    const { body } = req;
    //console.log(body)
    if(body){
        const { rigTotals } = rigInfo;

        rigInfo.rigInfoArray =  body.rigInfoArray;
        rigTotals.totalAcceptedShares = body.totalAcceptedShares;
        rigTotals.totalHashrate = body.totalHashrate;
        rigTotals.totalRejectedShares = body.totalRejectedShares;
        rigTotals.totalInvalidShares = body.totalInvalidShares;
        rigTotals.totalTimeInMinutes = body.totalTimeInMinutes;
    res.json('recieved');
    }
});


app.listen(3004, () => {
    console.log('now listening on 3004');
});
