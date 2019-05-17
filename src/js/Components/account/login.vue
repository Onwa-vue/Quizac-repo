<template>
    <main class="main_content_wrapper">
        <section class="section_block bg__off_white">
            <div class="container">
                <div class="auth_panel">
                   <div class="error_message" v-if="show_error">
                        <p>{{error_msg}}</p>
                    </div>
                    <div class="block_panel">
                        <header class="block_header text-center">
                            <h2 class="section_title color-black">Welcome Back</h2>
                        </header>
                        <form action="">
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Email Address <span>{{ errors.first('email') }}</span></label>
                                <input type="email" class="form-control" placeholder="Email address" name="email" v-model="email" v-validate="'required|email'">
                            </div>
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Password <span>{{ errors.first('password') }}</span></label>
                                <input type="password" class="form-control" placeholder="Enter your Password" name="password" v-model="password"  v-validate="'required'">
                            </div>
                        </form>
                        <div class="section_cto text-center">
                            <button class="btn btn-primary btn-block" v-on:click="login" v-bind:class="{loading:status.isProcessing}">
                                <span class="btn-label">Sign In</span>
                                <div class="loadmore">
                                        <span>Processing</span>
                                        <span class="spinner"></span>
                                </div>
                            </button>
                            <router-link class="btn-link btn-block" to="/forgot_password"> Forgot Password</router-link>
                            <!--<a href="f_password.html" class="btn-link btn-block">Forgot Password?</a> -->
                        </div>
                        <div class="auth_foot_link text-center">
                            <p>Don't have an account? 
                                <router-link  to="/signup_landing">Sign up here</router-link>
                                <!--<a href="signup.html">Sign Up here</a> -->
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>

<script>

// var client = require('../../Utility/serverClient.js')
var localstore  = require('../../utility/cookieStorage.js'); 
var constants  = require('../../utility/constants.js'); 
var axion = require('../../Utility/serverRequestUtil.js')

