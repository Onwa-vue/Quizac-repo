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
              <p class="color__primary">You are going to remove <strong>{{title}}</strong>.</p>
              <p>Deleted question sets CANNOT be restored! Are you sure you want to delete it?</p>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-sm btn-inverse">Yes, Delete it</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        title: String
    }
}
</script>

