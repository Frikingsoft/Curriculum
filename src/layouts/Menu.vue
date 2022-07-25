<template>
  <div class="row col-12 banner">
    <nav class="menu row col-12 justify-center">
      <div class="titulo col-12">
        Nicolás Barone
      </div>
      <div class="botones_menu">
        <router-link :to="pagina.url" v-for="(pagina, index) in paginas" :key="index">
          <q-icon :name="pagina.icono" :size='`${pagina.size}px`'/>
        </router-link>
      </div>

    </nav>
    <div class="tecnologias">
      <div class="circulo_javascript">

      </div>

    </div>

  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const paginas = ref([
      { url: "/", icono: "home", size: 40, estado: false },
      { url: "/informacion", icono: "fa-solid fa-file-invoice", size: 30, estado: false },
      { url: "/formacion", icono: "fa-solid fa-graduation-cap", size: 30, estado: false },
      { url: "/experiencia", icono: "fa-solid fa-chart-simple", size: 30, estado: false },
      { url: "/contacto", icono: "fa-solid fa-address-card", size: 30, estado: false }
    ])
    return { paginas }
  },
})
</script>

<style scoped>
@import url('./menu.css');
</style>
