<template>
    <main class="main_content_wrapper">
        <section class="section_block bg__off_white">
            <div class="container">
                <div class="auth_panel">
                    <div class="block_panel">
                        <header class="block_header text-center">
                            <h2 class="info_title color-black">Create an Account</h2>
                            <p>Join other contributor from all over the world who are helping to build the quizac vision.</p>
                        </header>
                        <!--
                           Not Implemented
                        <div class="linkBar link_fb">
                            <a href="#" class="barWrapper color-white">
                                <span class="link_icon">
                                    <i class="cust_icon icon_sm icon_fb"></i>
                               </span>
                                <span class="link_text">Continue with Facebook</span>
                            </a>
                        </div>-->
                        <div class="linkBar link_ggl">
                             <router-link class="barWrapper" to="/login">
                           <!-- <a href="login.html" class="barWrapper"> -->
                                <span class="link_icon">
                                    <i class="cust_icon icon_sm icon_qz"></i>
                               </span>
                               <span class="link_text">Continue Quizac Login ID</span>
                           <!-- </a> -->
                             </router-link>
                        </div>
                        <div class="optblock">
                            <span class="opt_rule"></span>
                            <span class="opt_text">OR</span>
                        </div>
                        <div class="linkBar link_mail">
                             <router-link class="barWrapper" to="/signup">
                           <!-- <a href="signup.html" class="barWrapper"> -->
                                <span class="link_icon">
                                    <i class="cust_icon icon_sm icon_email"></i>
                               </span>
                                <span class="link_text">Sign Up with email</span>
                           <!-- </a> -->
                            </router-link>
                        </div>
                        <div class="disclaimer_block text-center">
                            <p>By signing Up or In, you agree to all our <a href="terms.html">Terms &amp; Conditions</a> and <a href="#">Policies</a></p>
                        </div>
                        <div class="auth_foot_link text-center">
                            <p>Already have an account? 
                                 <router-link class="barWrapper" to="/login"> Sign in here</router-link>
                                 <!-- <a href="login.html">Sign in here</a> -->
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>
