<template >
  <div class="container" >
<h2 class="text-center mt-5" >Ma Liste</h2>  

<!-- Input -->
<div class="d-flex" >
  <input v-model="task" type="text" placeholder="ecrire une tache" class=""  @keyup.enter="testVide" 
  @keyup="focus($event)" ref="reds">
 <button @click="submitTask()" class="btn btn-warning rounded-0" >Ajouter</button>
</div>


<table class="table table-bordered mt-5 ">
  <thead>
    <tr>
      <th scope="col">Liste des Produits</th>
      
      <th scope="col" class="text-center" >Edit</th>
      <th scope="col" class="text-center"  >Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task,index) in tasks" :key="index" :ref="setTaskRef">
      <th scope="row">{{task.name}}</th>
      <td>
      
        <div class="text-center" @click="editTask(index)" >
          <span class="fa fa-pen"></span>
        </div> 
      </td>
      <td>
         <div @click="deletTask(index)" class="text-center">
          <span class="fa fa-trash"></span>
        </div>
       
      </td>

    </tr>

  </tbody>
</table>
  </div>
</template>

<script>
export default {

  data(){
    return {
      taskRef:[

      ],
    task:'',
      value:'',
      target:'',
      editTask1 : null, 
      
      tasks:[
        
     
      ]
    }
  },
  
  methods:{
    setTaskRef(el){ 
      if(el && !this.taskRef.includes(el)){ 
        this.taskRef.push(el)
      }
    },
    focus(e){ 
              this.value = e.target.value ; 
              this.target = e.target ; 
             console.log(this.value );
             console.log(this.target )
            
      if(this.value ==""){ 
        this.target.classList.add('red') 
      }else{
        this.target.classList.remove('red');
        this.value=""
      }
    },

        testVide(e){
    if(e.value ==""){
        e.target.classList.add('red')
      }else{
        e.target.classList.remove('red');
        this.value=""
      }
},

    submitTask(){
      console.log(this.$refs.reds);
       if( this.$refs.reds.value != "" ){
            this.$refs.reds.classList.remove('red')
            }else{
                
            this.$refs.reds.classList.add('red')
            }
     
      if(this.task.length === 0) return; 
      if(this.editTask1 === null){

    this.tasks.push({
        name:this.task,
      });
       console.log(this.taskRef)
      }else{
        this.tasks[this.editTask1].name=this.task;
        this.editTask1 = null ; 
      }

      this.task='';
      
    
    },

    deletTask(index){
   
      
      this.taskRef[index].remove();
  
      console.log(this.taskRef)
    },

    editTask(index){
      this.task=this.tasks[index].name ; 
      this.editTask1 = index; 
      }
  }
  
}
</script>
<style lang="scss" scoped>
  .red{
    border:5px solid red ;
  }
</style>