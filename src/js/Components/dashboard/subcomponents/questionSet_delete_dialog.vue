<template>
    <div class="modal fade show" id="confirm_delete" style="display: block; padding-right: 17px;">
      <div class="modal-dialog">
        <div class="modal-content">
          <header class="modal-header">
            <h4 class="modal-title">Confirm Delete</h4>
            <button type="button" class="close_dialog" data-dismiss="modal"></button>
          </header>
          <div class="modal-body">
            <form action="">
              <p class="color__primary">You are going to remove <strong>Wave Theory</strong>.</p>
              <p>Deleted question sets CANNOT be restored! Are you sure you want to delete it?</p>
            </form>
          </div>
          <div class="modal-footer">
           <!-- <button type="submit" class="btn btn-sm btn-inverse">Yes, Delete it</button> -->

             <button class="btn btn-sm btn-inverse" v-on:click="deleteSet" v-bind:class="{loading:status.processing}">
                    <span class="btn-label">Yes, Delete it</span>
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
var client = require('../../../Utility/serverClient.js')
var axios = require('../../Utility/serverRequestUtil.js')
var localstore  = require('../../../utility/cookieStorage.js'); 

export default {
    props:{
        id: String,
        title: String,
        contibutorId: String,
        status:{
            processing: false
        }
    },

    methods:{
        deleteSet: function(){

            var vueInstance = this;
            var url = `/api/contributor/${contibutorId}/question_set/${id}`;
            vueInstance.status.processing= true
            axios.delete(url).then(resp=>{
                if(resp.statusText=='OK'){
                    vueInstance.status.processing= false
                    vueInstance.$router.push('/dashboard/questionset')
                }
            }).catch(err=>{
                vueInstance.status.processing= false
            })
        }
    },

    mounted: function(){
       
    }
}
</script>

