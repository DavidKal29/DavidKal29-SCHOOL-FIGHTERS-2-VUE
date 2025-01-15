<template>
  <section :style="{ backgroundImage: `url('${this.escenario.imagen}')` }" class="h-screen bg-cover">
    <router-link to="/"><button class="bg-[#194988] text-white rounded-[7px] py-[5px] px-[30px] m-[10px]">Inicio</button></router-link>
  </section>
</template>

<script>
export default {
    name:'VistaCombate',
    data(){
        return{
            escenario:''
        }
    },
    methods:{
        getEscenario(){
          this.escenario=JSON.parse(localStorage.getItem('escenario'))
        }
    },
    mounted(){
      this.getEscenario()
    }
}
</script>
    
<style>

</style>

