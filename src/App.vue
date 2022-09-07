 <template> 
  <main class=" flex flex-col justify-center min-h-screen
   text-mainColor font-CairoRegular text-2xl
    bg-[#f3f6f6]	">
    <servicesPage/>

 </main>    
</template>

<script>

import servicesPage from './components/servicesPage.vue'


export default {
  name: 'App', 
  components: {
    servicesPage,
},
}
</script>
