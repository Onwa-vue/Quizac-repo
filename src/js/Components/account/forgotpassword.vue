<template>
    <main class="main_content_wrapper">
        <section class="section_block bg__off_white">
            <div class="container">
                <div class="auth_panel">
                   <div class="error_message" v-if="error.show">
                        <p>{{error.message}}</p>
                    </div>
                    
                    <div class="block_panel">
                        <header class="block_header text-center">
                            <h2 class="section_title color-black">Forgot Password</h2>
                            <p>Enter the email address associated with your account and we will send you a password reset link.</p>
                        </header>
                        <form action="">
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Email Address <span>{{ errors.first('email') }}</span></label>
                                <input type="email" class="form-control" placeholder="Email address" name="email" v-model="email"  v-validate="'required'">
                            </div>
                        </form>
                        <div class="section_cto text-center">
                            <button class="btn btn-primary btn-block" v-on:click="send" v-bind:class="{loading:status.isProcessing}">Send Link</button>
                        </div>
                        <div class="auth_foot_link text-center">
                            <p>Know your password? 
                               <router-link to="/login"> Sign In</router-link> </p>
                               <!-- <a href="login.html">Sign In</a></p> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
var axion = require('../../Utility/serverRequestUtil.js')
export default {
    data(){
        return {
            email: null,
            error:{show:false, message:"We cannot find any account associated to the email address you provided."},
            status:{isProcessing:false}
        }
    },
    methods: {
        send: function(){
            let v = this;
            this.$validator.validate().then(result => {
                if(result && !v.status.isProcessing){
                    let url =`api/account/forgot_password/${this.email}`
                    v.status.isProcessing = true;
                    axion.get(url).then(resp=>{
                        if(resp.status==200 && resp.data.status=="success"){
                            v.status.isProcessing = false;

                            v.$router.push({name:'resetpassword', params:{username:v.email}}); 
                             
                        }else{
                            v.error.show = true;
                            // v.status.isProcessing = false;
                        }
                    })
                }
            }).catch(err=>{
                v.message= "Sorry ! Am error occur while sending request, Pls try again";
                v.error.show = true;
                 v.status.isProcessing = false;
            })
        }
    }
}
</script>

