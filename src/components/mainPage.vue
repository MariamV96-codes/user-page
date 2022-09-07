<template>
<div class="mx-auto my-0 px-3.5 w-11/12 text-right text-base  ">
 <userName/>
  <p class="pr-6  font-CairoBold"> <span class="text-secondaryColor"> {{units}}  </span> ملفات وحدة رقم</p>
  <div class="bg-[#fff] my-5 py-3.5 rounded-lg	"
        v-for="File in Files" :key="File.number">
    <p class="pr-6"> <span class="font-CairoBold pr-2.5 "> {{File.number}} </span>{{File.type}}</p>
  </div>
  <div class="bg-[#fff] my-5 py-3.5 rounded-lg">
    <p class="pr-6"> <span class="font-CairoBold">pdf.الصك</span></p>
  </div>
  <a href="#" class="ml-2 mt-1 float-left underline underline-offset-6 text-base">الرجوع</a>
</div>
</template>

<script>
  import userName from './userName.vue';

export default {
  name: 'mainPage',
  components: {
    userName,
},
  data(){
    return{
      Files:[
          {
            type:' رقم الصك',
            number: 211283748
          },
          {
            type:' رقم اشتراك المياه',
            number: 211283748
          },
          {
            type:' رقم اشتراك الكهرباء',
            number: 211283748
          },
      ]
    }
  },
  props:['units']

}
</script>

