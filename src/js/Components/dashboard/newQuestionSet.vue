<template>
    <section class="section_block">

        <new-category-dialog v-on:submitcategory="addCategory" v-bind:countries="countries"></new-category-dialog>
        <new-subject v-on:submitsubject="addSubject"></new-subject>
        <new-topic-dialog ref="topicdialog" v-on:add-topic="addTopic"></new-topic-dialog>

            <div class="container content_narrow">
                <header class="section_header">
                    <h3 class="section_title">Question set Details</h3>
                </header>
                
                <div class="form_body">
                    <form action="" class="numbered_row_list">
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">Give your question set a name</span>
                                    <span class="explainer_tooltip" title="" data-toggle="tooltip" data-original-title="You are adviced to use a short name that describe the set as much as possible.">
                                        <img src="../../../img/icons/info.svg" class="cust_icon" alt="More Info">
                                    </span>
                                </header>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Question set name" v-model="name">
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">Tell us about this question set</span>
                                </header>
                                <div class="form-group">
                                    <textarea rows="10" class="form-control" placeholder="A short description of this question set" v-model="about"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">Which class of students is this set for?</span>
                                    <span class="explainer_tooltip" title="" data-toggle="tooltip" data-original-title="You can only create questions for students in the classes you selected during your registration. You can add more classes on your account settings page.">
                                        <img src="../../../img/icons/info.svg" class="cust_icon" alt="More Info">
                                    </span>
                                </header>
                                <div class="form-group custom_selector">
                                    <div class="seletor_pill selector_item" v-for="cat in categories" v-bind:key="cat.id"  v-bind:class="{selected:cat.isSelected}" >
                                        <label v-bind:for="cat.id" class="pill_wrapper">
                                           <input type="radio" v-bind:id="cat.id" class="cst_selector" name="set_cat" v-model="category" v-bind:value="cat.id" v-on:click="selectCategory">
                                            <span class="selector_label">
                                                {{ cat.name }}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                 <div class="more_control">
                                        <a href="#new_cat_dialog" data-toggle="modal" data-backdrop="static">
                                            <span>+</span>
                                            <span> Want to add a new class ? Add it here.</span>
                                        </a>
                                 </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">Under which subject are you setting the questions?</span>
                                </header>
                                <div class="form-group custom_selector">
                                    <div class="seletor_pill selector_item" v-for="sub in subjects" v-bind:key="sub.id" v-bind:class="{selected:sub.isSelected}">
                                        <label v-bind:for="sub.id" class="pill_wrapper">
                                           <input type="radio" v-bind:id="sub.id" class="cst_selector" name="set_subject" v-model="subject" v-bind:value="sub.id" v-on:click="selectSubject">
                                            <span class="selector_label">
                                                {{sub.name}}
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                 <div class="more_control">
                                        <a href="#new_subject_dialog" data-toggle="modal" data-backdrop="static">
                                            <span>+</span>
                                            <span> Want to add a new subject ? Add it here.</span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">What topic are the questions based on?</span>
                                    <span class="explainer_tooltip" title="" data-toggle="tooltip" data-original-title="Question set is a group of questions related to a specific topic.">
                                        <img src="../../../img/icons/info.svg" class="cust_icon" alt="More Info">
                                    </span>
                                </header>
                                <div class="form-group" v-bind:class="{data_loading: status.loadingTopics}">
                                    <select class="form-control" placeholder="Select your subjects of interest" v-model="topic">
                                        <option v-for="tpic in topics" v-bind:key="tpic.id" v-bind:value="tpic.id">{{tpic.name}}</option>    
                                    </select>

                                    <div class="form_input_loader">
                                       <div class="loader_text">Loading</div>
                                        <div class="loader_grid">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                 <div class="more_control">
                                        <a href="#new_topic_dialog" data-toggle="modal" data-backdrop="static">
                                            <span>+</span>
                                            <span>Can't find the topic? Add it here.</span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">Add any reference material(s) you used in preparing this set.</span>
                                </header>
                                <div class="form-group">
                                    <div class="listBlocks">
                                        <div class="listItem" v-for="reference in references" v-bind:key="reference.name">
                                           <div class="flex_wrapper">
                                            <div class="list_content">
                                                <span class="listTitle color__black">{{reference.title}}</span>
                                                <span class="listSub">
                                                   {{reference.resourceLink}}
                                                </span>
                                            </div>
                                            <div class="itemDismiss">
                                                <a title="Remove reference" v-on:click="removeReference(reference)">
                                                    <i class="cust_icon icon_xs icon_close"></i>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                    <div class="more_control">
                                        <a href="#new_ref" data-toggle="modal" data-backdrop="static">
                                            <span>+</span>
                                            <span>Add a reference.</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">Sales price. Set to 0 if your set is free.</span>
                                </header>
                                <div class="row">
                                    <div class="form-group col-sm-6">
                                        <label for="#" class="control-label caps_upper">Standard Price</label>
                                        <div class="input-group">
                                            <input type="number" class="form-control" value="0.00" min="0" placeholder="How much do you want to sell this sell" v-model="price">
                                            <span class="input-group-addon">
                                                NGN <i class="currency naira"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label for="#" class="control-label caps_upper">% discount</label>
                                        <div class="input-group">
                                            <input type="number" class="form-control" value="0" min="0" v-model="discount">
                                            <span class="input-group-addon">
                                                %
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="submit_widget widget_fixed_bottom">
                        <div class="container content_narrow">
                            <div class="nav_flex_row">
                                <div class="nav_btn btn-prev">
                                </div>
                                <div class="nav_btn btn-next">
                                    <a class="btn btn-primary" v-on:click="addQuestionSet">Continue</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>     
