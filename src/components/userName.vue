<template>
    <div class="username">
        <h1>بوابة خدمات أرباح طيبة</h1>
  <div class="wrapper main">
    <p> مرحبا بك <span>{{name}}</span></p>
  </div>
    </div>
</template>
  
 <script>
  export default {
    name: 'userName',
    data(){
        return{
            name:' محمد احمد ',
        }
    }
 
  }
  </script>
  
  <style>
.username h1{
    padding-top: 33px;
}
.main{
  margin-bottom: 40px;
}

  
  </style>
  