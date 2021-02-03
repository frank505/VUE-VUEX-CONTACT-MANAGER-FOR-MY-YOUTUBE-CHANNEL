<template>
  <div>
    <a-menu  mode="horizontal">
        <a-menu-item key="home" v-model="current"><router-link to="/">
        <font-awesome-icon icon="spinner" size="lg" />
        Home</router-link> </a-menu-item>
      <a-menu-item key="mail"><router-link to="/login"><appstore-outlined />Login</router-link></a-menu-item>
      <a-menu-item key="app"><router-link to="/register"><setting-outlined />Register</router-link></a-menu-item>     
      <a-menu-item key="contact" class="float-to-end" >Techbuildz</a-menu-item>    
    </a-menu>
  </div>
</template>
<script>
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    AppstoreOutlined,
    SettingOutlined
  },
  data() {
   return {
          current: 'home',
   }
  },
};
</script>
<style scoped>
.float-to-end{
    float: right;
    font-weight: bolder;
}
.float-to-end:hover{
color: black;
border-bottom: none;
}
</style>
