<template>
    <main class="main_content_wrapper">
        <section class="hero_area home_hero">
            <div class="container">
                <div class="row">
                    <div class="offset-md-2 col-md-8 text-center">
                        <h1 class="hero_title color__white">Join Our Content Developer Network</h1>
                        <p class="hero_blub color__white">The quizac contributor portal provides a platform for subject experts & enthusiasts to share or sell their content through to the quizac community of students players.</p>

                        <div class="section_cto">
                            <router-link class="btn btn-primary" to="/signup_landing"> Become a contributor </router-link>
                           <!-- <a href="signup_lander.html" class="btn btn-primary">Become a contributor</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_block">
            <div class="container">
                <header class="section_header text-center">
                    <h3 class="section_title font-regular">How it Works</h3>
                </header>
                <div class="horizontal_progress_steps hidden-sm">
                    <div class="progress_step_item first">
                        <div class="step_line">
                            <span class="step_number">1</span>
                        </div>
                    </div>
                    <div class="progress_step_item">
                        <div class="step_line">
                            <span class="step_number">2</span>
                        </div>
                    </div>
                    <div class="progress_step_item last">
                        <div class="step_line">
                            <span class="step_number">3</span>
                        </div>
                    </div>
                </div>
                
                <div class="row action_steps">
                    <div class="col-md-4 step_details text-center">
                        <h4 class="info_title">Create your profile</h4>
                        <p>Sign Up as an expert contributor or Sign In with your quizac ID (for student contributors) , and complete your contributor profile for verification.</p>
                    </div>
                    <div class="col-md-4 step_details text-center">
                        <h4 class="info_title">Publish Question Sets</h4>
                        <p>Create & Configure your question sets under the relevant category and Country; following the quizac contributor guidline.</p>
                    </div>
                    <div class="col-md-4 step_details text-center">
                        <h4 class="info_title">Start Selling</h4>
                        <p>Get paid for every paid question set bought by students on quizac. Your payments will be remitted maximum of 2 days after request.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_block bg_right bg__off_white">
            <div class="container">
                <div class="section_info">
                    <h2 class="section_title font-regular">Expert Contributor</h2>
                    <p class="subtitle">Are you a teacher, school, subject tutor or certified trainer in any subject. Use the contributor portal to create your question sets, and sell directly to students on quizac.</p>
                    <ul class="custom_bullet_list">
                        <li class="bullet_list_item">
                            <span class="bullet_list_label">Share your expertise with students all over the world.</span>
                        </li>
                        <li class="bullet_list_item">
                            <span class="bullet_list_label">Create as many questions sets under any number of subject category of your choice</span>
                        </li>
                        <li class="bullet_list_item">
                            <span class="bullet_list_label">Set prize, location visibility, and class preferences that works for you.</span>
                        </li>
                    </ul>
                    <div class="section_cto">
                        <router-link class="btn btn-primary" to="/signup_landing"> Get Started </router-link>
                       <!-- <a href="signup.html" class="btn btn-primary">Get started</a> -->
                    </div>
                </div>
            </div>
            <div class="figure_bg" style="background-image: url(./img/banners/expert_illo.svg);">
            </div>
        </section>
        <section class="section_block bg__primary_light bg_left">
            <div class="container">
                <div class="section_info">
                    <h2 class="section_title font-regular">Student Contributor</h2>
                    <p class="subtitle">Students contributors can create custom question sets for quick revision with friends throught the quizac app.</p>
                    <ul class="custom_bullet_list">
                        <li class="bullet_list_item">
                            <span class="bullet_list_label">Share your question sets with friends through quizac.</span>
                        </li>
                        <li class="bullet_list_item">
                            <span class="bullet_list_label">Create personalized questions to test yourself through the quizac app.</span>
                        </li>
                        <li class="bullet_list_item">
                            <span class="bullet_list_label">Extend your quizac experience.</span>
                        </li>
                    </ul>
                    <div class="section_cto">
                        <router-link class="btn btn-secondary" to="/login"> Login with your Quizac ID </router-link>
                      <!--  <a href="login.html" class="btn btn-secondary">Login with your Quizac ID</a> -->
                    </div>
                </div>
            </div>
            <div class="figure_bg" style="background-image: url(./img/banners/student_illo.svg);">
            </div>
        </section>
        <section class="section_block">
            <div class="container content_narrow">
                <header class="section_header text-center">
                    <h3 class="section_title font-regular">Frequently asked Questions</h3>
                </header>
                <div class="panel-group" id='help_list'>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_1">What are Question Sets?</a>
                            </h4>
                        </div>
                        <div id="article_1" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>Question sets are bundles of questions around a given topic playable on the quizac app.</p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_2">Who can sign up as a contributor?</a>
                            </h4>
                        </div>
                        <div id="article_2" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>Anyone with a verifiable knowledge in academic subject areas, who is also interested in putting the effort to create the questions can sign up as a content contributor.</p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_3">What do I need to become a contributor?</a>
                            </h4>
                        </div>
                        <div id="article_3" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>Every contributor is required to sign up, complete their contributor profile and get verified. </p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_4">What are the acceptable content formats?</a>
                            </h4>
                        </div>
                        <div id="article_4" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>For now, only image (jpeg, png or gifs) and texts content formats are acceptable. More formats will be added soon.</p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_5">How do I publish and get paid for my content?</a>
                            </h4>
                        </div>
                        <div id="article_5" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>You can publish your content as a set of questions which conforms to our content contribution guide. After publishing your content, It becomes available to students on the Quizac app, and you get paid when a student makes a purchase.</p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_6">What are Question Sets?</a>
                            </h4>
                        </div>
                        <div id="article_6" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>Question sets are bundles of questions around a given topic playable on the quizac app.</p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_7">Who can sign up as a contributor?</a>
                            </h4>
                        </div>
                        <div id="article_7" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>Anyone with a verifiable knowledge in academic subject areas, who is also interested in putting the effort to create the questions can sign up as a content contributor.</p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_8">What do I need to become a contributor?</a>
                            </h4>
                        </div>
                        <div id="article_8" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>Every contributor is required to sign up, complete their contributor profile and get verified. </p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_9">What are the acceptable content formats?</a>
                            </h4>
                        </div>
                        <div id="article_9" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>For now, only image (jpeg, png or gifs) and texts content formats are acceptable. More formats will be added soon.</p>
                            </div>
                        </div>
                    </article>
                    <article class="panel panel-help">
                        <div class="panel-heading">
                            <h4 class="panel-title font-regular">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#help_list" href="#article_10">How do I publish and get paid for my content?</a>
                            </h4>
                        </div>
                        <div id="article_10" class="panel-collapse collapse">
                            <div class="panel-body prose_content">
                                <p>You can publish your content as a set of questions which conforms to our content contribution guide. After publishing your content, It becomes available to students on the Quizac app, and you get paid when a student makes a purchase.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    
}
</script>

