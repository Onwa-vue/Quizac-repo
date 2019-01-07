<template>
     <section class="section_block">
                        <div class="container">
                           <header class="">
                               <h3 class="section_title d-inline-block">Questions</h3>
                               <span class="d-inline-block font-md color__grey_dark">0</span>
                           </header>
                           <div class="empty_state">
                                <div class="def_wrapper">
                                    <p>Your set must contain a minimum of 30 questions before it can be published. Choose any of listed options to add your questions.</p>
                                    <div class="section_cto">
                                        <a href="#question_upload" data-toggle="modal" data-backdrop="static" class="control_flex">
                                            <div class="form_info_block">
                                                <span class="label_title color__black caps_upper font-bold">Document Upload</span>
                                                <span class="label_info">Uplaod a word document containing your questions, prepared according to our question creation specifications.</span>
                                            </div>
                                        </a>
                                        <a href="" class="control_flex" v-on:click="openQuestionForm" >
                                            <div class="form_info_block">
                                                <span class="label_title color__black caps_upper font-bold">Question Form</span>
                                                <span class="label_info">Create your questions one at a time; using the questions creator form.</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
             </section>
</template>

<script>


export default {
    methods:{
        openQuestionForm : function(){
          var questionSetId = this.$route.params.questionSetId;
          this.$router.push({name:'newQuestionForm', params:{questionSetId:questionSetId}})
        }
    }
}
</script>

