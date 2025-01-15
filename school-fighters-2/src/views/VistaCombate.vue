<template>
  <section :style="{ backgroundImage: `url('${this.escenario.imagen}')` }" class="h-screen bg-cover">
    <router-link to="/"><button class="bg-[#194988] text-white rounded-[7px] py-[5px] px-[30px] m-[10px]">Inicio</button></router-link>
    <div class="flex justify-center items-center gap-[15px] h-[80vh]">
      

      <TarjetaPersonaje :imagen="p1.imagen" :nombre="p1.nombre"></TarjetaPersonaje>
      
      <img class="w-[20%]" src="https://cdn.pixabay.com/photo/2024/08/26/04/20/ai-generated-8998102_640.png" alt="">

      <TarjetaPersonaje :imagen="p2.imagen" :nombre="p2.nombre"></TarjetaPersonaje>

      
      
      
    </div>
  </section>
</template>

<script>
import TarjetaPersonaje from '@/components/TarjetaPersonaje.vue';
export default {
  components: { TarjetaPersonaje },
    name:'VistaCombate',
    data(){
        return{
            escenario:'',
            p1:'',
            p2:''
        }
    },
    methods:{
        getEscenario(){
          this.escenario=JSON.parse(localStorage.getItem('escenario'))
        },
        getPersonajes(){
          this.p1=JSON.parse(localStorage.getItem('p1'))
          this.p2=JSON.parse(localStorage.getItem('p2'))
        }
    },
    mounted(){
      this.getEscenario()
      this.getPersonajes()
    }
}
</script>
    
<style>

</style>

