<template lang="">
    <div>
        <h1>contact</h1>
        <button @click="Home" >Go to Home</button>
    </div>
</template>
<script>
export default {
    methods: {
        Home(){
            const self =this;
            setTimeout( function(){
            self.$router.push("/");
        },1000) 
        }
    },
    
}
</script>
<style lang="scss" scoped >
    
</style>