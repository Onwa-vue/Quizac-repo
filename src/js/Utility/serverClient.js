var axios = require('axios')
var localstore  = require('./cookieStorage.js'); 

var client = function(){
    var access_token = localstore.getdata('auth') == undefined?'': localstore.getdata('auth').access_token;
    var config = {
        baseURL:'http://api.staging.quizac.com/',
        timeout: 60000,
        headers : {'Authorization':'bearer '+ access_token}
    }
   return axios.create(config);
}

module.exports = client;