</template>

<script>

import newCategoryDialog from './subcomponents/newCategoryDialog.vue';
import newsubject from './subcomponents/newSubjectDialog.vue';
import topicDialog from './subcomponents/newTopic_dialog_component.vue';

var localstore  = require('../../utility/cookieStorage.js'); 
var client = require('../../Utility/serverClient.js');
var axion = require('../../Utility/serverRequestUtil.js');

export default {

    props:{
        references:Array
        },
          
    data(){
        return {
            status:{isProcessing:false, loadingTopics:false},
            name:null,
            about: null,
            categories:[],
            category: null,
            subjects:[],
            subject : null,
            topics : [],
            topic: null,
            price:null,
            discount : null,
            countries:[]
        }
    },

    methods:{

        selectCategory: function(){
             var vueInstance = this;
            this.categories.forEach(function(c){
                if(c.id==vueInstance.category){
                    c.isSelected=true
                }else{
                     c.isSelected=false
                } 
            })
        },

        selectSubject : function(){

            var vueInstance = this;
             this.subjects.forEach(function(s){
                if(s.id==vueInstance.subject){
                    s.isSelected=true
                    vueInstance.$refs.topicdialog.setSubject(s);
                }else{
                     s.isSelected=false
                }
            })

            if(this.subject != null){
                this.status.loadingTopics = true;
                axion.get('/api/Subject/'+ this.subject  +'/topics').then(function(resp){
                    
                    console.log(resp);

                    if(resp.status==200){
                        vueInstance.topics = [];
                        resp.data.forEach(function(t){
                            vueInstance.topics.push({
                                id:t.id,
                                name : t.name,
                                description:t.description,
                                subjectId : t.subjectId,
                                subjectName :t.subjectName,
                                levelId : t.levelId,
                                status : t.status
                            })
                        })
                    }
                    vueInstance.status.loadingTopics = false;
                }).catch(function(err){

                })

                this.$emit('select-subject',this.subject)
            }
        },

        removeReference : function(ref){
           this.$emit('remove-reference', ref)
        },

        addTopic: function(topic){
            this.topics.push(topic);
        },

        addQuestionSet : function(){

            var tp;
            var cats = [];
            var vueInstance = this;
            this.topics.forEach(t=>{
                if(t.id==vueInstance.topic){
                    tp = t
                }
            });

            this.categories.forEach(c=>{
                if(c.id==vueInstance.category){
                    cats.push(c);
                }
            })

            var data = {
                references :this.references,
                price : this.price,
                currencyCode : 566,
                title: this.name,
                description: this.about,
                subjectId:this.subject,
                topic: tp,
                categories:cats,
                questionCount:0,
                colorCode:'FFF'
            }
            
            console.log(data);

            var contributorId = localstore.getdata('auth').id;
            var url = '/api/contributor/'+ contributorId +'/question_set/'+ true;
            
            axion.post(url, data).then(result=>{
                if(result.status==200 && result.data.status =="success"){
                     var id = result.data.data.id;
                     vueInstance.$router.push({name:'questionSetVersions', params:{questionsetId:id}})
                }
            }).catch(err=>{
                
            })
        },

        addCategory : function(data){
            this.categories.push(data)
        },

        addSubject : function(data){
            this.subjects.push(data);
        }
    },

    mounted : function(){

        var authenData = localstore.getdata('auth');
        var vueInstance = this;
        var url ='/api/contributor/'+ authenData.id +'/profile';
        axion.get(url).then(function(r){  
            if(r.status==200 && r.data.status=="success" ){
                r.data.data.categories.forEach(function(c){
                    vueInstance.categories.push({
                        id:c.id,
                        name: c.name,
                        description: c.description,
                        parentId :c.parentId,
                        isSelected: false
                        })
                });

                r.data.data.subjects.forEach(function(s){
                    vueInstance.subjects.push({
                        id:s.id,
                        name: s.name,
                        description : s.description,
                        isSelected:false
                    })
                });
                console.log('countries');
                console.log(r.data.data.countries)
                var i = 1;
               r.data.data.countries.forEach(function(c){
                    vueInstance.countries.push({
                        name: c, 
                        id:i
                    })
                }) 
                }
            }).catch(function(err){

            })  
    },

    components:{
        'new-category-dialog' : newCategoryDialog,
        'new-subject':newsubject,
        'new-topic-dialog' : topicDialog
    }
}

</script>

