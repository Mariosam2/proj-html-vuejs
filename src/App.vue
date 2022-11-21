<script>
import AppHeader from './components/layout/AppHeader.vue';
import AppMain from './components/layout/AppMain.vue';
import AppFooter from './components/layout/AppFooter.vue';
export default {
  name: 'App',
  components: {
    AppHeader, AppMain, AppFooter
  }

}
</script>

<template>
  <!-- macroelements -->
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>

</template>


<style>

</style>