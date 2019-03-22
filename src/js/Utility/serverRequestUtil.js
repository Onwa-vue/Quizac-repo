

var localstore  = require('./cookieStorage.js');
var constants  = require('./constants.js');  

var client = require('./serverClient.js')
var axios;
var promise;

module.exports = {

    post: function(url,data){
        return this.execute().then(r=>{
            axios = client();
          return  axios.post(url,data);
        })
    },

    get: function(url){
        return this.execute().then(r=>{
            axios = client();
            return axios.get(url);
        })
    },

    put : function(url,data){
        return this.execute().then(r=>{
            axios = client();
            return axios.put(url,data)
        })
    },

    delete: function(url){
        return this.execute().then(r=>{
            axios =client();
            return axios.delete(url)
        })
    },


    execute : function(){

        var authdata = localstore.getdata('auth') == undefined || localstore.getdata('auth') == null ? null: localstore.getdata('auth');
        
        if(authdata== null){
            return  promise = new Promise((resolve,reject)=>{
                resolve();
              }); 
        }

        let expireDate = new Date(authdata.expires_in);

        let currentDate = new Date();

        if( expireDate > currentDate && promise== null){
          return  promise = new Promise((resolve,reject)=>{
              resolve();
            }); 
        }
        if(currentDate > expireDate){
             
            var data = {
                grant_type:0,
                client_secret:constants.client_secret,
                client_id:constants.client_id,
                refresh_token:authdata.refresh_token
            }
            axios = client();
           return axios.post('/auth_token',data).then(resp=>{
                                    if(resp.statusText=='OK' && resp.data.status=="success"){
                                        console.log(resp);
                                        var d = resp.data.data
                                        authdata.access_token = d.access_token;
                                        authdata.expires_in = d.expires_in;
                                        authdata.refresh_token = d.refresh_token;
                                        authdata.status = 'valid'
                                        console.log(authdata)
                                        localstore.storeAuthData(authdata);
                                    }
                                }).catch(err=>{
                                    
                                })  
        }
        return promise;
    }
}