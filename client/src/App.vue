<template>
  <div id="app">

      <app-header />
    <transition name="component-fade" mode="out-in">
      <router-view />
    </transition>
      <app-footer />


</div>
</template>

<script>

import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {

    AppHeader,
    AppFooter
  },
  data: () => ({
    
  }),
};
</script>

<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to {
  background-color: #343a40;
  opacity: 0.9;
}
</style>