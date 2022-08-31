<template>
<div class="container">
 <userName/>
  <p> <span> {{units}}  </span> ملفات وحدة رقم</p>
  <div class="wrapper" v-for="File in Files" :key="File.number">
    <p> <span class="bold"> {{File.number}} </span>{{File.type}}</p>
  </div>
  <div class="wrapper">
    <p> <span class="bold">pdf.الصك</span></p>
  </div>
  <button class="backbtn">الرجوع</button>
  <!-- <ServicesPage/> -->
</div>
</template>

<script>
  import userName from './userName.vue';
// import ServicesPage from './servicesPage.vue';

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

<style>
*{
  /* outline: red 1px solid; */
}


.container{

  color: #244C5A;
  /* font-size: 20px; */
  margin: 0 auto;
  width: 90%;
  font-family: "Cairo-Regular", serif;
}
h1{
  text-align: center;
  padding-bottom: 10px;
}

p{
   text-align: right;
  padding-right: 13px;

}
span{
  color: #D3BC8D; 
  font-family: "Cairo-Bold", serif;
}
.bold{
    color: #244C5A;
}
.wrapper {
  background-color: #fff; 
  border-radius: 6px;
  margin: 19px 0;
  padding: 10px 0;
  /* height: 9%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right ;
}

.backbtn{
  color:#244C5A ;
  border: none;
  text-decoration: underline;
  text-underline-offset:6px;
  cursor: pointer;
  text-align: right;
  margin-top:17px ;
  padding-left: 7px;
  font-family: "Cairo-Regular", serif;
  background-color: #f3f6f6;
  font-size: 19px; 
}

</style>
