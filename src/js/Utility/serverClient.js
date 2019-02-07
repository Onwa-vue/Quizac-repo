var axios = require('axios')
var localstore  = require('./cookieStorage.js');
var constants  = require('./constants.js');  

var client = function(){
    var authdata = localstore.getdata('auth') == undefined?'': localstore.getdata('auth');;
    var access_token = authdata.access_token;
    
    var config = {
        baseURL:'http://api.staging.quizac.com/',
        timeout: 60000,
        headers : {'Authorization':'bearer jajaj'+ access_token}
    }
   var ax = axios.create(config);
   
    ax.interceptors.response.use(response=>{
        console.log(response);
        return response;
         }, function(err){

            // console.log(err.request);
             console.log(err.config);
             console.log(err.response);
             console.log(err.response.status);
             console.log(authdata.status)
          //  if( err.response.status == 401 && authdata.status =='valid'){
            if( err.response.status == 401){
                console.log('am here');
                    authdata.status = 'expired';
                    localstore.storeAuthData(authdata)

                    console.log(constants)

                    var data = {
                        auth_type:constants.auth_type,
                        client_secret:constants.client_secret,
                        client_id:constants.client_id,
                        refresh_token:authdata.refresh_token,
                    }

                    console.log('after data')
                    console.log(data);

                ax.post('/auth_token',data).then(resp=>{
                    var d = resp.data
                    console.log(resp);
                    if(resp.statusText=='OK'){
                        var d = {
                            access_token : d.access_token,
                            expires_in : d.expires_in,
                            refresh_token : d.refresh_token,
                            role :'contributor',
                            id : d.user.id,
                            status:'valid'
                        }
                        localstore.storeAuthData(d);
                    }
                }).catch(err=>{

                })
            } 
        

            return Promise.reject(error);
            
         }) 

    return ax;
}
    

module.exports = client;