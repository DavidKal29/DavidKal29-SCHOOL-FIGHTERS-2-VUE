<template>
    <section class="p-[160px]  bg-gradient-to-b from-[#0B2034] to-[#215F9A] h-screen flex flex-col justify-center items-center text-white gap-[20px]">
      <div class="flex flex-col">
          <h1 class="text-[40px] font-bold">SCHOOL FIGHTERS 2</h1>
          <p class="text-center">El mejor juego de lucha entre alumnos. Selecciona  el <br>
            escenario donde ocurrirá la batalla</p>
      </div>
      <div class="flex gap-[20px] justify-center items-center">
          <select class="bg-white rounded-[7px] py-[16px] px-[10vh] text-black text-[20px] font-bold">
              <option value="">Elige un escenario</option>
          </select>
      </div>
      <div class="flex justify-center items-center gap-[30px]">
        <router-link to="/"><button class=" text-[20px] py-[12px] bg-[#BC1E1E] rounded-[7px] px-[16vh] font-bold">Volver</button></router-link>
        <router-link to="/combate"><button class=" text-[20px] py-[12px] bg-[#6F1E72] rounded-[7px] px-[12vh] font-bold">Continuar</button></router-link>
      </div>
    </section>
  </template>

<script>
export default {
    name:'VistaEscenarios'
}
</script>

<style>

</style>