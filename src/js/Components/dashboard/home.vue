<template>
    
     <section class="section_block">
            <div class="container">
                <div class="empty_state hidden row">
                    <div class="offset-md-2 col-md-8">
                        <header class="margin_bottom_md">
                            <h2>Congratulations</h2>
                            <p class="font-md">You are now a verified quizac contributor</p>
                        </header>
                        <p class="subtitle">You can now start creating questions and sell to the the quizac audience. We advice you to read our contributor guide before you start creating, and also update your profile. If you need any help along the way, we are just a message away.</p>

                        <div class="row action_options">
                            <div class="col-sm-4">
                                <a href="forum.html" class="help_subs">
                                    <figure>
                                        <img src="./img/icons/guide.svg" alt="Contributor Guide">
                                    </figure>
                                    <p class="font-regular">Download the Contributor Guide</p>
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <a href="contact.html" class="help_subs">
                                    <figure>
                                        <img src="./img/icons/create_sets.svg" alt="Create a Set">
                                    </figure>
                                    <p class="font-regular">Create your first question set</p>
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <a href="contact.html" class="help_subs">
                                    <figure>
                                        <img src="./img/icons/update_profile.svg" alt="Update Profile">
                                    </figure>
                                    <p class="font-regular">Update your contributor profile</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-md-6 info_block">
                        <div class="block_wrapper">
                            <header class="block_header">
                                <h3 class="block_title color-grey_dark">My Question Sets</h3>
                            </header>
                            <div class="card_list_col">
                               <article class="card_item new_item">
                                    <a href="new_set.html" class="card_wrapper">
                                       <span>Create a new Question set</span>
                                    </a>
                                </article>

                               <question-set v-for="questionset in questionsets" v-bind:key="questionset.id" v-bind:questionset="questionset"></question-set>

                            </div>
                            <div class="section_cto">
                                <a href="user_sets.html" class="cta_link arrow_link">
                                    See all question sets
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 info_block">
                        <div class="block_wrapper">
                            <header class="block_header">
                                <h3 class="block_title color-grey_dark">Recent Feedbacks</h3>
                            </header>
                            <div class="card_list_col">

                                <feed-back v-for="feedback in feedbacks" v-bind:key="feedback.id" v-bind:feedback="feedback"></feed-back>

                            </div>
                            <div class="section_cto">
                                <a href="feedbacks.html" class="cta_link arrow_link">
                                    See all Feedbacks
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script>

import questionset from './questionset.vue';
import feedback  from './feedback.vue';

export default {

    data(){
        return {
            questionsets:[],
            feedbacks:[]
        }
    },
    
    components :{
        'question-set': questionset,
        'feed-back' : feedback
    }
}
</script>
