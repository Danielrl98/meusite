<template>
    <div class="header-main">
        <header>
            <div class="logo">
                <router-link :to="{name:'home'}"><img src="../assets/vue.svg" alt="logo"></router-link>
            </div>
            <div class="div-nav">
                <nav class="nav-desktop">
                    <li><router-link :to="{name:'home'}">Home</router-link></li>
                    <li><router-link :to="{name:'home'}">Serviços</router-link></li>
                    <li><router-link :to="{name:'home'}">Preços</router-link></li>
                    <li><router-link :to="{name:'home'}">Sobre</router-link></li>
                    <li><router-link :to="{name:'home'}">Contato</router-link></li>
                </nav>
                <nav class="nav-mobile">
                    <section class="top-nav">
                        <input id="menu-toggle" type="checkbox" />
                        <label class='menu-button-container' for="menu-toggle">
                        <div class='menu-button'></div>
                        </label>
                        <ul class="menu">
                        <li><router-link :to="{name:'home'}">Home</router-link></li>
                        <li><router-link :to="{name:'home'}">Serviços</router-link></li>
                        <li><router-link :to="{name:'home'}">Preços</router-link></li>
                        <li><router-link :to="{name:'home'}">Sobre</router-link></li>
                        <li><router-link :to="{name:'home'}">Contato</router-link></li>
                        </ul>
                    </section>
                </nav>
            </div>

        </header>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>
<style src="../assets/css/header.css"></style>
<style src="../assets/css/dropdown.css"></style>