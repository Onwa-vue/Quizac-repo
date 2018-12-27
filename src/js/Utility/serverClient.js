var axion = require('axios')
var localstore  = require('./cookieStorage.js'); 

var access_token = localstore.getdata('auth').access_token;
var config = {
    baseURL:'http://api.staging.quizac.com/',
    timeout: 20000,
    headers : {'Authorization':'bearer '+ access_token}
}

var client = axion.create(config);

module.exports = client;