<template lang="">
    <div>
        <h1>axios</h1>

    <table class="table table-dark">
  <thead>
    <tr>
 
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>


    <tr v-for="item in list" :key="item.id"  >
      <th>{{item.id}}</th>
      <td>{{item.title}}</td>
      <td> {{item.body}} </td>
    </tr>
  </tbody>
</table>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            list:undefined,
        }
    },
    created() {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            this.list=response.data;
        } )
    },
    
}
</script>
<style lang="scss" scoped >
    
</style>