export default {
    data(){
        return {
            status:{isProcessing:false, text:'Sign In'},
            email:null,
            password:null,
            show_error:false,
            error_msg:"Incorrect email address or password. Please try again."
        }
    },

    methods: {

        login: function(){
        this.$validator.validate().then(result => {
                if (result) {
                    var data = {
                        username: this.email,
                        password: this.password,
                        client_id: constants.client_id,
                        client_secret : constants.client_secret,
                        auth_type : constants.auth_type
                    }
                    var v = this;
                    this.status.isProcessing=true;
                    this.status.text='Processing'
                    axion.post('api/account/login', data).then(resp=>{
                        var d;
                        if(resp.status==200 && resp.data.status=="success"){
                             d = resp.data.data;
                                var auth_data = {
                                        access_token : d.access_token,
                                        expires_in : d.expires_in,
                                        email: d.email,
                                        refresh_token : d.refresh_token,
                                        role :'contributor',
                                        id : d.user.id,
                                        status:'valid',
                                        fullname: d.user.fullname,
                                        displayname: d.user.displayName,
                                        picture : d.user.picture
                                    }

                             var roles = [];       
                            localstore.storeAuthData(auth_data);
                            d.user.roles.forEach(r=>{
                                roles.push(r.toLowerCase());
                            })

                            console.log(roles);
                            if(roles.includes("contributor")){
                               return d;
                            }else{
                                 v.$router.push('student_signup'); 
                            }
                    }
                    else{
                        v.show_error= true;
                        v.status.isProcessing=false;
                        v.status.text='Sign In';
                    }

                    }).then(d=>{

                        if(d != null || d != undefined){
                            
                          var url ='/api/contributor/'+ d.user.id +'/profile'
                          axion.get(url).then(function(res){
                                
                            if(res.status==200 && res.data.status=="success" ){
                                console.log(res);
                                var r = res.data.data; 
                                var user_data = {
                                        firstname:r.firstName,
                                        lastname: r.lastName,
                                        fullname:r.fullName,
                                        address: r.address,
                                        bio:r.bio,
                                        categories:r.categories,
                                        countries: r.countries,
                                        educationLevel:r.educationLevel,
                                        email: r.email,
                                        employmentStatus: r.employmentStatus,
                                        id: r.id,
                                        languages:r.languages,
                                        linkedInUrl:r.linkedInUrl,
                                        mobileNumber:r.mobileNumber,
                                        picture:r.picture,
                                        role:r.role,
                                        roleExpereience:r.roleExpereience,
                                        schools:r.schools,
                                        subjects : r.subjects,
                                        questionsCreated:r.questionsCreated,
                                        state:'',
                                        country:'',
                                        rating:r.averageRating,
                                        username:r.username
                                    };

                                    localstore.storeUserData('user-detail',user_data);     
                                    v.$router.push('dashboard'); 
                                    
                                }else{
                                    if(res.status==200 &&  res.data.status.toLowerCase().trim() == "failed".toLowerCase().trim() && res.data.error_messages[0].toLowerCase().trim() =='Contributor does not exist'.toLowerCase().trim()){
                                        localstore.storeOnboardingdata('stage1_onboarding', {status: false});
                                        localstore.storeOnboardingdata('stage2_onboarding', {status: false});
                                        v.$router.push('dashboard'); 
                                    }else{
                                         localstore.storeOnboardingdata('stage1_onboarding', {status: false});
                                        localstore.storeOnboardingdata('stage2_onboarding', {status: false});
                                        v.$router.push('dashboard'); 
                                    }
                                } 
                            })
                        }

                    }).catch(err=>{

                        
                        console.log(JSON.toString(err));
                        v.show_error= true;
                        v.status.isProcessing=false;
                        v.status.text='Sign In';

                    })
                    }

                    
                 /*   axion.post("api/account/login", data).then(function(resp){
                        
                        if(resp.statusText=="OK" && resp.data.status=="success"){
                            var d = resp.data.data;
                                var auth_data = {
                                        access_token : d.access_token,
                                        expires_in : d.expires_in,
                                        email: d.email,
                                        refresh_token : d.refresh_token,
                                        role :'contributor',
                                        id : d.user.id,
                                        status:'valid'
                                    }
                                    console.log(auth_data);
                                    localstore.storeAuthData(auth_data);
                                  
                                  

                                   axion = client();

                            var url ='/api/contributor/'+ d.user.id +'/profile'
                            axion.get(url).then(function(res){
                                
                                if(res.statusText=='OK' && res.data.status=="success" ){
                                var r = res.data.data; 
                                console.log(r);
                                var user_data = {
                                        firstname:r.firstName,
                                        lastname: r.lastName,
                                        fullname:r.fullName,
                                        address: r.address,
                                        bio:r.bio,
                                        categories:r.categories,
                                        countries: r.countries,
                                        educationLevel:r.educationLevel,
                                        email: r.email,
                                        employmentStatus: r.employmentStatus,
                                        id: r.id,
                                        languages:r.languages,
                                        linkedInUrl:r.linkedInUrl,
                                        mobileNumber:r.mobileNumber,
                                        picture:r.picture,
                                        role:r.role,
                                        roleExpereience:r.roleExpereience,
                                        schools:r.schools,
                                        subjects : r.subjects,
                                        questionsCreated:r.questionsCreated,
                                        state:'',
                                        country:'',
                                        rating:r.averageRating,
                                        username:r.username
                                    };

                                    localstore.storeUserData('user-detail',user_data);     
                                    v.$router.push('dashboard'); 
                                    
                                }else{

                                    if(res.statusText=='OK' &&  res.data.status.toLowerCase().trim() == "failed".toLowerCase().trim() && res.data.error_messages[0].toLowerCase().trim() =='Contributor does not exist'.toLowerCase().trim()){
                                        localstore.storeOnboardingdata('stage1_onboarding', {status: false});
                                        localstore.storeOnboardingdata('stage2_onboarding', {status: false});
                                        v.$router.push('dashboard'); 
                                    }
                                }
                                

                            }).catch(function(err){

                            })   
                            
                            // stops here 


                        }else{
                            v.show_error= true;
                        }
                         v.status.isProcessing=false;
                         v.status.text='Sign In';

                    }).catch(function(error){
                        v.show_error= true;
                        v.status.isProcessing=false;
                        v.status.text='Sign In';
                    }) */
                })
           
        }
    }
}
</script>

