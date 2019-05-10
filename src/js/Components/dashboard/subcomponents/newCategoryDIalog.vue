<template>
    <div class="modal fade" id="new_cat_dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps">Add your class</h4>
                    <button type="button" class="close_dialog" data-dismiss="modal" ></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label">Category Name</label>
                            <input type="text" class="form-control" placeholder="Name of your class" v-model="category.name" v-validate="'required'">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Wikipedia Link</label>
                            <input type="url" class="form-control" placeholder="Link to the class's wikipedia page" v-model="category.link" v-validate="'url'" >
                        </div>
                        <div class="form-group">
                            <label class="control-label">Description</label>
                            <input type="text" class="form-control" placeholder="Name of your class" v-model="category.description" v-validate="'required'" >
                        </div>
                        <div class="numbered_row_item">
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="control-label">How would you categorize your class?</span>
                                </header>
                                <div class="form-group">
                                    <div class="radio" v-for="cat in parentCategories" v-bind:key="cat.id">
                                        <label for="class_cat_basic" class="control_flex">
                                            <input type="radio" class="form_ind" name="class_cat" v-bind:id="'class_cat_'+cat.name" v-bind:value="cat.id" v-model="category.parentId" v-validate="'required'">
                                            <div class="form_info_block">
                                                <span class="label_title color-black caps_upper">{{cat.name}}</span>
                                                <span class="label_info">{{cat.description}}</span>
                                            </div>
                                        </label>
                                    </div>

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

var count=0;

export default {
    data(){
        return {
            parentCategories:[],
            category:{
                name:null,
                link:null,
                description:null,
                parentId: null

            },
            isProcessing:false
        }
    },


    methods:{

        submit: function(){
             this.$validator.validate().then(result => {


                 var vueInstance = this;
                 if(result){
                      count = count + 1;
                    
                        var data = {
                            //id: this.category.name + count,
                            name:this.category.name,
                            parentId: this.category.parentId,
                            isActive: '',
                            description: this.category.description,
                            isSuggested: true
                        }

                        console.log(data);
                        
                            var contributorId = localstore.getdata('auth').id;
                            this.isProcessing = true;
                                axion.post('/api/contributor/'+ contributorId +'/category', data).then(res=>{
                                   if(res.data.status=="success"){
                                       data.id = res.data.id;
                                vueInstance.$emit('submitcategory',data);
                                vueInstance.category.name=null;
                                vueInstance.category.link=null;
                                vueInstance.category.description=null;
                                vueInstance.category.parentId= null;
                                vueInstance.isProcessing = false;
                                $('#new_cat_dialog').modal('toggle');
                              }
                            }).catch(err=>{
                                console.log(err)
                                })   
                            
                       
                 }
             })
        }
       
    },

     mounted:function(){
        let vueInstance = this;
        let url ='/api/category';
        axion.get(url).then(resp=>{ 
            if(resp.status==200){
                resp.data.forEach(cat=>{
                    if(cat.parentId == null){
                    vueInstance.parentCategories.push({
                        id:cat.id,
                        name:cat.name,
                        description: cat.description
                    })
                }

                })
            }
        }).catch(err=>{

        })
       
    }
}
</script>

