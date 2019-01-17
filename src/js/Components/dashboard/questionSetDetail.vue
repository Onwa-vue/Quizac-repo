<template>
     <div class="split_layout">
        <div class="layout_wrapper">
            <aside class="layout_aside bg__black color__grey_light">
                <div class="layout_content_wrapper">
                    <div class="qs_masthead">
                        <div class="detail_control">
                            <router-link class="back_btn" title="Back to my questions sets" to="/dashboard/questionset">
                           <!-- <a href="user_sets.html" class="back_btn" title="Back to my questions sets">-->
                                <span class="back_icon">
                                    <img src="../../../img/icons/angle_back.svg" alt="Back to my questions sets">
                                </span>
                                <span class="bc_label">
                                    All Sets
                                </span>
                           <!-- </a> -->
                            </router-link>
                        </div>
                        
                        <div class="details_panel_header">
                            <h4 class="detail_title color__white">{{title}}</h4>
                            <div class="productMeta">
                                <div class="metaItem">
                                    <span class="metaValue">SSS3</span>
                                </div>
                                <div class="metaItem">
                                    <span class="metaValue">{{subject.name}}</span>
                                </div>
                                <div class="metaItem">
                                    <span class="metaValue">
                                        Arithmetics
                                    </span>
                                </div>
                                <div class="metaItem">
                                    <span class="metaValue">
                                        <span class="currency naira">{{price}}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="details_panel_body">
                            <p>{{description}}</p>
                            
                            <ul class="custom_bullet_list">
                                <li class="bullet_list_item" v-for="reference in references" v-bind:key="reference.title" >
                                    <div class="bullet_list_label">
                                        <span class="listTitle">{{reference.title}}</span>
                                        <span class="listSub">{{reference.resourceLink}}</span>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
               </div>
            </aside>
           <question-upload-dialog v-bind:versionId="versionId"></question-upload-dialog>
            <main class="main_content_wrapper layout_content_area">
                <div class="layout_content_wrapper">
                    <nav class="wizard_nav not_fixed">
                        <div class="container">
                            <ul class="step_nav" role="tablist">
                                <li class="step_nav_item active"><a href="question_set_details.html">Questions</a></li>
                                <li class="step_nav_item"><a href="set_reviews.html">Reviews</a></li>
                                <li class="step_nav_item"><a href="set_settings.html">Settings</a></li>
                            </ul>
                        </div>
                    </nav>
                    <router-view name="section" v-on:setversion="setversion"></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>

import questionUpload_dialog from './subcomponents/questionUpload_dialog.vue';
var client = require('../../Utility/serverClient.js')
var localstore  = require('../../utility/cookieStorage.js'); 
var axios;

 var questionSetId;
 var contributorId;

export default {
    data(){
        return {
            id:'',
            title:'',
            topic:{},
            subject:{},
            questionsCount:'',
            authorName:'',
            description:'',
            references:[],
            price:'',
            colorCode:'',
            versionId:''

        }
    },
    components:{
        'question-upload-dialog': questionUpload_dialog
    },

    methods:{
        setversion: function(versionId){
            this.versionId=versionId;
        }
    },

    mounted: function(){

        axios = client();
        var vueInstance = this;
        questionSetId = this.$route.params.questionsetId;
        contributorId = localstore.getdata('auth').id;
        var url = '/api/contributor/'+ contributorId +'/question_set/'+questionSetId;
        axios.get(url).then(resp=>{
            if(resp.statusText=='OK'){
                var data = resp.data; 
                
                    vueInstance.id = data.id
                    vueInstance.title = data.title
                    vueInstance.topic = {
                        id:data.topic.id,
                        name: data.topic.name,
                        description: data.topic.description
                    }
                    vueInstance.subject = {
                        id:data.subject.id,
                        name : data.subject.name,
                        description : data.subject.description
                    }
                    vueInstance.questionsCount = data.questionsCount
                    vueInstance.authorName = data.authorName
                    vueInstance.description = data.description
                    vueInstance.references = data.references
                    vueInstance.price = data.price
                    vueInstance.colorCode = data.colorCode
                
            }
        })
    }
}
</script>

