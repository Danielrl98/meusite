<template>
  <div>
    <HeaderComponent />
    <BotaochamadaComponent />
  </div>
  <router-view></router-view>
</template>
<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import BotaochamadaComponent from './components/Botaochamada/BotaochamadaComponent.vue'

export default{
  components:{
HeaderComponent,
BotaochamadaComponent
  },
  methods:{
    scroll: function(){
      const header = document.querySelector('.header-main')

      addEventListener('scroll',()=>{

        if(scrollY >= 50){
          header.style.backgroundColor="rgba(255, 255, 255, 0.90)"
           header.style.padding="2em"
        }
        if(scrollY < 50){
          header.style.backgroundColor="#fffff000"
           header.style.padding="2.7em"
        }
      })
    }
  },
  mounted(){
    this.scroll()
  }
}
</script>
