<template >
    <div>
       <h1>this is the dashboard</h1> 
       <button class="btn btn-primary" @click="logout">logout</button>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    methods: {
        logout()
        {
           Cookies.remove("user-auth");
           this.$router.push('/login');
        }
    },
}
</script>
<style>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>