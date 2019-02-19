<template>
    <div>
        <router-view name="header"  ref="updateLayout"></router-view>
        <router-view name="main" v-on:update-header="updateHeader"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>

import router from './router.js'

export default {
    router  ,
    methods:{
        updateHeader: function(){
            console.log('in container calling header')
            this.$refs.updateLayout.update();
        }
    }
}
</script>

