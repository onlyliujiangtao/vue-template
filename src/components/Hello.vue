<template>
  <div class="hello">
    <p>{{greeting}} Hello World</p>
  </div>
</template>

<script>
import * as request  from '../axios/api';

export default {
  name: 'Hello',
  props:{
      greeting: {
        type: String,
        default: 'page'
      }
    },
  data () {
    return {
      
    }
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    font-size: 2em;
    text-align: center;
  }
</style>
