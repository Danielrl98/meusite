<template>
    <div>
        <DashboardComponent />
        <DiferenciaisComponent />
        <SobreComponent />
    </div>
</template>
<script>
import DashboardComponent from './DashboardComponent.vue'
import DiferenciaisComponent from './DiferenciaisComponent.vue'
import SobreComponent from './SobreComponent.vue'
export default {
    name: 'HomeComponent',
    components:{
       DashboardComponent,
       DiferenciaisComponent,
       SobreComponent
    }
}
</script>
<style src="/src/assets/css/home.css"></style>