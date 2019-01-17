<template>
     <header class="mainHeader has_feedback" role="banner">
        <div class="container">
            <div class="brand_img">
                <a href="index.html" class="logo_link">
                    <img src="../../../img/logo.png" alt="Quizac Contributor Portal">
                </a>
            </div>
            <nav class="navMenu menu__primary">
                <div class="menuList-item" v-bind:class="{active:isDashboard()}" >
                     <router-link class="menu__link_item" to="/dashboard">Dashboard</router-link>
                   <!-- <a href="dashboard.html" class="menu__link_item"></a> -->
                </div>
                <div class="menuList-item" v-bind:class="{active:isQuestionSet()}">
                    <router-link class="menu__link_item" to="/dashboard/questionset">Question Sets</router-link>
                  <!--  <a href="user_sets.html" class="menu__link_item">Question Sets</a> -->
                </div>
                <div class="menuList-item" v-bind:class="{active:isWallet()}">
                    <a href="#" class="menu__link_item">Wallet</a>
                </div>
            </nav>
            <nav class="navMenu menu_alt">
                <div class="menuList-item control_btns has_feedback">
                    <a href="feedbacks.html" class="menu__link_item">
                        <span class="icon_holder">
                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <path d="M12.5,25a12.43,12.43,0,0,1-6.87-2.06l-4.3,1.33a.49.49,0,0,1-.61-.61l1.33-4.3A12.5,12.5,0,0,1,21.34,3.66,12.5,12.5,0,0,1,12.5,25ZM5.71,21.92A.49.49,0,0,1,6,22a11.52,11.52,0,1,0-3-3,.49.49,0,0,1,.06.42L1.93,23.07l3.63-1.13Z"/>
                                <path d="M12.53,3.56h0a.49.49,0,0,1,0-1h0a.49.49,0,0,1,0,1Z"/>
                                <path d="M19.16,6.32a.49.49,0,0,1-.35-.14,8.89,8.89,0,0,0-4.56-2.44.49.49,0,0,1,.19-1A9.87,9.87,0,0,1,19.5,5.49a.49.49,0,0,1-.35.83Z"/>
                                <path d="M18.52,15.69a1.37,1.37,0,0,0-.27-.82,1.37,1.37,0,0,0,0-2.36,1.37,1.37,0,0,0-1.1-2.19H14L15.34,9a1.57,1.57,0,1,0-2.23-2.23L9.57,10.32h-3a.37.37,0,0,0-.37.37v6a.37.37,0,0,0,.37.37H8.2a2.38,2.38,0,0,0,2.34,2h6.2a1.37,1.37,0,0,0,1.1-2.19A1.37,1.37,0,0,0,18.52,15.69Zm-1.37.63h-2.4a.63.63,0,1,1,0-1.25h2.4a.63.63,0,1,1,0,1.25Zm-3-2.63a.63.63,0,0,1,.63-.63h2.8a.63.63,0,0,1,0,1.25h-2.8A.63.63,0,0,1,14.12,13.69Zm3.65-2a.63.63,0,0,1-.63.63h-2.4a.63.63,0,1,1,0-1.25h2.4A.63.63,0,0,1,17.78,11.69Zm-8.86,5a.37.37,0,0,0-.37-.37H6.92V11.07H9.73A.37.37,0,0,0,10,11l3.65-3.65a.83.83,0,0,1,1.17,1.17l-2,2a.37.37,0,0,0,.26.64h.4a1.36,1.36,0,0,0-.15.63v1a1.63,1.63,0,0,1-1.63,1.63.37.37,0,0,0,0,.75,2.37,2.37,0,0,0,1.76-.78,1.38,1.38,0,0,0,.3.41A1.37,1.37,0,0,0,14,16.88a1.37,1.37,0,0,0-.12,1.45H10.55A1.63,1.63,0,0,1,8.92,16.7Zm7.83,1.63h-1.6a.63.63,0,0,1,0-1.25h1.6a.63.63,0,1,1,0,1.25Z"/>
                            </svg>
                        </span>
                        <span class="feedback_sig"></span>
                    </a>
                </div>
                <div class="menuList-item account_info">
                    <a href="#" class="menu__link_item dropdown-toggle" data-toggle="dropdown">
                       <div class="flex_wrapper d-flex align-items-center">
                            <span class="user_avi">
                                <img  alt="Cayhlebs" v-bind:src="picture" >
                            </span>
                            <span class="user_name">{{displayname}}</span>
                        </div>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">My Profile</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="" v-on:click="logout">Log Out</a></li>
                    </ul>
                </div>
                <div class="nav_trigger">
                    <a class="primary-nav-trigger" href="#0">
                        <span class="menu-icon"></span>
                        <span class="menu-text sr-only">Menu</span>
                    </a>
                </div>
            </nav>
       </div>
    </header>
</template>

<script>

var localstore  = require('../../utility/cookieStorage.js'); 
var client = require('../../Utility/serverClient.js');
var axion;


export default {

    data(){
        return{
            displayname : null,
            picture : null
        }
    },

    methods:{
        isDashboard: function(){
            var pth = this.$route.path;
            return (!pth.includes('questionset') && !pth.includes('wallet'));
        },
        isQuestionSet : function(){
            var pth = this.$route.path;
            return  pth.includes('questionset');
        },

        isWallet : function(){
            var pth = this.$route.path;
            return  pth.includes('wallet');
        },

        logout: function(){

            localstore.cleardata('auth');
            localstore.cleardata('stage1_onboarding');
            localstore.cleardata('stage2_onboarding');
            localstore.cleardata('user_info');
            this.$router.push({name:'login'})

        }
    },

    mounted : function(){
        
        var d = localstore.getdata('user_info');
        axion = client();
        if(d != null){
            this.displayname = d.displayname,
            this.picture  = d.picture
        }

        
        var authenData = localstore.getdata('auth');
        var v = this;
        var url ='/api/contributor/'+ authenData.id +'/profile';
        axion.get(url).then(function(r){   
            if(r.statusText=='OK' && r.data.status=="success" ){
                var data = {
                            id : r.data.data.id,
                            fullname : r.data.data.fullName,
                            country : r.data.data.countries,
                            picture : r.data.data.picture
                           }
                localstore.storeUserData('user_info',data);
                v.displayname = d.displayname
                v.picture  = d.picture
                }
            }).catch(function(err){

            }) 
    }

}
</script>

