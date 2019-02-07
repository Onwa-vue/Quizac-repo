<template>

     <div class="table table-responsive table-brand">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th><div class="text-left">Question Text</div></th>
                                                            <th><div class="text-center">Comments</div></th>
                                                            <th><div>Options</div></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr v-for="question in questions" v-bind:key="question.id">
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                       {{question.text}}
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a>Edit</a></li>
                                                                        <li><a v-on:click="viewQuestion(question)">View</a></li>
                                                                        <li><a>Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                       
                                                    </tbody>
                                                </table>
                                                <!--Hide or remove for published versions-->
                                                <article class="post_item_thumb new_post_thumb margin_top_sm" v-bind:class="{hidden:isPublished}">
                                                    <a  class="post_thumb_wrapper justify-content-center align-items-center" v-on:click="openQuestionForm">
                                                        <span class="t_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                <polygon points="20 9 11 9 11 0 9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9"></polygon>
                                                            </svg>
                                                        </span>
                                                        <span>Manage Questions</span>
                                                    </a>
                                                </article>
    </div>
    
</template>

<script>
export default {
    props:{
        questions:Array,
        versionName:String,
        isPublished:Boolean,
        versionId:String,
        questionSetId: String
    },

     methods:{
        openQuestionForm : function(){
          var questionSetId = this.$route.params.questionsetId;
          this.$router.push({name:'newQuestionForm', params:{questionsetId:questionSetId, versionId: this.versionId}})
        },

        viewQuestion: function(question){
            this.$router.push({name:'questionDetail', params:{questionsetId:this.questionSetId, questionId: question.id}})
        }
    }


}
</script>

