<template>

<section class="section_block">
                        <div class="container">
                           <header class="row margin_bottom_sm">
                               <div class="col-6">
                                   <h3 class="section_title d-inline-block">Questions</h3>
                                    <span class="d-inline-block font-md color__grey_dark">{{questionCount}}</span>
                               </div>
                               <div class="col-6 text-right dropdown">
                                  <!--Add a new version group when the user clicks this button-->
                                   <button type="button" class="btn btn-primary" v-on:click="createVersion" >New Version
                               </button></div>
                           </header>
                            <div class="alert alert_scondary">
                                <div class="extra_info">
                                    <div class="alert_icon">
                                        <span class="cust_icon icon_info"></span>
                                    </div>
                                    <div class="alert_info">
                                        <h4 class="margin_bottom_sm font-md">You have unpublished Questions</h4>
                                        <p>You need to add 4 more questions to reach the minimum of 20 questions per update required.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="content_inner">
                                <nav class="filter_navigation">
                                    <div class="filter_search">
                                       <form action="">
                                           <div class="search_bar_holder">
                                               <button class="search_btn">
                                                   <svg class="cust_icon" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                       <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
                                                           <path d="M15.364 2.636A9 9 0 1 1 2.636 15.363 9 9 0 0 1 15.364 2.636zM20 20l-5-5"></path>
                                                       </g>
                                                   </svg>
                                               </button>
                                               <label class="search_input">
                                                   <input type="search" class="filter_search_input" placeholder="Search..." title="Search for...">
                                               </label>
                                           </div>
                                       </form>
                                   </div>
                                </nav>
                                <div class="question_render">
                                    <div class="question_version_block" v-for="version in versions" v-bind:key="version.id">
                                        <header class="version_header">
                                            <a class="accordion-toggle collapsed" data-toggle="collapse"  v-bind:href="'#'+version.tagName" aria-expanded="false" v-on:click="toggleCollapse(version.id)">
                                                <div class="collapse_stat_indicator">
                                                    <svg class="cust_icon state_icon" viewBox="0 0 24 24">
                                                        <path d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z" fill="currentColor" fill-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <h2 class="version_label">
                                                    <span>{{version.name}}</span> - <span>{{version.date}}</span> - <span>{{version.questionCount}}</span>
                                                </h2>
                                                <div class="version_status">
                                                    <span class="stat_tag"></span>
                                                </div>
                                            </a>
                                        </header>
                                        <!--Show if there are no questions in the version-->
                                        <div class="version_items panel-collapse collapse " style="" v-bind:id="version.tagName">
                                        <question-upload-option v-bind:questionSetId="questionSetId" v-bind:contributorId="contributorId" v-bind:versionId="version.id" v-if="version.questionCount==0" ></question-upload-option>

                                        <questions-table v-if="version.questionCount>0" v-bind:questions="version.questions" v-bind:versionName="version.name" v-bind:versionId="version.id" v-bind:isPublished="version.isPublished" v-bind:questionSetId="questionSetId"></questions-table>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </section>
                    
</template>

<script>
var client = require('../../../Utility/serverClient.js')
var axios;
var localstore  = require('../../../utility/cookieStorage.js'); 
import questionsTable from './questionsTable.vue'
import questionUploadOption from './questionUploadOptions.vue'

export default {
    data(){
        return{
            versions:[],
            questionSetId:null,
            contributorId:null,
            questionCount:0
        }
    },

    methods:{
        toggleCollapse:function(versionId){
            this.$emit('setversion', versionId);
        },
        createVersion: function(){

            var vueInstance = this;
            var url = `/api/contributor/${this.contributorId}/question_set/${this.questionSetId}/create_version`;
            console.log(url);

           axios.post(url).then(resp=>{
                console.log(resp);
                if(resp.statusText=='OK'){

                    var formatedDate = new Date();
                     var data = {
                        id: resp.date.id,
                        name: `Version ${vueInstance.versions.length + 1}`,
                        questionCount: 0,
                        questions:[],
                        date: `${formatedDate.getDate()} / ${formatedDate.getMonth()}/${formatedDate.getFullYear()}`
                    }
                    vueInstance.versions.push(data);
                }
            }).catch(err=>{

            }) 
        }
    },

    mounted: function(){
        
        axios = client();
        var vueInstance = this;
        this.questionSetId = this.$route.params.questionsetId;
        this.contributorId = localstore.getdata('auth').id;
        var url = `/api/contributor/${this.contributorId}/question_set/${this.questionSetId}/versions`
        var vueInstance = this;
        axios.get(url).then(resp =>{

            console.log(resp);

            if(resp.statusText=='OK'){
                var count = 1;
                resp.data.forEach( version=>{

                    var questions = [];
                    version.questions.forEach(question=>{
                        questions.push({
                            id:question.id,
                            text:question.text,
                            versionId: version.id
                        })
                    })

                    var formatedDate = new Date(version.dateUpdated);
                    var data = {
                        id:version.id,
                        name: `Version ${count}`,
                        tagName:`Version_${count}`,
                        questionCount: questions.length,
                        questions:questions,
                        isPublished: version.isPublished,
                        date: `${formatedDate.getDate()}/${formatedDate.getMonth() + 1}/${formatedDate.getFullYear()}`
                    }

                    count = count +1;
                    vueInstance.versions.push(data)

                })
            }

        }).catch(err=>{

        })
    },

    components:{
        'questions-table':questionsTable,
        'question-upload-option': questionUploadOption
    }

    
    
}
</script>

