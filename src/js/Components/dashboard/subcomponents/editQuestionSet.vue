<template>
    <section class="section_block">
                        <div class="container">
                            <div class="alert alert_scondary hidden " v-bind:class="{hidden:status.showStatusMsg}">
                                <div class="extra_info">
                                    <div class="alert_icon">
                                        <span class="cust_icon icon_info"></span>
                                    </div>
                                    <div class="alert_info">
                                        <p>The question set "{{title}}" has been updated successfully.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="content_inner ">
                                <div class="form_body">
                                    <header class="section_header">
                                        <h3 class="info_title caps_upper">Question set Details</h3>
                                    </header>
                                    <form action="">
                                        <div class="row form_row_group">
                                            <div class="form_group_item col-md-4">
                                                <h4 class="form_row_title text_right_sm">Set Name</h4>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <input type="text" class="form-control" placeholder="Question set name" v-model="name">
                                            </div>
                                        </div>
                                        <div class="row form_row_group">
                                            <div class="form_group_item col-md-4">
                                                <h4 class="form_row_title text_right_sm">Description</h4>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <textarea rows="10" class="form-control" placeholder="A short description of this question set" v-model="description"></textarea>
                                            </div>
                                        </div>
                                        <div class="row form_row_group">
                                            <div class="form_group_item col-md-4">
                                                <h4 class="form_row_title text_right_sm">What's new</h4>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <textarea rows="10" class="form-control" placeholder="Write about any new update made to the set since the last publish date" v-model="about"></textarea>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="section_cto text-right">

                                       <!-- <button type="submit" class="btn btn-primary">Save Changes</button> -->

                                        <button class="btn btn-primary" v-on:click="updateDetail" v-bind:class="{loading:status.updatingDetail}">
                                            <span class="btn-label">Save Changes</span>
                                            <div class="loadmore">
                                                    <span>saving</span>
                                                    <span class="spinner"></span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <hr>
                                <div class="form_body">
                                    <header class="section_header">
                                        <h3 class="info_title caps_upper">Manage References</h3>
                                    </header>
                                    <div class="form-group">
                                        <div class="listBlocks">
                                            <div class="listItem" v-for="resource in resources" v-bind:key="resource.id">
                                               <div class="flex_wrapper">
                                                    <div class="list_content">
                                                        <span class="listTitle color__black">{{resource.title}}</span>
                                                        <span class="listSub">
                                                            {{resource.resourceLink}}
                                                        </span>
                                                        <span class="margin_top_sm">
                                                            <a href="#new_ref" data-toggle="modal" class="btn-link">Edit</a>
                                                        </span>
                                                    </div>
                                                    <div class="itemDismiss">
                                                        <a href="#" title="Remove reference">
                                                            <i class="cust_icon icon_xs icon_close"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div class="more_control">
                                            <a href="#new_ref" data-toggle="modal" data-backdrop="static">
                                                <span>+</span>
                                                <span>Add a reference.</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="form_body">
                                    <h3 class="info_title caps_upper">Pricing</h3>
                                    <form action="">
                                        <div class="row form_row_group">
                                            <div class="form_group_item col-md-4">
                                                <h4 class="form_row_title text_right_sm">Sales Price (#)</h4>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <input type="number" class="form-control" value="0.00" min="0" placeholder="How much do you want to sell this sell" v-model="price">
                                            </div>
                                        </div>
                                        <div class="row form_row_group">
                                            <div class="form_group_item col-md-4">
                                                <h4 class="form_row_title text_right_sm">Discount (%)</h4>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <input type="number" class="form-control" value="0" min="0" v-model="discount">
                                            </div>
                                        </div>
                                        <div class="section_cto text-right">
                                             <button class="btn btn-primary" v-on:click="updatePricing" v-bind:class="{loading:status.updatingPricing}">
                                            <span class="btn-label">Save Changes</span>
                                            <div class="loadmore">
                                                    <span>saving</span>
                                                    <span class="spinner"></span>
                                            </div>
                                        </button>
                                        </div>
                                    </form>
                                </div>
                                <hr>
                                <div class="form_body section_group">
                                    <h3 class="info_title caps_upper">Delete this Set</h3>
                                    <p class="font-md">Deleting this set will result in an irreversible loss of all questions,reviews and payment information attached to this question set.</p>
                                    <p class="font-md">This action cannot be undone</p>

                                    <div class="margin_top_md">
                                        <button data-target="#confirm_delete" data-toggle="modal" data-backdrop="static" class="btn btn-default">Delete this Set</button>
                                    </div>
                              </div>
                            </div>
                        </div>
                    </section>
</template>

<script>
var client = require('../../../Utility/serverClient.js')
var axios;
var localstore  = require('../../../utility/cookieStorage.js'); 
var questionSetId, contributorId,
var count = 1;

export default {

    props:{
        ttle:String,
        desc: String,
        refs:Array,
        disc: String,
        amount: String

    },

    data(){
        return{
            title:'',
            name:'',
            decription:'',
            about:'',
            resources:[],
            price:'',
            discount:'',
            status:{
                updatingDetail:false,
                updatingReferences:false,
                updatingPricing:false,
                showStatusMsg:false   
            }
        }
    },

    methods:{

        updateDetail: function(){

            if(!this.status.updatingDetail){
            var data = {
                title: this.name,
                description: this.description
            }

            this.status.updatingDetail= true;
            vueInstance.status.showStatusMsg= false
            var url = `/api/contributor/${contributorId}/question_set/${questionSetId}`
            axios.put(url,data).then(resp=>{
                if(resp.statusText=='OK'){
                    vueInstance.status.showStatusMsg= true
                    vueInstance.title= vueInstance.name;
                    vueInstance.$emit('update-detail',data)
                    setTimeout(e=>{
                        vueInstance.status.showStatusMsg= true
                    }, 10000)
                }
                this.status.updatingDetail= false;
            }).catch(err=>{
                this.status.updatingDetail= false;
            })
          }
        },

        updatePricing: function(){
            
            if(!this.status.updatingPricing){
                var data = {
                    price: this.price,
                    discount: this.discount
                }

                this.status.updatingPricing= true;
                vueInstance.status.showStatusMsg= false;
                var url = `/api/contributor/${contributorId}/question_set/${questionSetId}`
                axios.put(url,data).then(resp=>{
                    if(resp.statusText=='OK'){
                        vueInstance.status.showStatusMsg= true
                        setTimeout(e=>{
                            vueInstance.status.showStatusMsg= true
                        }, 10000);
                        vueInstance.$emit('update-Price', data);
                    }
                    vueInstance.status.updatingPricing= false;
                }).catch(err=>{
                    vueInstance.status.updatingPricing= false;
                })
            }

        },

        delete: function(){

        },

        removeResorce: function(resource){

            var vueInstance = this;
          if(!this.status.updatingPricing){
             var index = this.resources.indexOf(resource);
             this.resources.splice(index,1);
             let r = [];
             this.resources.forEach(resource=>{
                 r.push(resource);
             })

             var data={
                 references:r
             }
             vueInstance.status.updatingReferences= true;
              var url = `/api/contributor/${contributorId}/question_set/${questionSetId}`
               axios.put(url,data).then(resp=>{
                    if(resp.statusText=='OK'){
                        vueInstance.status.showStatusMsg= true
                        setTimeout(e=>{
                            vueInstance.status.showStatusMsg= true
                        }, 10000)

                        vueInstance.$emit('update-reference', data);
                    }
                    vueInstance.status.updatingReferences= false;
                }).catch(err=>{
                    vueInstance.status.updatingReferences= false;
                })


          }

        },

        addResource: function(resource){

             vueInstance.status.updatingReferences= true;
             let r = [];
             this.resources.push(resource);
             this.resources.forEach(r=>{
                 r.push(r);
             })
             var data = {
                 references:r
             }
              var url = `/api/contributor/${contributorId}/question_set/${questionSetId}`
               axios.put(url,data).then(resp=>{
                    if(resp.statusText=='OK'){
                        vueInstance.status.showStatusMsg= true
                        setTimeout(e=>{
                            vueInstance.status.showStatusMsg= true
                        }, 10000)

                    }
                    vueInstance.status.updatingReferences= false;
                }).catch(err=>{
                    vueInstance.status.updatingReferences= false;
                })
            

        },

        



    },


    mounted: function(){

         axios = client();
         var vueInstance = this;
         questionSetId = this.$route.params.questionsetId;
         contributorId = localstore.getdata('auth').id;

         this.name = this.ttle;
         this.title= this.ttle;
         this.description = this.desc;
         this.resources = this.refs;
         this.price = this.amount;
         this.discount = this.disc
        /* var url = `/api/contributor/${contributorId}/question_set/${questionSetId}`
         axios.get(url).then(resp=>{
             if(resp.statusText=='OK'){
                 vueInstance.title= resp.data.title,
                 vueInstance.name = resp.data.title;
                 vueInstance.description = resp.data.description;
                 vueInstance.price = resp.data.price;
                 vueInstance.discount = resp.data.discount;
                 resp.data.references.forEach(ref=>{
                     vueInstance.resources.push({
                         title:ref.title,
                         link: ref.resourceLink,
                         id: count
                     })
                     count = count+1;
                 });
             }
         }); */
    }
}
</script>

