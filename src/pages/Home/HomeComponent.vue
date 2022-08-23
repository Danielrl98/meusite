<template>
    <div>
        <DashboardComponent />
        <DiferenciaisComponent />
    </div>
</template>
<script>
import DashboardComponent from './DashboardComponent.vue'
import DiferenciaisComponent from './DiferenciaisComponent.vue'
export default {
    name: 'HomeComponent',
    components:{
       DashboardComponent,
       DiferenciaisComponent
    }
}
</script>
<style src="/src/assets/css/home.css"></style>