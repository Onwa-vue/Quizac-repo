<template>

           <div class="empty_state hidden">
                <div class="def_wrapper">
                    <p>How would you like to add your questions?</p>
                    <div class="section_cto">
                        <a href="#question_upload" data-toggle="modal" data-backdrop="static" class="control_flex">
                            <div class="form_info_block">
                                <span class="label_title color__black caps_upper font-bold">Document Upload</span>
                                <span class="label_info">Uplaod a word document containing your questions, prepared according to our question creation specifications.</span>
                            </div>
                        </a>
                        <a class="control_flex" v-on:click="openQuestionForm">
                            <div class="form_info_block">
                                <span class="label_title color__black caps_upper font-bold">Question Form</span>
                                <span class="label_info">Create your questions one at a time; using the questions creator form.</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
     
</template>

<script>


export default {
    methods:{
        openQuestionForm : function(){
          var questionSetId = this.$route.params.questionsetId;
          this.$router.push({name:'newQuestionForm', params:{questionsetId:questionSetId}})
        }
    }
}
</script>

