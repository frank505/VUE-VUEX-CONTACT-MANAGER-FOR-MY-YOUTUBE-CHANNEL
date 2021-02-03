

<template >
    <div class="card-parent-item">
      <a-card title="User Login" >
    <template #extra><a href="#"></a></template>
      <div class="form-wrapper">
          <a-input v-model="email" placeholder="Email" />
      </div>
       
       <div class="form-wrapper">
          <a-input v-model="password" placeholder="Password" />
      </div>
      
      <div class="form-wrapper">
            <a-button type="primary" block>Submit</a-button>
      </div>

  </a-card>
    </div>
</template>
<script>


export default {
    
     data() {
   return {
        email: '',
        password:''
   }
  },
}
</script>
<style scoped>
    .card-parent-item{
        width:45%;
        margin-left:27.5%; 
        margin-right: 27.5%;
        margin-top: 100px;
    }
    .form-wrapper{
        padding:3%;
    }
</style>