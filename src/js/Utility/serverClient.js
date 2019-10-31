var axios = require('axios')
var localstore  = require('./cookieStorage.js');
var constants  = require('./constants.js');  

var client = function(){
    var authdata = localstore.getdata('auth') == undefined || localstore.getdata('auth') == null ?'': localstore.getdata('auth');
    var access_token = authdata.access_token;

    var baseURL = "http://api.staging.quizac.com/";
    baseURL = "https://api.quizac.com/";
    var config;

        config = {
            baseURL: baseURL,
            timeout: 60000,
            headers : {'Authorization':'bearer '+ access_token},
           /* transformRequest: [function (data, headers) {
                console.log("showing the request header");
                console.log(headers);
               // console.log(data.get('name'));
                return data;
              }],  */
        
         }

   var ax = axios.create(config);
   
   /* ax.interceptors.response.use(response=>{
        return response;
         }, function(err){     */

            // console.log(err.request);
           /*  console.log(err.config);
             console.log(err.response);
             console.log(err.response.status);
             console.log(authdata.status) */
         // if( err.response.status == 401 && authdata.status =='valid'){
             // console.log(err.response.status);
            //  console.log(JSON.stringify(err));
              
          /*  if( err.response.status == 401 && authdata.status =='valid'){

                    authdata.status = 'expired';
                   // console.log(authdata);
                    localstore.storeAuthData(authdata)
                     console.log(localstore.getdata('auth'));
                    var data = {
                        grant_type:0,
                        client_secret:constants.client_secret,
                        client_id:constants.client_id,
                        refresh_token:authdata.refresh_token,
                    }
                    
                    console.log(data);

                ax.post('/auth_token',data).then(resp=>{

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
            }  */
            
          //  return Promise.reject(error);
            
        // }) 

    return ax;
}
    

module.exports = client;
