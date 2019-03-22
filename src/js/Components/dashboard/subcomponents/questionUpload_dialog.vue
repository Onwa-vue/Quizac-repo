<template>
    <div class="modal fade" id="question_upload" style="display: none;" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps">Upload your question</h4>
                    <button type="button" class="close_dialog" data-dismiss="modal"></button>
                </header>
                <div class="modal-body">
                    <div class="margin_bottom_md">
                        <p>Upload a word (.doc, .docx) document containing your questions. Make sure your Questions are formated as specified in our question creation guide. If they are not, will not be able to extract your questions. </p>
                    </div>

                    <vue-dropzone ref="dropzone" id="drop1"  :options="dropOptions" @vdropzone-success="afterComplete" @vdropzone-error="oncompleted"></vue-dropzone>

                   <!-- <form action="img/banners" class="user_file dropzone dz-clickable" id="userFileUploader">
                       <div class="dz-default dz-message"><span>Drop files here to upload</span></div>
                    </form> -->

                    <div class="statusxMessages hidden">
                        <!--Show this after parsing the uploaded document, You can change the message depending on the outcome-->
                        <span class="statusMsg parseStatus">Document parsed successfully</span>
                        <!--Show this after extracting the questions from the parsed document-->
                        <span class="statusMsg questionCount">15 Questions generated</span>
                    </div>
                </div>
                <div class="modal-footer">
                   <!--Continue button to initiate parsing and question extraction. hide it when parsing is completed to revel the preview button-->
                    <button class="btn btn-sm btn-primary " v-on:click="upload">Continue</button>
                    <a href="doc_questions_preview.html" class="btn btn-sm btn-primary hidden">Preview Questions</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import vueDropzone from "vue2-dropzone";
var localstore  = require('../../../utility/cookieStorage.js'); 
var axios = require('../../../Utility/serverRequestUtil.js')

var questionSetId;
var contributorId;
var authdata = localstore.getdata('auth');

export default {
    props:{
        versionId:String
    },
    
    data(){
        return {
            dropOptions: {
                 url: 'http://api.staging.quizac.com/api/contributor/'+ contributorId +'/question_set/'+ questionSetId +'/batch_preview',
                 addRemoveLinks: true,
                 paramName:'file',
                 maxFiles: 1,
                 autoProcessQueue: false,
                 dictResponseError: 'Error uploading file!',
                 headers:{'Authorization':'bearer '+ authdata.access_token },
                 acceptedFiles:'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'
             }       
        }
    },

    methods:{
        afterComplete: function(file, resp){

            var vueContext = this;
            if(resp.status=="success"){
                console.log(resp);
                axios.post(`api/contributor/${contributorId}/question_set/${questionSetId}/add_bulk`,resp.data).then(function(r){

                    console.log(r);
                    if(r.data.status=="success"){
                        // display questions here 
                        vueContext.$emit('update-version',{data: resp.data, id:vueContext.versionId})
                        $('#question_upload').modal('hide')
                    }
                })
               
            }
            
        },

        upload: function(){
            console.log(authdata)
            this.$refs.dropzone.processQueue();
        },

        oncompleted: function(file, msg, xhr){
         console.log(msg);  
         console.log(xhr);  
        }
    },
    components:{
        vueDropzone
    },

    beforeCreate: function(){
         contributorId = localstore.getdata('auth').id;  
         questionSetId = this.$route.params.questionsetId;
    }
}
</script>

