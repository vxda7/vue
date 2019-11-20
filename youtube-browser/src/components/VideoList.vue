<template>
  <ul class="list-group">  
    <VideoListItem v-for="video in videos" v-bind:key="video.etag" v-bind:video="video" @videoSelect="onVideoSelect"/>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem'
export default {
  name: 'VideoList',
  props: {
    videos: Array
  },
  components: {
    VideoListItem
  },
  methods: {
    onVideoSelect(video){
      this.$emit('videoSelect', video)
    }
  }
}
</script>

<style>

</style>