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
                        <li><a href="login.html">Log Out</a></li>
                    </ul>
                </div>
            </nav>
       </div>
    </header>
</template>

<script>

var localstore  = require('../../utility/cookieStorage.js'); 
var d = localstore.getdata('auth')

export default {

    data(){
        return{
            displayname : d.displayname,
            picture : d.picture==null?'../../../img/default_avi.png':d.picture
        }
    },

    computed:{
       
    }

}
</script>

