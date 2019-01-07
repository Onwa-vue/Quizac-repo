<template>
    <main class="main_content_wrapper">
        <section class="section_block">
            <div class="container content_narrow">
                <header class="section_header">
                    <h3 class="section_title">New Question</h3>
                </header>
                
                <div class="form_body">
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
                                    <div class="seletor_pill selector_item">
                                        <label for="diff_0" class="pill_wrapper">
                                           <input type="radio" id="diff_0" class="cst_selector" name="qs_diff" value="Easy" v-model="difficulty">
                                            <span class="selector_label">
                                                Easy
                                            </span>
                                        </label>
                                    </div>
                                    <div class="seletor_pill selector_item">
                                        <label for="diff_1" class="pill_wrapper">
                                           <input type="radio" id="diff_1" class="cst_selector" name="qs_diff" value="Medium" v-model="difficulty">
                                            <span class="selector_label">
                                                Medium
                                            </span>
                                        </label>
                                    </div>
                                    <div class="seletor_pill selector_item">
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
                                                    <input type="radio" name="quest_option" id="option_1" v-model="option.status">
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

                                    <div class="tray_item hidden attachment_tile" v-bind:class="{ hidden:!showImagePreview}" >
                                        <figure class="tile_image">
                                            <a href="#" class="attachment_dismiss" title="Remove reference" v-on:click="cancelPreview">
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
                    </form>
                    <div class="submit_widget widget_fixed_bottom">
                        <div class="container content_narrow">
                            <div class="nav_flex_row">
                                <div class="nav_btn btn-prev">
                                </div>
                                <div class="nav_btn btn-next">
                                    <a href="question_set_details.html" class="btn btn-primary">{{processStatus.text}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>

var localstore  = require('../../utility/cookieStorage.js'); 
var client = require('../../Utility/serverClient.js')
var axion = client();

var questionSetId;
var contributorId;

export default {
    data(){
        return {
            processStatus:{
                text:'Add Question',
                IsProcessing : false
            },
            questionText: '',
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
            ]
        }
    },

    computed:{
         showImagePreview:function(){
             return this.img== null?false:true
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
              if (input.files && input.files[0]) {
                      this.passport = input.files[0];
                      var reader = new FileReader();
                      reader.onload = (e) => {
                      this.img = e.target.result;
                      }
                reader.readAsDataURL(input.files[0]);
                
                var stringReader = new FileReader();
                stringReader.readAsBinaryString(input.files[0]);
                stringReader.onload = (e)=>{
                    this.imgString = btoa(reader.result);
                }

              }
     },

       cancelPreview: function(){
           this.img = null;
           this.imgString = '';
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

                    var data = {
                        text: this.questionText,
                        duration: this.duration,
                        point: this.point,
                        review : this.review,
                        choices : choices,
                        imageBase64: this.imgString
                    }

                    var url = '/api/contributor/'+contributorId+'/question_set/'+questionSetId;
                    
                    vueInstance.processStatus.IsProcessing = true;
                    vueInstance.processStatus.text = 'adding ...';

                    axion.post(url, data).then(function(resp){

                        if(resp.statusText =='OK' && resp.data.status=='success'){
                            
                            vueInstance.questionText = '';
                            vueInstance.difficulty = null;
                            vueInstance.review = '';
                            vueInstance.duration = '';
                            vueInstance.point ='';
                            vueInstance.img= null;
                            vueInstance.imgString = '';
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
                        }
                    
                    }).catch(function(err){
                         vueInstance.processStatus.IsProcessing = false;
                         vueInstance.processStatus.text = 'Add Question';
                    })

          }
          
       }


    },

     mounted: function(){
        questionSetId = this.$route.params.questionSetId
        contributorId = localstore.getdata('auth').id;
     }
}
</script>

