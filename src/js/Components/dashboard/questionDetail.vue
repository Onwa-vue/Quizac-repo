<template>
    <div class="split_layout">
        <div class="layout_wrapper layout_reversed">
            
            <aside class="layout_aside bg__off_white">
                <div class="layout_content_wrapper">
                    <div class="qs_masthead">
                        <span class="font-md caps_upper">User comments</span>
                        <div class="empty_state ">
                            <div class="def_wrapper">
                                <p>There are no comments on this question yet.</p>
                            </div>
                        </div>
                        <div class="details_panel_body hidden">
                            <div class="post_comment ">
                                <article class="ds_post_item">
                                <header class="post_header">
                                    <div class="post_info_meta">
                                        <span class="author_name">Spelling Errors</span>
                                        <span class="post_time">
                                            <time>2d ago</time>
                                        </span>
                                    </div>
                                </header>
                                <div class="post_content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis veniam repellat molestias placeat nam sed delectus.</p>
                                </div>
                            </article>
                                <article class="ds_post_item">
                                <header class="post_header">
                                    <div class="post_info_meta">
                                        <span class="author_name">Incorrect Answer</span>
                                        <span class="post_time">
                                            <time>2d ago</time>
                                        </span>
                                    </div>
                                </header>
                                <div class="post_content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis veniam repellat molestias placeat nam sed delectus.</p>
                                </div>
                            </article>
                            </div>
                            <div class="section_cto">
                                <button class="btn-link">Clear all</button>
                            </div>
                        </div>
                    </div>
               </div>
            </aside>
            
            <main class="main_content_wrapper bg__white layout_content_area">
                <div class="layout_content_wrapper">
                    <section class="section_block">
                        <div class="container" v-if="!pageStatus.Isloading">
                            <div class="detail_control">
                                <a class="back_btn" title="Back to my questions sets" v-on:click="questionSetDetail">
                                    <span class="back_icon">
                                        <img src="../../../img/icons/angle_back.svg" alt="Back to my questions sets">
                                    </span>
                                    <span class="bc_label">
                                         All Questions
                                    </span>
                                </a>
                            </div>
                            <div class="question_render">
                                <header class="details_panel_header">
                                    <h4 class="info_title font_regular">{{currentQuestion.text}}</h4>
                                    <div class="productMeta">
                                        <div class="metaItem">
                                            <span class="meta_label">Points:</span>
                                            <span class="metaValue caps_normal">10</span>
                                        </div>
                                        <div class="metaItem">
                                            <span class="meta_label">Duration:</span>
                                            <span class="metaValue caps_normal">{{currentQuestion.point}}</span>
                                        </div>
                                        <div class="metaItem">
                                            <span class="meta_label">Difficulty:</span>
                                            <span class="metaValue caps_normal">{{currentQuestion.level.name}}</span>
                                        </div>
                                    </div>
                                </header>
                                <div class="details_panel_body">
                                <div class="numbered_row_list question_options">
                                    <div class="numbered_row_item question_option_item " v-for=" choice in currentQuestion.choices" v-bind:key="choice.count"  v-bind:class="{is_answer:choice.isCorrect}" >
                                        <span class="row_count"></span>
                                        <span class="row_content">{{choice.text}}</span>
                                    </div>
                                </div>
                            </div>
                                <div class="details_panel_body">
                                <h4 class="margin_bottom_sm">Review</h4>
                                <p> {{currentQuestion.review}}</p>
                            </div>
                            </div>
                            <div class="pager_block text-center">
                                <div class="pager_nav">
                                    <button type="button" data-role="none" class="nav_prev nav_arrow" aria-label="Previous" role="button" v-on:click="previous">
                                        <span>Previous</span>
                                    </button>
                                    <span class="page_counter">
                                        Question <span>{{currentQuestionIndex}}</span> of <span>{{questionList.length}}</span>
                                    </span>
                                    <button type="button" data-role="none" class="nav_next nav_arrow" aria-label="Next" role="button" v-on:click="next">
                                        <span>Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            
            <div class="submit_widget widget_fixed_bottom">
                <div class="container">
                    <div class="nav_flex_row">
                        <div class="nav_btn btn-prev">
                            <button type="button" class="btn btn-default">Archive</button>
                            <a class="btn btn-primary" v-on:click="edit">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>


<script>
var client = require('../../Utility/serverClient.js')
var localstore  = require('../../utility/cookieStorage.js'); 
var axios;


var questionSetId;
var contributorId;

export default {
    data(){
        return{
            pageStatus:{ Isloading:true,  },
            questionList:[],
            questionId:null,
            currentQuestion:null,
            currentQuestionIndex:1
        }
    },


    methods:{

        next:function(){
            if(this.currentQuestionIndex < this.questionList.length){
                 this.currentQuestionIndex = this.currentQuestionIndex +1;
                 var id;
                 id = this.questionList[this.currentQuestionIndex].id;
                 this.$router.push({name:'questionDetail', params:{questionsetId:questionSetId, questionId:id  }})
            }
        },

        previous: function(){

            if(this.currentQuestionIndex>1){
                
                this.currentQuestionIndex = this.currentQuestionIndex -1;
                var id;
                id = this.questionList[this.currentQuestionIndex].id;
                this.$router.push({name:'questionDetail', params:{questionsetId:questionSetId, questionId:id  }})
            }
        },

        questionSetDetail : function(){
            this.$router.push({name:'questionSetVersions',params:{questionsetId:questionSetId}})
        },

        edit:function(){
            if(this.pageStatus.Isloading == false){
               this.$router.push({name:'newQuestionForm', params:{questionsetId:questionSetId,versionId:this.currentQuestion.versionId}, query:{questionId:this.currentQuestion.id}});
            }
        }
    },

    mounted:function(){
        axios = client();
        var vueInstance = this;
        questionSetId = this.$route.params.questionsetId;
        this.questionId = this.$route.params.questionId;
        contributorId = localstore.getdata('auth').id;
        var url = '/api/contributor/'+ contributorId +'/question_set/'+questionSetId+'/versions';
        axios.get(url).then(resp=>{
            if(resp.statusText=='OK'){
                 resp.data.forEach( version=>{
                    version.questions.forEach(question=>{
                        var choices =[];
                        var c =0;
                        question.choices.forEach(choice=>{
                            choices.push({
                                count:c,
                                isCorrect: choice.isCorrect,
                                text:choice.text
                            })

                            c= c+1;
                        });

                        vueInstance.questionList.push({
                            id:question.id,
                            text:question.text,
                            choices:choices,
                            duration:question.duration,
                            id:question.id,
                            imageUrl: question.imageUrl,
                            level:question.level,
                            point:question.point,
                            review:question.review,
                            versionId:version.id
                        })
                    })
                 })

               vueInstance.currentQuestion =  vueInstance.questionList.find(q=>{
                   return q.id == vueInstance.questionId;
                 }) 
                 
                 vueInstance.currentQuestionIndex = vueInstance.questionList.map(q=>{ return q.id}).indexOf(vueInstance.questionId) + 1;
                 vueInstance.pageStatus.Isloading=false;
            }

        }).catch(err=>{

        })
    },

    watch:{
        '$route' (to, from) {    
         this.questionId =  this.$route.params.questionId;
         this.currentQuestion = this.questionList.find(q=>{ return q.id==this.questionId})
         // this.currentQuestionIndex = this.questionList.indexOf(this.currentQuestion);
        }
    }
}
</script>
