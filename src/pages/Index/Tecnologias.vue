<template>
  <div class="row q-mt-xl justify-center">
    <h2 :class="{'col-12':true, 'tecnologias':cancelar_animacion.value,'tecnologias2':!cancelar_animacion.value}"> Tecnologías Aprendidas :</h2>
    <q-card v-for="(tecnologia,index) in tecnologias" :key="index"
     class="my-card col-4 q-mb-xl q-ml-xl flex flex-center"
      @click="enviar_nombre = tecnologia.nombre;mostrar_mensaje=true">
       <q-circular-progress
      show-value
      font-size="10px"
      class="q-ma-md"
      :value="tecnologia.porcentaje"
      size="120px"

      :color="tecnologia.color"
      :track-color="tecnologia.color_resto"
    >
      <q-avatar size="60px">
        <img :src="`${tecnologia.imagen}`">

      </q-avatar>

    </q-circular-progress>
     <h4 class="marca" :style="`background-color: ${tecnologia.colorMarca};`">{{tecnologia.nombre}}</h4>

    </q-card>

  </div>
</template>
<script>
import { computed, defineComponent, provide, ref } from 'vue'

export default defineComponent({

  setup() {
    const enviar_nombre =ref("")
    const mostrar_mensaje =ref(false)
    const animacion=ref(true)
    const cancelar_animacion = computed(()=>{
      setTimeout(()=>{
        animacion.value= false
      }, 3000);
      return animacion
    })
    provide("enviar_nombre",enviar_nombre)
    provide("mostrar_mensaje",mostrar_mensaje)
    const tecnologias = ref([
      { nombre: "HTML", porcentaje: 90,color:"orange-10",color_resto:"grey-3",colorMarca:"rgb(230,81,0)",imagen:"/imagenes/logos/html.png" },
      { nombre: "CSS", porcentaje: 90,color:"light-blue-5",color_resto:"grey-3",colorMarca:"rgb(41,182,246)",imagen:"/imagenes/logos/css.png" },
      { nombre: "Javascript", porcentaje: 70,color:"yellow",color_resto:"grey-3",colorMarca:"rgb(255,239,59)",imagen:"/imagenes/logos/javascript.png" },
      { nombre: "Vue.js", porcentaje: 80,color:"green-5",color_resto:"grey-3",colorMarca:"rgb(102,187,106)",imagen:"/imagenes/logos/vue.png" },
      { nombre: "Quasar.js", porcentaje: 80,color:"blue-grey-10",color_resto:"grey-3",colorMarca:"rgb(38,50,56)",imagen:"/imagenes/logos/quasar.png" },
      { nombre: "Node.js", porcentaje: 60,color:"green-8",color_resto:"grey-3",colorMarca:"rgb(56,142,60)",imagen:"/imagenes/logos/node.png" },
      { nombre: "Python", porcentaje: 10,color:"blue-9",color_resto:"grey-3",colorMarca:"rgb(25,118,210)",imagen:"/imagenes/logos/python.png" }
    ]
    )
    return{tecnologias,enviar_nombre,mostrar_mensaje,animacion,cancelar_animacion}
  },
})
</script>

<style scoped>
  @import url('./datos.css');
</style>
