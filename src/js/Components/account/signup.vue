<template>
    <main class="main_content_wrapper">
        <section class="section_block bg__off_white">
            <div class="container">
                <div class="auth_panel">
                   <div class="error_message" v-if='view.showError'>
                        <p>{{view.error_msg}}  <router-link to="/login" v-if="view.showlogin_lnk">Sign In </router-link></p>
                    </div>
                    <div class="block_panel">
                        <header class="block_header text-center">
                            <h2 class="section_title color-black">Create an Account</h2>
                        </header>
                        <form action="">
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Create a Username</label>
                                <input type="text" class="form-control" placeholder="Create a Username" v-model="username">
                            </div>
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Email Address <span>{{ errors.first('email') }}</span></label>
                                <input type="email" class="form-control" placeholder="Email address" v-model="email" name="email" v-validate="'required|email'">
                            </div>
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Create a Password <span>{{ errors.first('password') }}</span></label>
                                <input type="password" class="form-control" placeholder="Create a Password" v-model="password" name="password" v-validate="'required|min:5'" ref="password">
                            </div>
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Confirm Password <span>{{ errors.first('password_confirmation') }}</span></label>
                                <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirmpassword" v-validate="'required|confirmed:password'" name="password_confirmation" data-vv-as="password">
                            </div>
                        </form>

                        <div class="section_cto text-center">
                            <button class="btn btn-primary btn-block" v-on:click="signUp"> {{view.btn_text}} </button>
                        </div>
                        <div class="disclaimer_block text-center">
                            <p>By signing Up, you agree to all our <a href="terms.html">Terms &amp; Conditions</a> and <a href="#">Policies</a></p>
                        </div>
                        <div class="auth_foot_link text-center">
                            <p>Already have an account?  <router-link to="/login">Sign in here</router-link></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>


<script>

var client = require('../../Utility/serverClient.js');
var axion = require('../../Utility/serverRequestUtil.js')
var localstore  = require('../../utility/cookieStorage.js'); 

export default {
    data (){
        return {
        email:null,
        username: null,
        password: null,
        confirmpassword: null,
        view :{
             btn_text:"Continue",
             showError: false,
             error_msg: 'The email address you provided is associated with another account. Would you like to',
             showlogin_lnk: false
        }
        }
    },

    methods: {
        signUp : function(){

         this.$validator.validate().then(result => {
         if (result) {
            this.view.btn_text = "please wait !";
            var v = this;
            axion.post('api/contributor/register',{
                email: this.email,
                password: this.password,
                confirm_password : this.confirmpassword,
                client_id:'Android',
                client_secret:'QuizacAndroid',
                auth_type:'default'

            }).then(function(resp){
                
                if(resp.status==200 && resp.data.status == 'success' ){
                  
                  /* console.log(resp);
                    var url = `/api/contributor/${resp.data.data.user_id}/request_access`;
                    axion.get(url).then(res=>{
                        console.log(res);
                        if(res.status==200 && res.data.status=="success"){
                            localstore.cleardata('auth');
                            v.btn_text= "Continue";
                            v.view.showError= false;
                            v.view.showlogin_lnk = false;
                            v.$router.push({name:'login'});
                        }
                    })  */
                    
                    v.btn_text= "Continue";
                    v.view.showError= false;
                    v.view.showlogin_lnk = false;
                    v.$router.push({name:'login'}); 
                }
                else { 
                    v.view.showError= true;
                    v.view.showlogin_lnk = true;
                    v.view.error_msg = 'The email address you provided is already taken. Would you like to';
                    v.view.btn_text= "Continue";
                }
            }).catch(function(error){
                console.log(JSON.stringify(error));
                    v.view.showError= true;
                    v.view.showlogin_lnk = false;
                    v.view.error_msg = 'An error occur while trying to signup, please try again';
                    v.btn_text= "Continue";
            }) 
        }
        })
    }
}
}
</script>
