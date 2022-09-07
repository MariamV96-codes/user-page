<template >
   <mainPage :units='units'/>
 <div class="mx-auto my-0 px-3.5  w-11/12 text-right text-base">
   <userName/>
    <form action=""
     class="border-[1.3px] rounded-lg border-secondaryColor px-6" > 
      <h2 class="text-center font-CairoBold text-lg pt-6	 ">أطلب الخدمة المرجوة بكل اريحية</h2>

      <div class="py-6">
         <p class="pb-2.5 font-CairoBold text-secondaryColor"> 
         <span class="text-[#cf4037]"> * </span> اختر رقم الوحدة</p>
         <div class="pb-2.5">
            <label  class="" for="A1"> A 08 - 01 </label>
            <input   class=" border-secondaryColor text-secondaryColor " style="box-shadow: none" type="radio"
              name="A1" value="A 08 - 01" v-model="units">
  
         </div>
         <div class="">
            <label  class="" for="A2"> A 08 - 02 </label>
            <input class=" border-secondaryColor text-secondaryColor"  style="box-shadow: none" type="radio" name="A2" value="A 08 - 02" v-model="units" >
         </div>
      </div>



         <p class="pb-2.5 font-CairoBold text-secondaryColor"> 
            <span class="text-[#cf4037]">*</span>اختر نوع الخدمة</p>
         <div class="pb-3.5" v-for="service in services" :key="service.key">
            <label class=""> {{service}} </label>
           <input  class="rounded text-secondaryColor  border-secondaryColor "  style="box-shadow: none" type="checkbox" name="1" id="" > 

         </div>
      <div class="pb-5 ">
         <textarea class="border-[1.3px] rounded border-secondaryColor placeholder-style form-textarea mt-1  w-80	" style="box-shadow: none" placeholder =" ...أترك ملاحظة " rows="4" ></textarea>
      </div>

      <div class="pb-5 ">
         <p class="  p-2 font-CairoBold text-secondaryColor ">ارفاق صورة</p>
         <input class="border-[1.3px] rounded border-secondaryColor p-1 " type="file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx">
      </div>

      <button class="py-2 px-36 mt-2 mb-6 mr-2.5  bg-mainColor text-[#fff] rounded  ">إرسال</button>
    </form>
         <div class="my-14 text-center text-base">
         <p 
         class=" line  "> أو</p>
         </div>
         
    <div class="border-[1.3px] rounded-lg border-secondaryColor  px-9 py-6 mb-16 	 ">
      <h3 class="text-center font-CairoBold text-lg  ">الاستفسار عن الخدمات عن طريق</h3>
      <ul class="py-10" >
         <li class="pb-3">877-255-7945</li>
         <li class="pb-3">877-255-7945</li>
         <li class="pb-3">info@arbah.com</li>
         <li class="pb-3">385 Madinah Place Suite 878</li>
      </ul>
      <button class=" text-center border-[1.3px] rounded
       border-secondaryColor 
       bg-[#ecebe1] 
       text-secondaryColor 
        py-2.5 px-14 mt-2 mb-6">التواصل و طلب المساعدة</button>
    </div>

 </div>
</template>

<script>
import userName from './userName.vue';
import mainPage from './mainPage.vue'

 export default {
  name: 'servicesPage',
  components: {
    userName,
    mainPage
},
  data(){
   return{
      units: '',
      services:[
         '  السباكة الداخلية و الخارجية ' ,
         ' لوحات توزيع الكهرباء المفاتيح و الافياش ',
         ' كشافات الاضاءه -المصعد-المضخات-الانترفون-مراوح الشفط ',
         ' السخانات و النوافذ ',
         ' الدهانات ',
         ' الخلطات ',
         ' اخرى '
      ],
   }
  },
 
}
</script>
