const express = require('express'),
    bodyParser = require(`body-parser`),  
    app = module.exports = express(),
    rigInfo = {};

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.get('/api/rigInfo', res => {
    res.json(rigInfo)
});

app.post('/api/updateRigInfo', (req, res) =>{
    const { data } = req.body;
    console.log(req.body)
    if(data){
        rigInfo.rigInfoArray =  data.rigInfoArray;
        rigInfo.totalAcceptedShares = data.totalAcceptedShares;
        rigInfo.totalHashrate = data.totalInvalidShares;
        rigInfo.totalRejectedShares = data.totalRejectedShares;
        rigInfo.totalInvalidShares = data.totalInvalidShares;
    res.json(rigInfo)
    }
});


app.listen(3004, () => {
    console.log(`now listening on 3004`);
});
