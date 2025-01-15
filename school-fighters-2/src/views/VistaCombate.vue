<template>
  <section :style="{ backgroundImage: `url('${this.escenario.imagen}')` }" class="h-screen bg-cover">
    <router-link to="/"><button class="bg-[#194988] text-white rounded-[7px] py-[5px] px-[30px] m-[10px]">Inicio</button></router-link>
    <div class="flex justify-center items-center gap-[15px] h-[80vh]">
      <div class="border-[2px solid] bg-blue-900 w-[50vh] h-[60vh] flex flex-col justify-between items-center p-[10px] rounded">
        <img class="w-[35vh] h-[35vh] rounded-full border-orange-500 border-[5px]" :src="p1.imagen" :alt="p1.nombre">
        <span class="text-orange-500 font-bold text-[20px]">{{ p1.nombre }}</span>
      </div>
      
      <img class="w-[20%]" src="https://cdn.pixabay.com/photo/2024/08/26/04/20/ai-generated-8998102_640.png" alt="">

      <div class="border-[2px solid] bg-blue-900 w-[50vh] h-[60vh] flex flex-col justify-between items-center p-[10px] rounded">
        <img class="w-[35vh] h-[35vh] rounded-full border-orange-500 border-[5px]" :src="p2.imagen" :alt="p2.nombre">
        <span class="text-orange-500 font-bold text-[20px]">{{ p2.nombre }}</span>
      </div>
      
      
    </div>
  </section>
</template>

<script>
export default {
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

