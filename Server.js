const express = require('express'),
    bodyParser = require(`body-parser`),  
    app = module.exports = express(),
    rigInfo = {
        rigInfoArray : [],
        rigTotals : {}
    };

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.get('/api/rigInfo', res => {
    res.json(rigInfo)
});

app.post('/api/updateRigInfo', (req, res) =>{
    const { data } = req.body;
    console.log(req.body)
    if(data){
        const { rigTotals } = rigInfo;

        rigInfo.rigInfoArray =  data.rigInfoArray;
        rigTotals.totalAcceptedShares = data.totalAcceptedShares;
        rigTotals.totalHashrate = data.totalInvalidShares;
        rigTotals.totalRejectedShares = data.totalRejectedShares;
        rigTotals.totalInvalidShares = data.totalInvalidShares;
    res.json(rigInfo);
    }
});


app.listen(3004, () => {
    console.log(`now listening on 3004`);
});
