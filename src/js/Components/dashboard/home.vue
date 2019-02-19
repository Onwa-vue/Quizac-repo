<template>
     <section class="section_block">
            <div class="container">
 
                <div class="row"> 
                    <div class="col-md-6 info_block">
                        <div class="block_wrapper">
                            <header class="block_header">
                                <h3 class="block_title color-grey_dark">My Question Sets</h3>
                            </header>
                            <div class="card_list_col">
                               <article class="card_item new_item">
                                    <router-link class="card_wrapper" to="/dashboard/questionset/new">
                                   <!-- <a href="new_set.html" class="card_wrapper"> -->
                                         <span>Create a new Question set</span>
                                   <!-- </a> -->
                                    </router-link>
                                </article>
                                                               
                               <question-set v-for="questionset in questionSets" v-bind:key="questionset.id" v-bind="questionset"></question-set>

                            </div>
                            <div class="section_cto">
                                <router-link class="card_wrapper" to="/dashboard/questionset"> See all question sets </router-link>
                               <!-- <a href="user_sets.html" class="cta_link arrow_link">
                                    See all question sets
                                </a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 info_block">
                        <div class="block_wrapper">
                            <header class="block_header">
                                <h3 class="block_title color-grey_dark">Recent Feedbacks</h3>
                            </header>
                            <div class="card_list_col">

                                <feed-back v-for="feedback in feedbacks" v-bind:key="feedback.id" v-bind="feedback"></feed-back>

                            </div>
                            <div class="section_cto">
                                <a href="#" class="cta_link arrow_link">
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

var client = require('../../Utility/serverClient.js')
var localstore  = require('../../utility/cookieStorage.js'); 
var constants  = require('../../utility/constants.js'); 
var axios;

import questionset from './subcomponents/questionset.vue';
import feedback  from './subcomponents/feedback.vue';

export default {
    
    data(){
        return {
            loadingQset:true,
            loadingfback:true,
            questionSets:[],
            feedbacks:[]
        }
    },

    computed : {
        loadingPage : function(){
           this.loadPage();
           return true
        },
    },

    components :{
        'question-set': questionset,
        'feed-back' : feedback
    }, 

    methods: {
        loadPage : function(){
            var vueInstance = this;
            var contributor_id = localstore.getdata('auth').id;
            var req =[];
            req.push(axios.get('api/contributor/'+ contributor_id + '/question_sets/0/2'));
            req.push(axios.get('api/feedback'));
            Promise.all(req).then(function(resps){

                console.log(resps);

                if(resps[0].statusText=='OK'){
                    resps[0].data.forEach(function(q){
                        vueInstance.questionSets.push({
                            id: q.id,
                            title: q.title,
                            questionsCount:q.questionsCount,
                            authorName:q.authorName,
                            performanceScore: q.performanceScore,
                            description:q.description,
                            authorBio: q.authorBio,
                            authorId : q.authorId,
                            image : q.image,
                            price : q.price,
                            subject : q.subject==null?'': q.subject.name,
                            
                        });
                    })    
                }

                if(resps[1].statusText=='OK'){
                    resps[1].data.forEach(function(f){
                        vueInstance.feedbacks.push({
                            id:f.id,
                            name : f.name,
                            description : f.description 
                        })
                    })
                }
            }).catch(err=>{
                
            })
        }
    },
    created: function(){
        
        axios = client();
        this.loadPage();

    },

  
}
</script>
