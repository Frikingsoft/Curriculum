<template>
  <q-page class="row col-12 justify-center">
  <Tecnologias class="col-8"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Tecnologias from './Tecnologias.vue'
export default defineComponent({
  components:{
    Tecnologias
  },
  name: 'IndexPage'
})
</script>

