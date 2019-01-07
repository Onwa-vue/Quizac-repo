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
                    <form action="img/banners" class="user_file dropzone dz-clickable" id="userFileUploader">
                       <div class="dz-default dz-message"><span>Drop files here to upload</span></div>
                    </form>
                    <div class="statusxMessages hidden">
                        <!--Show this after parsing the uploaded document, You can change the message depending on the outcome-->
                        <span class="statusMsg parseStatus">Document parsed successfully</span>
                        <!--Show this after extracting the questions from the parsed document-->
                        <span class="statusMsg questionCount">15 Questions generated</span>
                    </div>
                </div>
                <div class="modal-footer">
                   <!--Continue button to initiate parsing and question extraction. hide it when parsing is completed to revel the preview button-->
                    <button class="btn btn-sm btn-primary ">Continue</button>
                    <a href="doc_questions_preview.html" class="btn btn-sm btn-primary hidden">Preview Questions</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted: function(){
         Dropzone.options.userFileUploader = {
        maxFilesize: 2, // MB
        addRemoveLinks: true,
        acceptedFiles: "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }; 
    }
}
</script>

