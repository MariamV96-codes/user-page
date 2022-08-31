<template>
   <mainPage :units='units'/>
 <div class="secondContainer">
   <userName/>
    <form action=""> 
      <h3>أطلب الخدمة المرجوة بكل اريحية</h3>
      <div class="unitNumber"/>
      <p> <span> * </span> اختر رقم الوحدة</p>
      <div class="wrapperForm ">
       <label  class="control control-radio"> 
         A 08 - 01
       <input  type="radio" name="radio" value="A 08 - 01" v-model="units">
         <div class="control_indicator"></div>
         </label>
      </div>
      <div class="wrapperForm ">
       <label  class="control control-radio"> 
         A 08 - 02
       <input  type="radio" name="radio" value="A 08 - 02" v-model="units" >
         <div class="control_indicator"></div>
         </label>
      </div>
         <p> <span>*</span>اختر نوع الخدمة</p>
         <div class="serviceType" v-for="service in services" :key="service.key">
            <label class="control control-checkbox">
               {{service}} 
           <input  type="checkbox" name="1" id="" > 
           <div class="control_indicator control_indicator2"></div>
          </label>

         </div>
      <div class="otherServices">
         <textarea placeholder =" ...أترك ملاحظة " cols="48" rows="6" ></textarea>
      </div>

      <div class="uploadPic">
         <p>ارفاق صورة</p>
         <div class="field">
            <input type="file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx">
         </div>
      </div>

      <button class="sendBtn">إرسال</button>
    </form>
         <div class="orWrapper">
         <p class="line"> أو</p>
      </div>
    <div class="contactInfo">
      <h3>الاستفسار عن الخدمات عن طريق</h3>
      <ul>
         <li>877-255-7945</li>
         <li>877-255-7945</li>
         <li>info@arbah.com</li>
         <li>385 Madinah Place Suite 878</li>
      </ul>
      <button class="contactBtn">التواصل و طلب المساعدة</button>
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
<style>

.secondContainer{
   font-family: "Cairo-Regular", serif;
  /* font-size: 20px; */
  margin: 0 auto;
  margin-top: 88px;
  width: 90%;
  text-align: right;
  color: #244C5A;
}
h3{
   /* text-align: center; */
   padding-right: 25px;
}
form, .contactInfo{
     border: 1px solid #D3BC8D ;
  border-radius: 10px;
  padding: 20px 0;
}
.contactInfo h3{
   padding: 20px ;
}
.contactInfo li{
   padding: 6px;
}

.wrapperForm, .serviceType{
   padding: 3px 44px  5px 0;
}


.field{
   border:#7e8080 0.2px solid;
   border-radius: 5px;
   width:343px;
   height: 50px;
   display: inline-block;
   margin-right:17px;
   text-align: center;
   margin-bottom: 22px;
}
.sendBtn{
   outline: none;
   border-radius: 5px;
   background-color:#244C5A ;
   color: #fff;
   text-align: center;
   text-decoration: none;
   margin-right: 37px;
   padding: 0.4rem 9rem;
   font-family: "Cairo-Regular", serif;
   border: none;
   margin-bottom: 29px;
   cursor: pointer;
   font-size: 19px;
}
.orWrapper{
    margin: 40px 0;

}
.orWrapper p{
   text-align: center;
}
.line:before{
  content:" ";
  display: block;
  height: 1px;
  width: 50px;
  position: absolute;
  top: 51%;
  left: 32%;
  background: #D3BC8D;
}
.line{
   position: relative;
  max-width: 500px;
  margin: 10px auto;
  text-align: center;

}
.line:after{
  content:" ";
  height: 1px;
  width: 50px;
  background: #D3BC8D;
  display: block;
  position: absolute;
  top: 51%;
  right: 35%;
}
.contactInfo{
   margin: 50px 0;
   padding: 10px;
}
.contactInfo li{
   list-style: none;
   padding-right: 38px;
}
.contactBtn{
   color: #D3BC8D;
   background-color:#ecebe1 ;
   border: 1.2px solid #D3BC8D;
   border-radius: 5px;
   padding:0.5rem 3rem;
   margin: 33px;
   font-size: 15px;
   font-family: "Cairo-Regular", serif;
   font-size: 19px;
   cursor: pointer;
}
label{
   padding-right: 6px;
}
.control {
   text-align: right;
    display: inline-block;
    position: relative;
    /* padding-top: 2px; */
    cursor: pointer;
}
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
.control_indicator {
    position: absolute;
    top: 6.3px;
    left: 100%;
    height: 19px;
    width: 19px;
    background: #ffffff;
    border: 1.4px solid #d3bc8d;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #fff6f6;
}

.control input:checked ~ .control_indicator {
    background: #D3BC8D;
}


.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-radio .control_indicator {
    border-radius: 50%;
}

.control-radio .control_indicator:after {
    left: 5.2px;
    top: 5.2px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: #ffffff;
    transition: background 250ms;
}



/* checkbox */
.control_indicator2 {
    position: absolute;
    top: 9px;
    left: 100.6%;
    height: 19px;
    width: 19px;
    background: #ffffff;
    border: 1.4px solid #d3bc8d;
    border-radius: 4px;
}

.control-checkbox .control_indicator2:after {
    left: 6px;
    top: 2px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.otherServices{
   padding: 10px 24px;

}
.otherServices textarea{
   border-radius: 4px;
   border: 1.4px solid #d3bc8d;
}
/* ::-webkit-resizer {
} */
textarea::placeholder { 
  color: rgba(128, 128, 128, 0.5);
  font-size: 16px;
  padding-left: 64%;
  padding-top: 30px;
  font-family: "Cairo-Regular", serif;
}
.uploadPic{
   padding: 3px 3px  5px 0;
   color: #D3BC8D;
   font-family: "Cairo-Bold", serif;

}


</style>