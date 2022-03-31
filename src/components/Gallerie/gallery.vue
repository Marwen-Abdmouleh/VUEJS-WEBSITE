<template lang="">
    <div>
                  <ul class="nav nav-pills">

    <li class="nav-item">
    <router-link :to="{name :'Image'}" class="nav-link" active-class="active"  exact >Image</router-link>
  </li>

    <li class="nav-item">
    <router-link :to="{name :'Video'}" class="nav-link" active-class="active"  exact >Video</router-link>
  </li>

    <li class="nav-item">
    <router-link :to="{name :'Axios'}" class="nav-link" active-class="active"  exact >Axios</router-link>
  </li>



</ul>
<router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped >
    
</style>