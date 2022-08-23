<template>
    <div class="header-main">
        <header>
            <div class="logo">
                <router-link :to="{name:'home'}"><img src="/src/assets/vue.svg" alt="logo"></router-link>
            </div>
            <div class="div-nav">
                <nav class="nav-desktop">
                    <li><router-link :to="{name:'home'}">Home</router-link></li>
                    <li><router-link :to="{name:'home'}">Serviços</router-link></li>
                    <li><router-link :to="{name:'home'}">Preços</router-link></li>
                    <li><router-link :to="{name:'home'}">Sobre</router-link></li>
                    <li><router-link :to="{name:'home'}">Contato</router-link></li>
                </nav>
              <DropdownmenuComponent />
            </div>
        </header>
    </div>
</template>
<script>
import DropdownmenuComponent from  './DropdownmenuComponent.vue'

export default {
    name: 'HeaderComponent',
    components: {
        DropdownmenuComponent
    }
}
</script>
<style src="/src/assets/css/header.css"></style>
