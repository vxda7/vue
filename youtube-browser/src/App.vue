<template>
  <div class="container">
    youtube
    <!-- <자식컴포넌트 v-on: 자식이 올려준함수 = "부모가 사용할 함수"> -->
    <SearchBar v-on:inputChange = "onInputChange"/>
    <VideoDetail v-bind:video="selectedVideo"/>
    <!-- <자식컴포넌트 v-bind:자식한테 내려줄 이름="부모가 가지고있는 이름"> -->
    <VideoList v-bind:videos="videos" @videoSelect="onVideoSelect"/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import axios from 'axios'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  data(){
    return {
      videos: [],
      selectedVideo: null,
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  methods: {
    onInputChange(inputValue){
      //console.log(inputValue)
      axios.get(API_URL, {
          params: {
            key: API_KEY,
            part: 'snippet',
            type: 'video',
            q: inputValue
          }
        })
        .then((response)=>{
          console.log(response)
          this.videos = response.data.items
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    onVideoSelect(video){
      console.log(video)
      this.selectedVideo = video
    }
  },
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
