<template>
     <header class="mainHeader has_feedback" role="banner">
        <div class="container">
            <div class="brand_img">
                <a href="index.html" class="logo_link">
                    <img src="../../../img/logo.png" alt="Quizac Contributor Portal">
                </a>
            </div>
            <nav class="navMenu menu_alt">
                <div class="menuList-item account_info">
                    <a href="#" class="menu__link_item dropdown-toggle" data-toggle="dropdown">
                       <div class="flex_wrapper d-flex align-items-center">
                            <span class="user_avi">
                                <img  alt="Cayhlebs" v-bind:src="picture">
                            </span>
                            <span class="user_name">{{displayname}}</span>
                        </div>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a v-on:click="logout">Log Out</a></li>
                    </ul>
                </div>
            </nav>
       </div>
    </header>
</template>

<script>

var localstore  = require('../../utility/cookieStorage.js'); 
var d;

export default {

    data(){
        return{
            displayname : '',
            picture : '../../../img/default_avi.png'
        }
    },

    methods:{

         logout: function(){

            localstore.cleardata('auth');
            localstore.cleardata('stage1_onboarding');
            localstore.cleardata('stage2_onboarding');
            localstore.cleardata('user_info');
            this.$router.push({name:'login'})

        }
    },

    computed:{
       
    },

    mounted: function(){

        d= localstore.getdata('auth');
        this.displayname = d.email!=null || d.email != undefined ?d.email:'';
    }

}
</script>

