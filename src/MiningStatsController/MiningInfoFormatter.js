module.exports = {
    formatMiningInfo : async info => {
            let data = info.data;
            let formattedString = data.slice(data.indexOf('{'), data.indexOf('}') + 1);
            let jsonData = JSON.parse(formattedString);
            let resultArray = jsonData.result;
           return resultArray;
    },
}