<template>
  <section class="bg-gradient-to-b from-[#0B2034] to-[#215F9A] h-screen flex flex-col justify-center items-center text-white gap-[20px]">
    <div class="flex flex-col">
        <h1 class="text-[40px] font-bold">SCHOOL FIGHTERS 2</h1>
        <p class="text-center">El mejor juego de lucha entre alumnos. Selecciona los <br>
            alumnos que van a pelear.</p>
    </div>
    <div class="flex gap-[20px] justify-center items-center">
        <select class="bg-white rounded-[7px] py-[12px] px-[10vh] text-black text-[20px] font-bold" v-model="p1">
            <option disabled value="">Elige un personaje</option>
            <option v-for="(persona,index) in personas" :key="index" :value="persona.nombre">{{ persona.nombre }}</option>
        </select>
        <select class="bg-white rounded-[7px] py-[12px] px-[10vh] text-black text-[20px] font-bold" v-model="p2">
            <option disabled value="">Elige un personaje</option>
            <option v-for="(persona,index) in personas" :key="index" :value="persona.nombre">{{ persona.nombre }}</option>
        </select>
    </div>
    <button class=" text-[20px] py-[8px] bg-[#3DBC1E] rounded-[7px] px-[12vh] font-bold" @click="guardarPersonajes">Continuar</button>
  </section>
</template>

<script>
import { personajes } from '../db/datos.js'
import { useToast } from "vue-toastification";
export default {
    name:'VistaPersonajes',
    setup() {
      const toast = useToast();
      return { toast }
    },
    data(){
        return{
            personas:'',
            p1:'',
            p2:'',
            pusheado:false
        }
    },
    methods:{
        getLocalSotragePersonajes(){
            this.personas=JSON.parse(localStorage.getItem('personajes'))
            if (this.personas==null) {
                this.personas=personajes
            }
            localStorage.setItem('personajes',JSON.stringify(this.personas))
        },
        guardarPersonajes(){
            this.p1=this.personas.find(p=>p.nombre===this.p1)
            this.p2=this.personas.find(p=>p.nombre===this.p2)

            

            if (!this.p1 || !this.p2) {
                this.toast.error("Rellena ambos campos porfa")
            }else{
                localStorage.setItem('p1',JSON.stringify(this.p1))
                localStorage.setItem('p2',JSON.stringify(this.p2))
                this.pusheado=true


                this.$router.push('/escenarios')
            }

            
        }
    },
    watch:{
        p1(nuevoValor){
            if (nuevoValor && !this.pusheado) {
                this.toast.success(`${nuevoValor} seleccionado con éxito`)
            }
        },
        p2(nuevoValor){
            if (nuevoValor && !this.pusheado) {
                this.toast.success(`${nuevoValor} seleccionado con éxito`)
            }
        }
    },
    mounted(){
        this.getLocalSotragePersonajes()
        this.personas=this.personas.sort((a, b)=>a.nombre.localeCompare(b.nombre))
    }
}
</script>

<style>

</style>