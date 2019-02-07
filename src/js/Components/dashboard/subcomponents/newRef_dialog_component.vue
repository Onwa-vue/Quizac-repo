<template>
     <div class="modal fade" id="new_ref">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps">New Reference</h4>
                    <button type="button" class="close_dialog" data-dismiss="modal"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label caps_upper">Reference Name</label>
                            <input type="text" class="form-control" placeholder="E.g New general mathematics" v-model="name">
                        </div>
                        <div class="form-group">
                            <label class="control-label caps_upper">Reference URL</label>
                            <textarea rows="2" class="form-control" placeholder="Link or description of reference" v-model="url"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-primary" data-dismiss="modal" v-on:click="addReference">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return {
            name:null,
            url : null
        }
    },

    methods:{
        addReference : function(){
            this.$emit('add-reference',{title:this.name, resourceLink:this.url})
            this.name = '';
            this.url = '';
            $('#new_ref').modal('toggle');
        }
    }
}
</script>
