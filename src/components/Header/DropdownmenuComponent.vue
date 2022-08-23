<template>
    <div>
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
</template>
<script>
export default {
    name: 'DropdownmenuComponent'
}
</script>
<style src="/src/assets/css/dropdown.css"></style>
