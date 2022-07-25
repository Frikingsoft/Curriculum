<template>
  <q-layout view="lHh Lpr lFf">
    <Menu/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import Menu from './Menu.vue'
export default defineComponent({
  components:{
    Menu
  },
  setup() {

  },
})
</script>

