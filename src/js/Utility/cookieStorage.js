var cookie = require('js-cookie')
var localStore = {

    storeAuthData : function(data){
        cookie.set('auth',data, { expires: 1 });
    },

    storeUserData: function(name,data){
        cookie.set(name,data,{expires:1})

        if(data.countries != null && data.educationLevel != null && data.subjects.length>0 && data.languages != null && data.email!= null && data.mobileNumber != null){
            cookie.set('stage1_onboarding',{status:true},{expires:365});
        }
        else{
            cookie.set('stage1_onboarding',{status:false},{expires:365});
            
        }

        if(data.role != null && data.roleExpereience != null && data.educationLevel != null && data.employmentStatus != null && data.bio != null ){
            cookie.set('stage2_onboarding',{status:true});
            
        }
        else{
            cookie.set('stage2_onboarding',{status:false});
            
        }
    },

    getdata : function(name){
        var d = cookie.getJSON(name);
        return d;
    },

    cleardata : function(name){
        cookie.remove(name);
    },
    
    storeOnboardingdata : function(name, data){
        cookie.set(name,data,{expires:365});
    }
}

module.exports = localStore;