<template lang="">
    <div>
        <h1>about</h1>


    </div>
</template>
<script>
export default {
    beforeRouteLeave (to, from, next) {
        if(confirm("tu veux quitté About!!")){
            next();
        }
    }
}
</script>
<style lang="scss" scoped >
    
</style>