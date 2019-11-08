<template>
  <div>
    <button @click="getCatImageUrl()">야옹</button>
    <img v-bind:src="catImage">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      catImage: ''
    }
  },
  methods: {
    getCatImageUrl: function(){
      const CAT_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'
      axios.get(CAT_IMAGE_URL)
        .then((response)=>{
          console.log(response.data[0].url)
          this.catImage = response.data[0].url
        })
        .catch((error)=>{console.log(error)})
    }
  }
}
</script>

<style>

</style>