<template>
    <div class="main">
      <hello greeting="main"></hello>
    </div>
</template>
<script>
import Hello from '../../components/Hello'
export default {
    name: 'main',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      Hello
    },
    mounted(){
     
    },
    methods:{
     
    }
  }
</script>
<style>

</style>