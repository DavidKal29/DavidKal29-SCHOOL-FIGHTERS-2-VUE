<template>
  <section :style="{ backgroundImage: `url('${this.escenario.imagen}')` }" class="h-screen bg-cover">
    <button @click="inicio" class="bg-[#194988] text-white rounded-[7px] py-[5px] px-[30px] m-[10px]">Inicio</button>
    <div class="flex justify-center items-center gap-[15px] h-[80vh]">
      <TarjetaPersonaje :imagen="p1.imagen" :nombre="p1.nombre"></TarjetaPersonaje>
      
      <img class="w-[20%]" src="https://cdn.pixabay.com/photo/2024/08/26/04/20/ai-generated-8998102_640.png" alt="">

      <TarjetaPersonaje :imagen="p2.imagen" :nombre="p2.nombre"></TarjetaPersonaje>
    </div>
  </section>
</template>

<script>
import TarjetaPersonaje from '@/components/TarjetaPersonaje.vue'
export default {
  components: { TarjetaPersonaje },
    name:'VistaCombate',
    data(){
        return{
            escenario:'',
            p1:'',
            p2:'',
            combates:[]
        }
    },
    methods:{
        getCombates(){
          this.combates=JSON.parse(localStorage.getItem('combates'))
          if (this.combates==null) {
            this.combates=[]
            localStorage.setItem('combates',JSON.stringify(this.combates))
          }
        },
        getEscenario(){
          this.escenario=JSON.parse(localStorage.getItem('escenario'))
        },
        getPersonajes(){
          this.p1=JSON.parse(localStorage.getItem('p1'))
          this.p2=JSON.parse(localStorage.getItem('p2'))
        },
        inicio(){
          this.combates.push({'Combate':{personajes:[this.p1,this.p2],escenario:this.escenario}})
          localStorage.setItem('combates',JSON.stringify(this.combates))

          this.$router.push('/')
        }
    },
    mounted(){
      this.getEscenario()
      this.getPersonajes()
      this.getCombates()
    }
}
</script>
    
<style>

</style>

