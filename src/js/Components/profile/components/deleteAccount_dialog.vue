<template>
    <div class="modal fade" id="confirm_delete">
      <div class="modal-dialog">
        <div class="modal-content">
          <header class="modal-header">
            <h4 class="modal-title">Confirm Delete</h4>
            <button type="button" class="close_dialog" data-dismiss="modal"></button>
          </header>
          <div class="modal-body">
            <form action="">
              <p>We are sorry to see you go, Please note that deleting your account is permanent, and can not be undone. You will no longer be able to access any information stored or collected using the platform,</p>
              <p>This action can not be undone. Are you sure you want to delete it?</p>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary" v-on:click="deleteAccount">Yes, Delete it</button>
            <button type="button" data-dismiss="modal" class="btn btn-default">Cancel</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

    props:{
        id:String
    },

    methods: {
        deleteAccount: function(){
            
        }
    }
}
</script>

