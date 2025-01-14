<template>
  <section class="p-[160px]  bg-gradient-to-b from-[#0B2034] to-[#215F9A] h-screen flex flex-col justify-center items-center text-white gap-[20px]">
    <div class="flex flex-col">
        <h1 class="text-[40px] font-bold">SCHOOL FIGHTERS 2</h1>
        <p class="text-center">El mejor juego de lucha entre alumnos. Selecciona los <br>
            alumnos que van a pelear.</p>
    </div>
    <div class="flex gap-[20px] justify-center items-center">
        <select class="bg-white rounded-[7px] py-[16px] px-[10vh] text-black text-[20px] font-bold">
            <option value="">Elige un personaje</option>
        </select>
        <select class="bg-white rounded-[7px] py-[16px] px-[10vh] text-black text-[20px] font-bold">
            <option value="">Elige un personaje</option>
        </select>
    </div>
    <router-link to="/escenarios"><button class=" text-[20px] py-[12px] bg-[#3DBC1E] rounded-[7px] px-[12vh] font-bold">Continuar</button></router-link>
  </section>
</template>

<script>
export default {
    name:'VistaPersonajes'
}
</script>

<style>

</style>