<template>
  <section class="p-[160px]  bg-gradient-to-b from-[#0B2034] to-[#215F9A] h-screen flex flex-col justify-center items-center text-white gap-[20px]">
    <div class="flex flex-col">
        <h1 class="text-[40px] font-bold">SCHOOL FIGHTERS 2</h1>
        <p class="text-center">El mejor juego de lucha entre alumnos. Selecciona los <br>
            alumnos que van a pelear.</p>
    </div>
    <div class="flex gap-[20px] justify-center items-center">
        <select class="bg-white rounded-[7px] py-[16px] px-[10vh] text-black text-[20px] font-bold" v-model="p1">
            <option v-for="(persona,index) in personas" :key="index" :value="persona.nombre">{{ persona.nombre }}</option>
        </select>
        <select class="bg-white rounded-[7px] py-[16px] px-[10vh] text-black text-[20px] font-bold" v-model="p2">
            <option v-for="(persona,index) in personas" :key="index" :value="persona.nombre">{{ persona.nombre }}</option>
        </select>
    </div>
    <router-link to="/escenarios"><button class=" text-[20px] py-[12px] bg-[#3DBC1E] rounded-[7px] px-[12vh] font-bold" @click="guardarPersonajes">Continuar</button></router-link>
  </section>
</template>

<script>
import { personajes } from '../db/datos.js'
export default {
    name:'VistaPersonajes',
    data(){
        return{
            personas:'',
            p1:'',
            p2:''
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

            localStorage.setItem('p1',JSON.stringify(this.p1))
            localStorage.setItem('p2',JSON.stringify(this.p2))
        }
    },
    mounted(){
        this.getLocalSotragePersonajes()
    }
}
</script>

<style>

</style>