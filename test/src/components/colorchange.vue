<template>
  <div>
    <button @click="toglecolor()">Toggle</button>
    <h2 :style="purple">빨강과 파랑을 섞으면 보라색이 됩니다.</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      purple: 'color:red',
    }
  },
  methods: {
    toglecolor(){
      if (this.purple === 'color:red'){
        this.purple = 'color:blue'
      } else{
        this.purple = 'color:red'
      }
    }
  }
}
</script>

<style>

</style>