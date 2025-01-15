<template>
    <section class="bg-gradient-to-b from-[#0B2034] to-[#215F9A] h-screen flex flex-col justify-center items-center text-white gap-[20px]">
      <div class="flex flex-col justify-center items-center">
          <h1 class="text-[30px] font-bold">SCHOOL FIGHTERS 2</h1>
          <p class="text-center">El mejor juego de lucha entre alumnos. Selecciona  el <br>
            escenario donde ocurrirá la batalla</p>
      </div>
      <div class="flex gap-[20px] justify-center items-center">
          <select class="bg-white rounded-[7px] py-[10px] px-[10vh] text-black text-[20px] font-bold" v-model="escenario">
              <option disabled value="">Elige un escenario</option>
              <option v-for="(esc,index) in escenas" :key="index" :value="esc.nombre">{{ esc.nombre }}</option>
          </select>
      </div>
      <div class="flex justify-center items-center gap-[30px]">
        <router-link to="/"><button class=" text-[20px] py-[8px] bg-[#BC1E1E] rounded-[7px] px-[16vh] font-bold">Volver</button></router-link>
        <router-link to="/combate"><button class=" text-[20px] py-[8px] bg-[#6F1E72] rounded-[7px] px-[12vh] font-bold" @click="guardarEscenario">Continuar</button></router-link>
      </div>
    </section>
  </template>

<script>
import { escenarios } from '../db/datos.js';
export default {
    name:'VistaEscenarios',
    data(){
      return {
        escenas:'',
        escenario:''
      }
    },
    methods:{
      getLocalSotrageEscenarios(){
        this.escenas=JSON.parse(localStorage.getItem('escenarios'))
        if (this.escenas==null) {
            this.escenas=escenarios
        }
        localStorage.setItem('escenarios',JSON.stringify(this.escenas))
      },
      guardarEscenario(){
        this.escenario=this.escenas.find(e=>e.nombre===this.escenario)

        localStorage.setItem('escenario',JSON.stringify(this.escenario))
      }
    },
    mounted(){
      this.getLocalSotrageEscenarios()
    }
}
</script>

<style>

</style>