<template>
  <q-page class="row justify-center q-mt-xl">
    <q-card class="col-4 my-card">
      <q-card-section>
        <q-chat-message name="Nicolás Barone" avatar="imagenes/yo.jpeg" text-color="white" bg-color="primary"
          :text="['Si deseas contactarme, escríbeme y te contestaré lo antes posible']" sent
          class="coso text-primary" />
      </q-card-section>
      <q-card-section>
        <q-input filled v-model="nombre" label="Ingrese su Nombre" hint="Nombre" lazy-rules
          :rules="[val => val && val.length > 0 || 'Ingrese su nombre']" />
        <q-input filled v-model="correo" label="Ingrese su Correo" hint="Correo" lazy-rules
          :rules="[val => val && val.length > 0 || 'Ingrese su correo']" />
      </q-card-section>
      <q-card-section>
        <q-editor v-model="editor" min-height="5rem" />

      </q-card-section>
      <q-card-section>
        Dejame tu calificación
        <q-rating v-model="ratingModel" size="2em" :max="10" color="primary" />
      </q-card-section>
      <q-card-section>
        <q-btn class="boton">
          Enviar
        </q-btn>
        <q-btn class="boton q-ml-md">
          Cancelar
        </q-btn>
      </q-card-section>

    </q-card>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const nombre = ref('')
    const correo = ref('')
    const editor = ref('')
    const ratingModel = ref('')
    return {
      nombre,
      correo,
      editor,
      ratingModel
    }
  },
})
</script>

<style scoped>
.my-card {
  height: 600px;
  box-shadow: 1px 1px 1px rgb(73, 73, 73), 2px 2px 2px rgb(255, 255, 255),
    3px 3px 3px rgb(42, 41, 41), 4px 4px 2px rgb(255, 255, 255), 5px 5px 2px rgb(15, 15, 15);
}
.boton{
  width: 80px;
  overflow: hidden;
  box-shadow: 1px 1px 1px rgb(73, 73, 73), 2px 2px 2px rgb(255, 255, 255),
    3px 3px 3px rgb(42, 41, 41), 4px 4px 2px rgb(255, 255, 255), 5px 5px 2px rgb(15, 15, 15);
}


.boton:hover::after{
  position: absolute;
  content: " ";
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(100, 154, 190);
  animation: animar2 1s alternate infinite;
}
.boton:hover::before{
  content: " ";
  animation: animar 2s linear infinite;
   box-shadow: 3px 3px 2px rgba(100, 154, 190);
   position: absolute;
  width: 80px;
  height: 80px;
  background-size:100% 100%;
  border-radius: 50%;
}
@keyframes animar2 {
  from{
   transform:rotate(0deg);
  }
  to{
   transform:rotate(-360deg)
  }
}
@keyframes animar {
   from{
    transform:rotate(0deg)
   }
   to{
    transform:rotate(360deg)
   }
}
</style>
