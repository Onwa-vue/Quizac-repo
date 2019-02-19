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
                        <div class="form-group">
                            <label class="control-label">Resource URL</label>
                            <input type="url" class="form-control" placeholder="Link for more information" v-model="link" v-validate="'url'" >
                            <p class="help-block">URL for any website that gives more information about the subject.</p>
                        </div>
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
                                                <input type="file" accept=".png, .jpg, .jpeg," name="file" id="upload_imgs" hidden="" class="inputfile" v-on:change="imgPreview"/>
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
                    <button class="btn btn-sm btn-primary" v-on:click="submit">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

var count= 0;
export default {
    data(){
        return{
                name: null,
                link: null,
                description: null,
                imgBase64: './dist/img/banners/subject_default.png'
        }
    },

    methods:{

         imgPreview : function(event){

             console.log('change triggered')
              var input = event.target;
              let vueInstance= this;
              if (input.files && input.files[0]) {
                      var reader = new FileReader();
                      reader.onload = (e) => {
                      vueInstance.imgBase64 = e.target.result;
                      console.log(vueInstance.imgBase64);
                      }   
                reader.readAsDataURL(input.files[0]);

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
                            imageUrl: this.imageUrl
                        }

                        this.$emit('submitsubject',data);
                        this.name= null;
                        this.description= null;
                        this.link = null;
                        this.imgBase64 = './dist/img/banners/subject_default.png';
                        $('#new_subject_dialog').modal('toggle');
                 }
             })
        }
    }
}
</script>

