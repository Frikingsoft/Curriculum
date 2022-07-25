<template>
  <q-page class="row justify-center">
    <q-card class="my-card col-4 q-mt-xl row items-center">
      <q-card-section class="col-7 texto">
        Nombres: Pablo Nicolás
      </q-card-section>
        <q-card-section class="col-6 foto">
        <img src="/imagenes/programador.jpg">
      </q-card-section>
      <q-separator/>
      <q-card-section class="col-7 texto">
        Apellidos: Barone Arce
      </q-card-section>
      <q-separator/>
       <q-card-section class="col-7 texto">
        Edad: 31 Años
      </q-card-section>
      <q-separator/>
        <q-card-section class="col-7 texto">
        Localidad: Melo
      </q-card-section>
      <q-separator/>
    </q-card>
    <div class="col-9">
      <h2 class="texto_objetivo">Objetivo :</h2>
      <q-separator/>
      <p class="parrafo_objetivo">
      Mi Objetivo es poder conocer varias tecnologías para poder brindar soluciones a muchos
      de los problemas, en el soporte lógico o en el soporte físico,
      tanto para dar soporte externo o para proyectos personales
    </p>
    <q-separator/>
    </div>


  </q-page>
</template>
<style scoped>
  .my-card{
    height: 300px;
    color: white;
    background-color: rgb(31, 31, 31);
    border: 5px solid rgb(25, 126, 193);
    box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
     3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
    overflow: hidden;

  }
  .texto{
    height: 20%;
    margin-left: 10px;
    background-color: rgb(25, 126, 193);
    font-size: 20px;
    text-shadow: 2px 2px 2px rgb(65, 65, 65),
     3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(15, 15, 15),5px 5px 2px rgb(15, 15, 15);
    letter-spacing: 2px;
    box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
     3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
  }
  .foto{
    background-color: rgb(25, 126, 193);
    position: absolute;
    height: 100%;
    right: 0;
    z-index: 1;
    transform: rotate(30deg);
    border-radius: 0 10% 10% 0 /80% ;
  }
  .texto_objetivo{
    color: rgb(25, 126, 193);
    text-shadow: 2px 2px 2px rgb(255, 255, 255),
     3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
  }
  .parrafo_objetivo{
    font-size: 30px;
    text-shadow: 1px 1px 1px rgb(65, 65, 65),
     2px 2px 3px rgb(239, 238, 238),3px 3px 2px rgb(45, 45, 45),4px 4px 2px rgb(90, 88, 88);
    letter-spacing: 2px;
     color: rgb(25, 126, 193);
  }
</style>
