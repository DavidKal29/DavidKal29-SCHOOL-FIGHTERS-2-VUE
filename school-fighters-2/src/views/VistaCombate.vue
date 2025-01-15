<template>
  <section :style="{ backgroundImage: `url('${this.imagen}')` }" class="h-screen bg-cover">
    <router-link to="/"><button class="bg-[#194988] text-white rounded-[7px] py-[5px] px-[30px] m-[10px]">Inicio</button></router-link>
  </section>
</template>

<script>
import { escenarios } from '../db/datos.js'
export default {
    name:'VistaCombate',
    data(){
        return{
            imagen:escenarios[1].imagen
        }
    }
}
</script>
    
<style>

</style>

