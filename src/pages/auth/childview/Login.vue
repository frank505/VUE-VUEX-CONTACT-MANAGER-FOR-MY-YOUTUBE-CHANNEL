<template >

    <form>
    <div class="card-parent-item">
      <a-card title="User Login" >
    <template #extra><a href="#"></a></template>
        
        <div id="response-area"
         :class="loginResponse.success==false?'alert alert-danger':
         loginResponse.success==true?
         'alert alert-success'
         :
         ''
         "
         >
             {{loginResponse.message}}
         </div>

      <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        
        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Email</label>
            <input class="form-control" v-model="formData.email" type="email" />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>


        <ValidationProvider
          name="Password"
          rules="required|min:6|max:12"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Password</label>
            <input
              class="form-control"
              v-model="formData.password"
              type="password"
            />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>  
        <input class="btn btn-primary" value="Submit" type="submit" text="Login" />
      </form>
    </ValidationObserver>


     

  </a-card>
    </div>
    </form>

</template>
<script>

import { mapState, mapActions } from "vuex";
export default {
  
  
   data: () => ({
    formData: {
      email: "",
      password: "",
     
    },
  }),
  computed: {
    ...mapState("Auth", ["loginResponse"])
  },

 methods: {
      ...mapActions("Auth", ["login","clearLoginState"]),

     onSubmit() {
      this.login(this.formData);
    },
  },

 beforeRouteLeave (to, from, next) {
   console.log(this.$store._actions);
   this.clearLoginState();
   next();
    
  }


}

</script>
<style scoped>
 @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

    .card-parent-item{
        width:45%;
        margin-left:27.5%; 
        margin-right: 27.5%;
        margin-top: 100px;
    }
    .form-wrapper{
        padding:3%;
    }  
.error {
  color: red;
  font-weight: bolder;
}
.error-text-input{
    border-color: red;
}
</style>