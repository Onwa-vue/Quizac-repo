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
                            <button class="btn btn-primary btn-block" v-on:click="login">Sign In</button>
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

var axion = require('../../Utility/serverClient.js')
var localstore  = require('../../utility/cookieStorage.js'); 
var constants  = require('../../utility/constants.js'); 

export default {
    data(){
        return {
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


            axion.post("api/account/login", data).then(function(resp){

                console.log(resp);
                if(resp.statusText=="OK" && resp.data.status=="success"){
                    var d = resp.data.data;
                   
                      var url = 'api/user/'+ d.user.id +'/profile';
                      axion.get(url).then(function(r){
                          console.log(r);
                          if(r.statusText=='OK' && resp.data.status=="success" ){
                        var data = {
                                access_token : d.access_token,
                                expires_in : d.expires_in,
                                refresh_token : d.refresh_token,
                                role :'contributor',
                                id : d.user.id,
                                fullname : r.fullname,
                                displayName: r.displayName,
                                country : r.country,
                                picture : r.picture
                            }

                            v.show_error= false;
                            localstore.storeAuthData(data);
                            localstore.storeOnboardingdata('stage1_onboarding',{status: true})
                            localstore.storeOnboardingdata('stage2_onboarding',{status: true})

                            v.$router.push('dashboard/verification');

                          }
                      }).catch(function(err){

                      }) 
                     

                }else{
                    v.show_error= true;
                }

            }).catch(function(error){
                console.log(error);

                v.show_error= true;
            })
        }

        })
    }
    }
}
</script>

