<template>
  <div id="app">
    <countnum/>
    <colorchange/>
    <gogo/>
    <select v-model="selected">
      <option v-for="item in items" :key="item.id">{{item}}</option>
    </select>
    <button @click="getdog()">Get {{selected}} Dogs!</button>
    <img v-for="dogimage in dogimages" :key="dogimage.id" :src="dogimage" alt="">
    <!-- 39 -->
    <hr>
    <button @click="getposts()">Get Posts!</button>
    <ul>
      <li v-for="post in posts" :key="post.id"><strong>{{post.title}}</strong> - {{post.body}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import countnum from './components/countnum'
import colorchange from './components/colorchange'
import gogo from './components/gogo'

export default {
  name: 'app',
  components: {
    countnum,
    colorchange,
    gogo
  },
  data(){
    return {
      selected: 0,
      items: [1, 2, 3, 4, 5, 6 ,7 ,8 ,9],
      dogimages: [],
      posts: [],
    }
  },
  methods: {
    getdog(){
      const API_URL = 'https://dog.ceo/api/breeds/image/random/'
      axios.get(API_URL + this.selected)
        .then((response)=>{
          this.dogimages = response.data.message
        })
        .catch((err)=>{console.log(err)})
    },
    getposts(){
      const POST_URL = "https://jsonplaceholder.typicode.com/posts"
      axios.get(POST_URL)
        .then((response)=>{
          console.log(response)
          this.posts = response.data
        })
        .catch((err)=>{console.log(err)})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
