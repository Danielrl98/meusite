<template>
  <div>
    <HeaderComponent />
  </div>
  <router-view></router-view>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default{
  components:{
HeaderComponent
  }
}
</script>
