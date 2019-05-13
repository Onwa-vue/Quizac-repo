<template>
      <div class="modal fade" id="new_subject_dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps">Add Subject</h4>
                    <button type="button" class="close_dialog" data-dismiss="modal" ></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label">Subject Name</label>
                            <input type="text" class="form-control" placeholder="E.g Biology" v-model="name" v-validate="'required'">
                        </div>
                       <!-- <div class="form-group">
                            <label class="control-label">Resource URL</label>
                            <input type="url" class="form-control" placeholder="Link for more information" v-model="link" v-validate="'url'" >
                            <p class="help-block">URL for any website that gives more information about the subject.</p>
                        </div> -->
                        <div class="form-group">
                            <label class="control-label">Short description</label>
                            <textarea rows="10" class="form-control" placeholder="A short description of the subject" v-model="description" v-validate="'required'"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Subject Thumbnail</label>
                            <div class="media_block">
                                <div class="media_block_item">
                                    <figure class="tile_image">
                                        <div class="image_wrapper">
                                            <label for="upload_imgs" class="upload_btn" title="Change subject thumbnail">
                                                <input type="file" accept=".png, .jpg, .jpeg" name="file" id="upload_imgs" hidden class="inputfile" v-on:change="imgPreview"/>
                                                <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <polygon points="20 9 11 9 11 0 9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9"/>
                                                </svg>
                                            </label>
                                            <img alt="Add subject thumbnail" v-bind:src="imgBase64">
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-primary" v-on:click="submit" v-bind:class="{loading:isProcessing}">
                         <span class="btn-label">Add</span>
                                <div class="loadmore">
                                        <span>Processing</span>
                                        <span class="spinner"></span>
                                </div>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

var localstore  = require('../../../utility/cookieStorage.js'); 
var axion = require('../../../Utility/serverRequestUtil.js')

var count= 0;
export default {
    data(){
        return{
                name: null,
                link: null,
                description: null,
                imgBase64: './dist/img/banners/subject_default.png',
                fileTye: null,
                fileName: null,
                file : null,
                isProcessing: false
        }
    },

    methods:{

         imgPreview : function(event){
              var input = event.target;
              let vueInstance= this;
              if (input.files && input.files[0] && input.files[0].type.match(/image.*/)) {
                      var reader = new FileReader();
                      reader.onload = (e) => {    
                      vueInstance.imgBase64 = e.target.result;
                      }
                      
                reader.readAsDataURL(input.files[0]);
                this.fileTye = input.files[0].type;
                this.fileName = input.files[0].name;
                this.file = input.files[0];
              }
     },


        submit: function(){
             this.$validator.validate().then(result => {
                 if(result){
                      count = count + 1;
                        var data = {
                            id:this.name + count,
                            name: this.name,
                            link: this.link,
                            description: this.description,
                            imageData: { fileType: this.fileTye, name: this.fileName, base64String: this.imgBase64, }
                        }

                        console.log(data);
                        const formdata = new FormData();
                        formdata.append("imageData", this.file);
                        formdata.append('name', data.name);
                        var issuggested = new Blob([true]);
                        formdata.set('issuggested', issuggested);
                        formdata.append('description', data.description);

                        var vueInstance = this;
                        var contributorId = localstore.getdata('auth').id;
                        var url = '/api/contributor/'+ contributorId +'/subject'
                        this.isProcessing = true;
                        axion.postForm(url, formdata).then(res=>{
                            console.log(res);
                            if(res.status==200 && res.data.status=="success"){

                                data.id = res.data.data.id;
                                vueInstance.$emit('submitsubject',data);
                                vueInstance.name= null;
                                vueInstance.description= null;
                                vueInstance.link = null;
                                vueInstance.imgBase64 = './dist/img/banners/subject_default.png';
                                vueInstance.isProcessing = false;
                                $('#new_subject_dialog').modal('toggle');
                                
                            }
                         }).catch(err=>{
                             console.log(err);
                         })        
                 }
             })
        },

         getSubjects : function(){
           
        },
    }
}
</script>

