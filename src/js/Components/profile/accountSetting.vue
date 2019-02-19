<template>
    <div class="cm_page_body_main">
                        <div class="cm_page_body_wrapper">
                            <!--SHow the alert after inviting a user and returning to this page.-->
                            <div class="alert alert_scondary" v-bind:class="{hidden:!status.showSuccessMsg}">
                                <div class="extra_info">
                                    <div class="alert_icon">
                                        <span class="cust_icon icon_info"></span>
                                    </div>
                                    <div class="alert_info">
                                        <p>Your password has been successfully changed</p>
                                    </div>
                                </div>
                            </div>
                       
                            <header class="cm_page_header sr-only">
                                <div class="cm_header_title">
                                    <h2 class="info_title font-bold">Account Settings</h2>
                                </div>
                                <div class="cm_action_primary">
                                </div>
                            </header>
                            
                            <div class="content_inner">
                                <div class="form_body">
                                    <header class="section_header">
                                        <h3 class="info_title caps_upper">Change Password</h3>
                                    </header>
                                    <form action="">
                                        <div class="form_row_group row">
                                            <div class="form_group_item col-md-4">
                                                <label class="control-label caps_upper font-regular">Current Password
                                            </label>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <input type="password" class="form-control" name="current_password" placeholder="Enter your current password" v-model="currentPassword" v-validate="'required'">
                                            <p class="help-block text-error">{{ errors.first('current_password') }}</p>
                                            </div>
                                        </div>
                                        <div class="form_row_group row">
                                            <div class="form_group_item col-md-4">
                                                <label class="control-label caps_upper font-regular">New Password</label>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <input type="password" class="form-control" placeholder="Enter the new password" v-model="newPassword" v-validate="'required'" name="password" ref="password">
                                                <p class="help-block text-error">{{ errors.first('password') }}</p>
                                            </div>
                                        </div>
                                        <div class="form_row_group row">
                                            <div class="form_group_item col-md-4">
                                                <label class="control-label caps_upper font-regular">Confirm New Password</label>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <input type="password" name="confirm_password" class="form-control" placeholder="Enter the new password again" v-model="confirmNewPassword" v-validate="'required|confirmed:password'">
                                                <p class="help-block  text-error">{{ errors.first('confirm_password') }}</p>    
                                            </div>
                                        </div>
                                        <div class="form_row_group row">
                                            <div class="form_group_item col-md-4">
                                                <h4 class="sr-only">Submit</h4>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <button type="button" class="btn btn-primary" v-on:click="changePassword" v-bind:class="{loading:status.isProcessing}">
                                                    <span class="btn-label">Change Password</span>
                                                            <div class="loadmore">
                                                                    <span>Processing</span>
                                                                    <span class="spinner"></span>
                                                            </div>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <hr>
                                <div class="form_body">
                                    <h3 class="info_title caps_upper">Delete Account</h3>
                                    <p class="font-md">Click the button below to delete your Quizac contributor. This means you will no longer be able to create, and push question contents to students through the Quizac platform.</p>
                                    <p class="font-md margin_top_sm">This action cannot be undone</p>
                                    <div class="section_cto">
                                        <button data-target="#confirm_delete" data-toggle="modal" data-backdrop="static" class="btn btn-default">Delete my Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>

<script>

var localstore  = require('../../utility/cookieStorage.js'); 
var client = require('../../Utility/serverClient.js')
var axios;

export default {
    data(){ 
        return{
            currentPassword:'',
            newPassword: '',
            confirmNewPassword:'',
            status:{
                isProcessing:false,
                showSuccessMsg: false
            }
        }
    },

    methods:{
        changePassword: function(){

             this.$validator.validate().then(result => {

                 if(result){

                        let vueInstance = this;
                        var id = localstore.getdata('auth').id;
                        var url = `/api/account/change_password/${id}`
                        var data = {
                            newPassword: this.newPassword,
                            confirmNewPassword: this.confirmNewPassword,
                            currentPassword: this.currentPassword
                        }
                        this.status.isProcessing = true;
                        axios.post(url,data).then( resp=>{

                            console.log(resp);
                            if(resp.statusText=='OK'){
                                vueInstance.status.showSuccessMsg= true;
                                vueInstance.status.isProcessing = false;

                                vueInstance.currentPassword = '';
                                vueInstance.newPassword = '';
                                vueInstance.confirmNewPassword = '';

                                setTimeout( function(){
                                    vueInstance.status.showSuccessMsg= false;
                                }, 10000)
                            }
                        })
                 }
             })
           
        }
    },

      mounted: function(){
          axios = client();
        this.$emit('set-active-class',{tab:'account-setting'})
    }
}
</script>

