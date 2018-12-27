var cookie = require('js-cookie')
var localStore = {

    storeAuthData : function(data){
        cookie.set('auth',data, { expires: 1 });
    },

    getdata : function(name){
        return cookie.getJSON(name);
    },

    cleardata : function(name){
        cookie.remove(name);
    },

    storeOnboardingdata : function(name, data){
        cookie.set(name,data,{expires:365});
    }
}

module.exports = localStore;