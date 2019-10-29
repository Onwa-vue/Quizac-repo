<template>
     <section class="section_block">
            <div class="container">
                <div class="row">
                    <div class="offset-md-2 col-md-8">
                        <header class="margin_bottom_md">
                            <h2>Congratulations</h2>
                            <p class="font-md">You are now a verified quizac contributor</p>
                        </header>
                        <p class="subtitle">You can now start creating questions and sell to the the quizac audience. We advice you to read our contributor guide before you start creating, and also update your profile. If you need any help along the way, we are just a message away.</p>

                        <div class="row action_options">
                            <div class="col-sm-4">
                                <a href="../../../docs/generation_guideline.pdf" class="help_subs">
                                    <figure>
                                        <img src="../../../img/icons/guide.svg" alt="Contributor Guide">
                                    </figure>
                                    <p class="font-regular">Download the Contributor Guide</p>
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <router-link class="help_subs" to="/dashboard/questionset/new">
                               
                                    <figure>
                                        <img src="../../../img/icons/create_sets.svg" alt="Create a Set">
                                    </figure>
                                    <p class="font-regular">Create your first question set</p>
                                </router-link>
                            </div>
                            <div class="col-sm-4">
                                <a href="#" class="help_subs">
                                    <figure>
                                        <img src="../../../img/icons/update_profile.svg" alt="Update Profile">
                                    </figure>
                                    <p class="font-regular">Update your contributor profile</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
var localstore  = require('../../utility/cookieStorage.js'); 
export default {
   mounted: function(){
        console.log(localstore.getdata('stage1_onboarding'));
        console.log(localstore.getdata('stage2_onboarding'));
   }
}
</script>
