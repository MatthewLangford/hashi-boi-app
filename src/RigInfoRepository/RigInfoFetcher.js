const axios = require(`axios`),
      rigInfoFormatter = require(`./RigInfoFormatter`),
      requestArrayBuilder = require(`./RequestBuilder`),
      requestArray = requestArrayBuilder.BuildRequestArray();
      
let rigInfoArray = [];

module.exports = {
    update : async () => {
        requestArray.forEach(async (rigAddress, index) => {
            await axios({
                method: `get`,  
                url: rigAddress,
                timeout: 1000
            })
            .then(async response => {
                const { data } = response;
                const rig = await rigInfoFormatter.formatRigInfo(index, data);

                rigInfoArray[index] = rig;
            }).catch(async error => {
                const rigError = await rigInfoFormatter.formatRigError(index, error);
                rigInfoArray[index] = rigError;
            })
        });
        return rigInfoArray;
    }
};