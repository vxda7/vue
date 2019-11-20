<template>
  <div>
    <input type="text" v-model="url">
    <a :href="url">
      <h1>Go!</h1>
    </a>
    <div v-bind:style="{color: activeColor, fontSize: fontSize +'px'}">ㅎㅇ</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      url: ''
    }
  }
}
</script>

<style>

</style>