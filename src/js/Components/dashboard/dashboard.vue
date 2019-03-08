<template>
<div>
    <new-ref-dialog v-on:add-reference="addReference" ></new-ref-dialog>
    <new-topic-dialog></new-topic-dialog>

    <main class="main_content_wrapper bg__off_white">
         <router-view name="userdata"></router-view>
         <router-view name="main" v-bind:references="references"  v-on:select-subject="setSujectId" v-on:remove-reference="removeReference" v-on:add-topic="addTopic" ref="main"></router-view>
    </main>
</div>
</template>

<script>

import refDialog from './subcomponents/newRef_dialog_component.vue';
import topicDialog from './subcomponents/newTopic_dialog_component.vue';

export default {
    data(){
        return {
            topicId :'',
            subjectId :'',
            references:[]
        }
    },

    methods:{

        addReference: function(reference){
            this.references.push(reference);
        },

        removeReference : function(ref){
           var index = this.references.indexOf(ref);
           this.references.splice(index,1);              
        },

        setSujectId : function(subjectId){
            this.subjectId = subjectId;
        },

        addTopic: function(d){
            this.$refs.main.addTopic(d);
        }
    },

    components:{
        'new-ref-dialog':refDialog,
        'new-topic-dialog' : topicDialog
    }
}
</script>

