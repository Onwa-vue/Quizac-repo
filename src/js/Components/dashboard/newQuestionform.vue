<template>
<div class="split_layout">
        <div class="layout_wrapper layout_reversed">

            <aside class="layout_aside bg__off_white">
                <div class="layout_content_wrapper">
                    <div class="qs_masthead">
                        <span class="font-md caps_upper">Saved Questions</span>
                        <div class="empty_state" v-if="questionList.length==0">
                            <div class="def_wrapper">
                                <p>You will see a list of your newly created questions here.</p>
                            </div>
                        </div>
                        <div class="question_render " v-if="questionList.length>0">
                          <p class="color__grey_dark margin_top_sm margin_bottom_md">Add <strong>12</strong> more questions to publish this version of your question set.</p>
                           <div class="post_thumb_list ">

                                <article class="post_item_thumb" v-for="question in questionList" v-bind:key="question.id">
                                    <div class="post_thumb_wrapper align-items-center">
                                        <div class="post_info">
                                            <span class="">{{question.text}}</span>
                                        </div>
                                        <div class="post_control dropdown">
                                            <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                </svg>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a v-on:click="editQuestion(question)">Edit</a></li>
                                                <li><a v-on:click="removeQuestion(question)">Remove</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <!--Show this when the user reach the minimum number of version questions-->
                            <div class="section_cto ">
                                <button data-target="#publish_form" data-toggle="modal" data-backdrop="static" class="btn btn-inverse">Publish Updates</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            
             <main class="main_content_wrapper bg__white layout_content_area">
                <div class="layout_content_wrapper">
                    <section class="section_block">
                        <div class="container">
                            <div class="detail_control">
                                <a href="question_set_details.html" class="back_btn" title="Back to my questions sets">
                                    <span class="back_icon">
                                        <img src="../../../img/icons/angle_back.svg" alt="Back to my questions sets">
                                    </span>
                                    <span class="bc_label">
                                        Wave Theory
                                    </span>
                                </a>
                            </div>
                            <header class="section_header">
                                <h3 class="section_title">New Question</h3>
                            </header>

                            
                                <form action="">
                                    <div class="form_row_group row">
                                        <div class="form_group_item col-md-4">
                                            <h4 class="form_row_title text_right_sm caps_upper font-regular">Question Text</h4>
                                        </div>
                                        <div class="form_group_item col-md-8">
                                             <textarea rows="3" class="form-control" placeholder="E.g What is the meaning of question set?" v-model="questionText"></textarea>
                                        </div>
                                    </div>
                                    <div class="form_row_group row">
                                        <div class="form_group_item col-md-4">
                                            <h4 class="form_row_title text_right_sm caps_upper font-regular">Difficulty</h4>
                                        </div>
                                        <div class="form_group_item col-md-8">
                                            <div class="custom_selector">
                                                <div class="seletor_pill selector_item" v-bind:class="{selected:difficulties.easy}">
                                                    <label for="diff_0" class="pill_wrapper">
                                                        <input type="radio" id="diff_0" class="cst_selector" name="qs_diff" value="Easy" v-model="difficulty">
                                                        <span class="selector_label">
                                                            Easy
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="seletor_pill selector_item" v-bind:class="{selected:difficulties.medium}">
                                                    <label for="diff_1" class="pill_wrapper">
                                                        <input type="radio" id="diff_1" class="cst_selector" name="qs_diff" value="Normal" v-model="difficulty">
                                                        <span class="selector_label">
                                                            Normal
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="seletor_pill selector_item" v-bind:class="{selected:difficulties.hard}"> 
                                                    <label for="diff_2" class="pill_wrapper">
                                                        <input type="radio" id="diff_2" class="cst_selector" name="qs_diff" value="Hard" v-model="difficulty">
                                                        <span class="selector_label">
                                                            Hard
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form_row_group row">
                                        <div class="form_group_item col-md-4">
                                            <h4 class="form_row_title text_right_sm caps_upper font-regular">Options</h4>
                                        </div>
                                        <div class="form_group_item col-md-8">
                                            <div class="numbered_row_list question_options">
                                                
                                                
                                                <div class="numbered_row_item question_option_item" v-for="option in options" v-bind:key="option.count">
                                                    <div class="row_count"></div>
                                                    <div class="row_content">
                                                        <div class="option_input_widget">
                                                            <div class="option_widget_block option_answer_marker" title="" data-toggle="tooltip" data-original-title="Set as answer">
                                                                <input type="radio" name="quest_option" id="option_1" v-on:click="selectAnswer(option)" v-bind:value="option.status" v-model="answer">
                                                            </div>
                                                            <div class="option_widget_block option_answer_input">
                                                                <input type="text" class="option_input_control" placeholder="Option text here" v-model="option.text">
                                                            </div>
                                                            <div class="option_widget_block option_answer_control">
                                                                <span class="item_dismiss" v-on:click="removeOption(option)">
                                                                    <i class="cust_icon icon_remove icon_xs"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                                <div class="more_control ">
                                                    <button class="input_control" v-on:click="addOption">
                                                        <span class="t_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <polygon points="20 9 11 9 11 0 9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9"></polygon>
                                                        </svg>
                                                        </span>
                                                        <span>Add another Option</span>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="form_row_group row">
                                        <div class="form_group_item col-md-4">
                                            <h4 class="form_row_title text_right_sm caps_upper font-regular">Review</h4>
                                        </div>
                                        <div class="form_group_item col-md-8">
                                            <textarea rows="5" class="form-control" placeholder="A short explanation of the answer to the question" v-model="review"></textarea>
                                        </div>
                                    </div>
                                    <div class="form_row_group row">
                                        <div class="form_group_item col-md-4">
                                            <h4 class="form_row_title text_right_sm caps_upper font-regular">Duration(s)</h4>
                                        </div>
                                        <div class="form_group_item col-md-8">
                                            <input type="number" min="10" max="60" class="form-control form_mng" value="30" v-model="duration">
                                        </div>
                                    </div>
                                    <div class="form_row_group row">
                                        <div class="form_group_item col-md-4">
                                            <h4 class="form_row_title text_right_sm caps_upper font-regular">Points</h4>
                                        </div>
                                        <div class="form_group_item col-md-8">
                                            <input type="number" min="10" max="60" class="form-control form_mng" value="10" v-model="point">
                                        </div>
                                    </div>
                                    <div class="form_row_group row">
                                        <div class="form_group_item col-md-4">
                                            <h4 class="form_row_title text_right_sm caps_upper font-regular">Attach Image</h4>
                                        </div>
                                        <div class="form_group_item col-md-8">
                                            <div class="attachment_tray">
                                                <div class="tray_item attachment_control">
                                                    <label for="upload_imgs" class="upload_btn" title="Select Image">
                                                        <input type="file" multiple="" accept=".png, .jpg, .jpeg" name="file" id="upload_imgs" hidden="" class="inputfile" v-on:change="imgPreview">
                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <polygon points="20 9 11 9 11 0 9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9"></polygon>
                                                        </svg>
                                                    </label>
                                                </div>
                                                <div class="tray_item attachment_tile" v-bind:class="{ hidden:!showImagePreview}" >
                                                    <figure class="tile_image">
                                                        <a class="attachment_dismiss" title="Remove reference" v-on:click="cancelPreview">
                                                            X
                                                        </a>
                                                        <div class="image_wrapper">
                                                            <img  :src="img">
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     <div class="form_cto text-right">
                                          <a class="btn btn-default" v-on:click="CancelEdit" v-if="id!=null">Cancel</a>
                                        <a class="btn btn-primary" v-on:click="addQuestion">{{processStatus.text}}</a>
                                    </div>
                                </form>
                        </div>
                    </section>
                </div>
             </main>
        </div>
