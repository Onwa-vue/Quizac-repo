<template>
    <div>
        <router-view name="header"></router-view>
        <router-view name="main"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>

import router from './router.js'

export default {
    router  
}
</script>

