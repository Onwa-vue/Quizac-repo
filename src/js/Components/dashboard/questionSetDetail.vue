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
                                        {{topic.name}}
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
           <new-reference-dialog v-on:add-reference="addReference"></new-reference-dialog>
           <delete-question-set-dialog v-bind:title="title"></delete-question-set-dialog>

            <main class="main_content_wrapper layout_content_area">
                <div class="layout_content_wrapper">
                    <nav class="wizard_nav not_fixed">
                        <div class="container"> 
                            <ul class="step_nav" role="tablist">
                                <li class="step_nav_item" v-bind:class="{active:tabStatus.question}"><router-link v-bind:to="{name:'questionSetVersions', param:{questionsetId:questionSetId}}" >Questions</router-link></li>
                                <li class="step_nav_item"><a href="#">Reviews</a></li>
                                <li class="step_nav_item" v-bind:class="{active:tabStatus.setting}"> <router-link  v-bind:to="{name:'editQuestionSetVersions',param:{questionsetId:questionSetId}}">Settings</router-link></li>
                            </ul>

                        </div>
                    </nav>
                    <router-view name="section" v-on:setversion="setversion" v-bind:ttle="title" v-bind:desc="description" v-bind:refs="references" v-bind:disc="discount" v-bind:amount="price"  v-on:update-detail="updateQuestionSet" v-on:update-Price="updateprice" v-on:update-reference="updateReference" ref="editSection" v-on:set-tab-status="setTabStatus" ></router-view>
                </div>
            </main>

        </div>
    </div>
</template>

<script>

import questionUpload_dialog from './subcomponents/questionUpload_dialog.vue';
import newReference_dialog from './subcomponents/newRef_dialog_component.vue';
import deleteQuestionSet_dialog from './subcomponents/question_set_delete_dialog.vue';
var client = require('../../Utility/serverClient.js')
var localstore  = require('../../utility/cookieStorage.js'); 
var axios = require('../../Utility/serverRequestUtil.js')
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
            discount:null,
            price:null,
            colorCode:'',
            versionId:'',
            questionSetId:'',
            tabStatus:{ question:false, review:false,setting:false }

        }
    },

    components:{
        'question-upload-dialog': questionUpload_dialog,
        'new-reference-dialog': newReference_dialog,
        'delete-question-set-dialog' :deleteQuestionSet_dialog
    },

    methods:{

        setversion: function(versionId){
            this.versionId=versionId;
        },

        updateQuestionSet : function(data){
            this.title = data.title;
            this.description = data.description;
        },

        updateprice: function(data){
            this.price = data.price;
            this.discount = data.discount;
        },
        
        updateReference: function(data){
            this.references = data.references
        },

        addReference : function(data){
            this.references.push(data) 
            this.$refs.editSection.addResource(data)
        },

        setTabStatus : function(tab){

           
            if(tab.toLowerCase().trim() =='question'){
                this.tabStatus.question = true;
                this.tabStatus.review = false;
                this.tabStatus.setting = false;
            }
            if(tab.toLowerCase().trim() == 'review'){
                this.tabStatus.question = false;
                this.tabStatus.review = true;
                this.tabStatus.setting = false;
            }

            if(tab.toLowerCase().trim() == 'setting'){

                this.tabStatus.question = false;
                this.tabStatus.review = false;
                this.tabStatus.setting = true;

            }
        }
    },

    mounted: function(){

        var vueInstance = this;
        questionSetId = this.$route.params.questionsetId;
        this.questionSetId = questionSetId;
        contributorId = localstore.getdata('auth').id;
        var url = '/api/contributor/'+ contributorId +'/question_set/'+questionSetId;
        axios.get(url).then(resp=>{

            console.log(resp);

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
                    vueInstance.price = data.price;
                    vueInstance.discount = data.discount
                    vueInstance.colorCode = data.colorCode
                
            }
        })
    }
}
</script>

