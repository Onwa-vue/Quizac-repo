<template>
    <div class="modal fade" id="new_topic_dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps">New Topic</h4>
                    <button type="button" class="close_dialog" data-dismiss="modal"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label caps_upper">Topic Name</label>
                            <input type="text" class="form-control" placeholder="E.g Arithmetics" v-model="title" v-validate="'required'">
                        </div>
                        <div class="form-group">
                            <label class="control-label caps_upper">Reference URL</label>
                            <input type="url" class="form-control" placeholder="Link for more information" v-model="resourceLink" v-validate="'required'">
                            <p class="help-block">Please provide a link to any material we can use to verify this topics.</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label caps_upper">Description</label>
                            <textarea rows="10" class="form-control" placeholder="Tell us a little about this topic" v-model="description" v-validate="'required'"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label caps_upper">Assign an image as the topic thumbnail</label>
                        <div class="custom_selector">

                                <article class="thumb_item selector_item" v-for="media in medias" v-bind:key="media.index" v-bind:class="{selected:media.isSelected}" >
                                    <label  class="thumb_wrapper" v-bind:for="media.index" >
                                       <input type="radio"  class="cst_selector" name="topic_thumbnail" v-bind:id="media.index" >
                                        <div class="thumbImage_holder">
                                            <img v-bind:src="media.url"  alt="Topic Thumb" v-on:click="selectImage(media)">
                                        </div>
                                    </label>
                                </article>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-primary" v-on:click="add" v-bind:class="{loading:isProcessing}">
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

var axion = require('../../../Utility/serverRequestUtil.js')

export default {
    data(){
        return{
            title:null,
            resourceLink: null,
            description: null,
            image: null,
            subjectId: null,
            subjectName: null,
            medias: [],
            selectedImg: null,
            isProcessing:false
        }
    },

    methods: {
        add: function(){

        this.$validator.validate().then(result => {
         if(result){

            var data = {
                id:'',
                name : this.title,
                description:this.description,
                subjectId : this.subjectId,
                status : 'suggested',
                imageurl: this.selectedImg.url
            }

            console.log(data);

            var vueInstance = this;
            this.isProcessing = true;
           // var url = "/api/Subject/"+ this.subjectId +"/topics";
             var url ="/api/topic";

            axion.post( url, data).then(resp=>{
                console.log(resp);
                if(resp.status == 200){
                    data.id = resp.data.id;
                    vueInstance.$emit('add-topic',data);
                    $("#new_topic_dialog").modal('toggle'); 
                }
                vueInstance.isProcessing = false;
            }) 
         }
        })
     },

        setSubject: function(subject){
            console.log(subject);
            this.subjectId = subject.id;
            this.subjectName = subject.name;
            this.getImages();
        },

        selectImage : function(img){

            this.medias.forEach(m=>{
                m.isSelected = false
            });
            img.isSelected = true; 
            this.selectedImg = img;

        },

        getImages: function(){

            let url = this.subjectName != null ? "/api/topic/images/"+ this.subjectName : "/api/topic/images";
            var vueInstance = this;
            axion.get(url).then(resp=>{
                console.log(resp);
                if(resp.status == 200){
                    var index = 0;
                    vueInstance.medias = [];
                    resp.data.slice(0,40).forEach(img=>{
                        if(img != null || img != ""){
                            vueInstance.medias.push({ url: img, index: "HJJ847H840KJH" +index, isSelected: false});
                            index = index + 1;
                        }
                    })
                }
            }) 

        }

      /*  addTopic: function(){
           
           var data = {
               name:this.title,
               description: this.description,
               refrences:[{title:this.title, resourceLink: this.resourceLink}],
               imageData: this.selectImage.url,
               subjectId: this.subjectId
           }

           axion.post("/api/topic", data).then(resp=>{
               if(resp.status=200){
                   data.id = resp.data.id;
                   vueInstance.$emit('submitTopic',data);
                    $('#new_topic_dialog').modal('toggle');
               }
           })
        } */
    },

   
}
</script>

