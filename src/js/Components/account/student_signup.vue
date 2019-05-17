<template>
<main class="main_content_wrapper">
        <section class="section_block bg__off_white">
            <div class="container">
                <div class="auth_panel">
                    <div class="block_panel text-center">
                        <header class="profileHeaderBlock margin_bottom_md">
                           <div class="userProfileThumb">
                                <div class="user_info_avi">
                                    <!-- Bind the user image here if available -->
                                    <img alt="" v-bind:src="picture">
                                    <span class="default_avi">BC</span>
                                </div>
                            </div>
                            <div class="userIntro margin_top_sm">
                                <h3 class="fullname font-bold ">{{fullname}}</h3>
                                <p class="">@ {{displayname}}</p>
                            </div>
                        </header>
                        <p>This account details is currently associated to a Quizac student account. Click the button below to become a contributor.</p>
                        <div class="section_cto text-center">
                            <button type="submit" class="btn btn-primary btn-block" v-on:click="signup">Become a Contributor</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>
<script>

var localstore  = require('../../utility/cookieStorage.js'); 
var axion = require('../../Utility/serverRequestUtil.js')

export default {

    data(){
        return {
            fullname: null,
            displayname: null,
            email: null,
            picture:'../../../img/default_avi.png'
        }
    },
     methods: {

         signup : function(){

             var userId = localstore.getdata('auth').id;
             var url = `/api/contributor/${userId}/request_access`;
             var vueInstance = this;
             axion.get(url).then(resp=>{
                 console.log(resp);
                 if(resp.status==200 && resp.data.status=="success"){
                     localstore.cleardata('auth');
                     vueInstance.$router.push({name:'login'})
                 }
             })
         }
     },

      mounted: function(){
          var authenData = localstore.getdata('auth');
          this.fullname = authenData.fullname;
          this.displayname = authenData.displayname;
          this.picture = authenData.picture==null || authenData.picture==''? '../../../img/default_avi.png': authenData.picture
      }
    
}
</script>