</div>

   
</template>
<script>

var localstore  = require('../../utility/cookieStorage.js'); 
var client = require('../../Utility/serverClient.js')
var axion = require('../../Utility/serverRequestUtil.js')

var questionSetId;
var contributorId;
var versionId;
 var count=0;
 var arrayIndex;

export default {
    data(){
        return {

            questionList:[],

            processStatus:{
                text:'Add Question',
                IsProcessing : false
            },
            id: null,
            questionText: '',
            difficulties:{easy:false, medium:false, hard:false},
            difficulty: null,
            review:'',
            duration:'',
            point:'',
            imgString:'',
            img:null,
            options:[
                 {status:false, text:'', count:1},
                 {status:false, text:'', count:2},
                 {status:false, text:'', count:3}, 
                 {status:false, text:'', count:4}, 
                 {status:false, text:'', count:5}
            ],
            answer:null
        }
    },

    computed:{
         showImagePreview:function(){
             var s = this.img == null?false:true;
             return s;
         }
    },

    methods:{

        addOption: function(){
           this.options.push({status:false, text:''})
        },

        removeOption: function(option){
            var index = this.options.indexOf(option);
            this.options.splice(index,1);
        },

        imgPreview : function(event){

              var input = event.target;
              let vueInstance= this;
              if (input.files && input.files[0]) {
                      this.passport = input.files[0];
                      var reader = new FileReader();
                      reader.onload = (e) => {
                      this.img = e.target.result;
                       vueInstance.imgString = e.target.result
                      }   
                reader.readAsDataURL(input.files[0]);
               
              }
     },

       cancelPreview: function(){
           this.img = null;
           this.imgString = '';
       },

       selectAnswer : function(option){
           this.options.forEach(op=>{
               op.status= false
           })
           option.status=true;
          
       },

       addQuestion : function(){

           var vueInstance = this;
           if(!this.processStatus.IsProcessing){
                    let choices= [];
                    this.options.forEach(function(option){
                        if(option.text !=''){
                            choices.push({
                                text:option.text,
                                isCorrect:option.status
                            })
                        }
                    })
                
                count = count + 1;

                    var data = {
                        text: this.questionText,
                        duration: this.duration,
                        point: this.point,
                        review : this.review,
                        choices : choices,
                        level:{name:this.difficulty},
                        imageUrl: this.imgString,
                        count:count
                    }

                    vueInstance.processStatus.IsProcessing = true;
                    vueInstance.processStatus.text = 'adding ...';
                    
                   // console.log(contributorId = localstore.getdata('auth'));
                   if(this.id == null){

                    console.log(data);

                    axion.post(`/api/contributor/${contributorId}/question_set/${questionSetId}/versions/${versionId}`,[data]).then(resp=>{
                        
                       
                        if(resp.statusText=='OK' && resp.data.status=='success'){
                            data.id= resp.data.id;
                            vueInstance.questionList.push(data);

                            vueInstance.questionText = '';
                            vueInstance.difficulty = null;
                            vueInstance.review = '';
                            vueInstance.duration = '';
                            vueInstance.point ='';
                            vueInstance.img= null;
                            vueInstance.imgString = '';
                            vueInstance.difficulties.easy =false;
                            vueInstance.difficulties.medium=false;
                            vueInstance.difficulties.hard=false;
                            vueInstance.options.forEach(function(option){
                                option.text='';
                                option.status= false
                            })

                            if(vueInstance.options.length>5){
                                var c = vueInstance.options.length -5;
                                vueInstance.options.splice(6,c);
                            }

                            vueInstance.processStatus.IsProcessing = false;
                            vueInstance.processStatus.text = 'Add Question';

                        }else{
                            vueInstance.processStatus.IsProcessing = false;
                            vueInstance.processStatus.text = 'Add Question';
                        }}).catch(err=>{
                        
                        console.log(err);
                        vueInstance.processStatus.IsProcessing = false;
                        vueInstance.processStatus.text = 'Add Question';
                    }) 
                   }
                    else{

                        this.questionList.indexOf(data)
                        data.id = this.id;
                        console.log(data);
                        axion.put(`/api/contributor/${contributorId}/question_set/${questionSetId}/version/${versionId}/questions/${this.id}`,data).then(resp=>{

                          if(resp.statusText=='OK' && resp.data.status=='success'){

                            vueInstance.questionList[arrayIndex] = data;
                            vueInstance.id= null;
                            vueInstance.questionText = '';
                            vueInstance.difficulty = null;
                            vueInstance.review = '';
                            vueInstance.duration = '';
                            vueInstance.point ='';
                            vueInstance.img= null;
                            vueInstance.imgString = '';

                            vueInstance.difficulties.easy =false;
                            vueInstance.difficulties.medium=false;
                            vueInstance.difficulties.hard=false;

                            console.log(vueInstance.difficulties.medium);

                            vueInstance.options.forEach(function(option){
                                option.text='';
                                option.status= false
                            })

                            if(vueInstance.options.length>5){
                                var c = vueInstance.options.length -5;
                                vueInstance.options.splice(6,c);
                            }

                            vueInstance.processStatus.IsProcessing = false;
                            vueInstance.processStatus.text = 'Add Question';
                            }
                            else{
                            vueInstance.processStatus.IsProcessing = false;
                            vueInstance.processStatus.text = 'Update Question';
                            }
                        })
                    }
          }
       },

       removeQuestion: function(q){
           
           console.log(q);
           axion.delete(`/api/contributor/${contributorId}/question_set/${questionSetId}/version/${versionId}/questions/${q.id}`).then(resp=>{
               if(resp.statusText=='OK' && resp.data.status=="success"){
                   var index = this.questionList.indexOf(q);
                   this.questionList.splice(index,1);
               }
           }).catch(err=>{
               
           })   
       },

       editQuestion: function(q){

           console.log(q);
           arrayIndex  = this.questionList.indexOf(q);
           this.id=q.id;
           this.questionText=q.text;
           this.review = q.review;
           this.duration= q.duration;
           this.point= q.point;
           this.img = q.imageUrl==''?null:q.imageUrl;
           this.processStatus.text= "Edit Question"
          
           switch (q.level.name){
               case 'easy':
               this.difficulties.easy=true
               this.difficulties.medium= false;
               this.difficulties.hard = false;

               case 'medium':
               this.difficulties.easy=false
               this.difficulties.medium= true;
               this.difficulties.hard = false;

               case 'hard':
              this.difficulties.easy=false
               this.difficulties.medium= false;
               this.difficulties.hard = true;
           }

           count = q.choices.length;
           this.options = [];
           var options = [];
           var c = 0;

           this.answer=true;

           q.choices.forEach(choice=>{
               options.push({
                   status: choice.isCorrect, 
                   text:choice.text,
                   count: c +1
               })
               c = c+1;
           });
           this.options = options;
       },

       CancelEdit: function(){
          
           this.id= null   
           this.processStatus.text= "Add Question"

            this.questionText = '';
            this.difficulty = null;
            this.review = '';
            this.duration = '';
            this.point ='';
            this.img= null;
            this.imgString = '';
            this.options.forEach(function(option){
                                option.text='';
                                option.status= false
                            })

             if(this.options.length>5){
                    var c = this.options.length -5;
                    this.options.splice(6,c);
                }
       }

    },

    mounted: function(){

        var vueInstance = this;
        questionSetId = this.$route.params.questionsetId
        versionId = this.$route.params.versionId
        var questionId = this.$route.query.questionId;
        
        contributorId = localstore.getdata('auth').id;

        axion.get(`/api/contributor/${contributorId}/question_set/${questionSetId}/versions/${versionId}`).then(resp=>{
           
           if(resp.statusText=="OK"){
                resp.data.questions.forEach(q=>{
                  let choices= [];
                    q.choices.forEach(function(option){
                        if(option.text !=''){
                            choices.push({
                                text:option.text,
                                isCorrect:option.isCorrect
                            })
                        }
                    })

                   var data = {
                        id:q.id,
                        text: q.text,
                        duration: q.duration,
                        point: q.point,
                        review : q.review,
                        level:{name:q.level.name},
                        choices : choices,
                        imageUrl: q.imageUrl
                    }

                    vueInstance.questionList.push(data);
                })

                if(questionId != undefined){
                    vueInstance.id=questionId;
                    var q =   vueInstance.questionList.find(q=>{
                            return q.id == questionId
                        });

                    console.log(q);    
                    vueInstance.editQuestion(q);    
                }
            }
        }).catch(err=>{

        })
    
          /*Custom Selector*/
      var selector = $(".cst_selector"),
          target_container = $('.custom_selector');
            selector.on('click', function() {
                if ($(this).attr("checked"), true) {
                    $(this).parents(".custom_selector").find(".selector_item").removeClass('selected');
                    $(this).parents(".selector_item").addClass("selected");
                } else {
                    $(this).parents(".selector_item").removeClass('selected');
                }
            });    
    


    }
}
</script>

