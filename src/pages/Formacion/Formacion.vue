<template>
  <q-page class="row justify-center">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      class="col-6 q-mt-xl coso"
      autoplay="true"
      height="500px"
    >
      <q-carousel-slide v-for="(curso,index) in cursos" :key="index"
       :name="curso.numero" :img-src="curso.imagen"/>
      </q-carousel>
      <div class="col-8 row justify-center leyendas">
        <h2 class="col-7 flex flex-center texto"> Técnico en Infraestructura </h2>
        <h2 class="col-7 flex flex-center texto"> Técnico en Reparación PC </h2>
        <h2 class="col-7 flex flex-center texto"> Programador WEB </h2>
      </div>


  </q-page>
</template>
<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  setup() {
    return{
      slide: ref(1),
      cursos:ref([
        {numero:1,imagen:"/imagenes/Diplomas/Bachillerato.jpg"},
        {numero:2,imagen:"/imagenes/Diplomas/flexboxGrid.jpg"},
        {numero:3,imagen:"/imagenes/Diplomas/MasterJavascript.jpg"},
        {numero:4,imagen:"/imagenes/Diplomas/nodejs.jpg"},
        {numero:5,imagen:"/imagenes/Diplomas/RepPC.jpg"},
        {numero:6,imagen:"/imagenes/Diplomas/infraestructura.jpg"},
        {numero:7,imagen:"/imagenes/Diplomas/Redes.jpg"},
        {numero:8,imagen:"/imagenes/Diplomas/vue.jpg"}
      ])
    }
  },
})
</script>
<style scoped>
  .leyendas{
    margin-top: -50px;
    height: 300px;
  }
  .texto{
    font-size: 20px;
    background-color: rgba(100, 154, 190);
    color: white;
    box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
  3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
  text-shadow: 2px 2px 2px rgb(65, 65, 65),
     3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(15, 15, 15),5px 5px 2px rgb(15, 15, 15);
    letter-spacing: 2px;
  }
</style>

