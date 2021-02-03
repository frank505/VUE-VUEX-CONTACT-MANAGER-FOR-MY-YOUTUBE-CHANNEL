<template>
    <div>
      <Header></Header>
       <router-view></router-view>
    </div>
</template>
<script>
import 'ant-design-vue/dist/antd.css';
import Header from '../../../components/auth/Header'

export default {
    components:{Header}
}
</script>
<style lang="">
    
</style>