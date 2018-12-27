<template>
 <header class="mainHeader" role="banner">
        <div class="container">
            <div class="brand_img">
                <router-link class="logo_link" to="/">
              <!--  <a href="index.html" class="logo_link"> -->
                    <img src="../../../img/logo.png" alt="Quizac Contributor Portal">
               <!-- </a> -->
                </router-link>
            </div>
            <nav class="navMenu menu_alt">
                <div class="menuList-item">
                    <router-link class="menu__link_item" to="/login"> Sign In</router-link>
                   <!-- <a href="login.html" class="menu__link_item">Sign In</a> -->
                </div>
                <div class="menuList-item item_marked">
                     <router-link class="menu__link_item download" to="/signup_landing">
                   <!-- <a href="signup_lander.html" class="menu__link_item download"> -->
                        Get Started
                  <!--  </a> -->
                    </router-link>
                </div>
            </nav>
       </div>
    </header>
</template>
