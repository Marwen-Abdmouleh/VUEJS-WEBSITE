<template lang="">
    <div>
            <ul class="nav nav-pills">

  <li class="nav-item">
    <router-link :to="{name :'Homes'}" class="nav-link" active-class="active"  exact >Home</router-link>
  </li>

    <li class="nav-item">
    <router-link :to="{name :'Abouts'}" class="nav-link" active-class="active"  exact >About</router-link>
  </li>

    <li class="nav-item">
    <router-link :to="{name :'Contacts'}" class="nav-link" active-class="active"  exact >Contact</router-link>
  </li>

    <li class="nav-item">
    <router-link :to="{name :'Produits'}" class="nav-link" active-class="active"  exact >To-Do-List</router-link>
  </li>

    <li class="nav-item">
    <router-link :to="{name :'Galleries'}" class="nav-link" active-class="active"  exact >Galleries</router-link>
  </li>


</ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped >
    
</style>