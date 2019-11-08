<template>
  <div>
    <button @click="getDogImageUrl()">멍멍</button>
    <img v-bind:src="dogImage">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      dogImage: ''
    }
  },
  methods: {
    getDogImageUrl: function(){
      console.log('메소드 실행됨')
      const DOG_URL = 'https://dog.ceo/api/breeds/image/random'
      axios.get(DOG_URL)
        .then((response)=>{
          console.log(response)
          this.dogImage = response.data.message
        })
        .catch((error)=>{console.log(error)})
    }
  },

}
// const app = new Vue({})
</script>

<style>

</style>