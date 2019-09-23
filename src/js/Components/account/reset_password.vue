<template>
    <main class="main_content_wrapper">
        <section class="section_block bg__off_white">
            <div class="container">
                <div class="auth_panel">
                    <div class="block_panel">
                        <header class="block_header text-center">
                            <h2 class="section_title color-black">Reset Password</h2>
                        </header>
                        <form action="">
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">New Password <span>{{ errors.first('password') }}</span></label>
                                <input type="password" class="form-control" placeholder="New Password"  v-model="password" name="password" v-validate="'required|min:5'" ref="password">
                            </div>
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Confirm new Password <span>{{ errors.first('password_confirmation') }}</span></label>
                                <input type="password" class="form-control" placeholder="New Password" v-model="confirmpassword" v-validate="'required|confirmed:password'" name="password_confirmation">
                            </div>
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Token (A Token was sent to your mail, Supply the token) <span>{{ errors.first('token') }}</span></label>
                                <input type="text" class="form-control" placeholder="Token"  v-model="token" name="token" v-validate="'required'">
                            </div>
                        </form>
                        <div class="section_cto text-center">
                            <button class="btn btn-primary btn-block" v-on:click="send" v-bind:class="{loading:status.isProcessing}">Reset Password</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>

<script>
var axion = require('../../Utility/serverRequestUtil.js')
let username;
export default {
    data(){
        return{
            password:null,
            confirmpassword: null,
            token:null,
            status: { isProcessing:false}
        }
    },
    methods:{
        send: function(){
            let v = this;
             this.$validator.validate().then(result => {
                if(result && !v.status.isProcessing){
                    let data = {
                        newPassword: this.password,
                        confirmNewPassword: this.confirmpassword,
                        token: this.token
                    }

                    var url = `api/account/reset_password/${username}`
                    console.log(url);
                    axion.post(url,data).then(resp=>{
                        console.log(resp);
                        if(resp.status==200 && resp.data.status=="success"){
                            v.status.isProcessing = false;
                            v.$router.push({name:'login'})
                        }else{
                            v.status.isProcessing = false;
                        }
                    }).catch(err=>{
                        v.status.isProcessing = false;
                    })
                }
             })
        }
    },
    mounted: function(){
        username = this.$route.params.username;
        console.log(username);
    }
}
</script>

