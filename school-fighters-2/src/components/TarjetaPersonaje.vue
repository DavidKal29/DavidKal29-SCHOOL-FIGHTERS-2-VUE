<template>
  <div class="border-[2px solid] bg-blue-900 w-[50vh] h-[60vh] flex flex-col justify-around items-center p-[5px] rounded">
        <img class="w-[35vh] h-[35vh] rounded-full border-orange-500 border-[5px]" :src="imagen" :alt="nombre">
        <span class="text-orange-500 font-bold text-[20px]">{{ nombre }}</span>
    </div>
</template>

<script>
export default {
    props:{
        imagen:{
            type:String,
            required:true
        },
        nombre:{
            type:String,
            required:true
        }
    }
}
</script>

<style>

</style>