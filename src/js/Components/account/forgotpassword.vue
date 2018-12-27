<template>
    <main class="main_content_wrapper">
        <section class="section_block bg__off_white">
            <div class="container">
                <div class="auth_panel">
                   <div class="error_message">
                        <p>We cannot find any account associated to the email address you provided.</p>
                    </div>
                    
                    <div class="block_panel">
                        <header class="block_header text-center">
                            <h2 class="section_title color-black">Forgot Password</h2>
                            <p>Enter the email address associated with your account and we will send you a password reset link.</p>
                        </header>
                        <form action="">
                            <div class="form-group">
                                <label for="" class="control-label caps_upper">Email Address</label>
                                <input type="email" class="form-control" placeholder="Email address">
                            </div>
                        </form>
                        <div class="section_cto text-center">
                            <button class="btn btn-primary btn-block">Send Link</button>
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
