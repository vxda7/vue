<template>
  <div>
    <div class="static" v-bind:class="{active: isActive, error: hasError}"></div>
    <button @click="plus()">+1</button>
    <h2>Counter: {{cnt}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cnt: 0,
      activeColor: 'red',
      fontSize: 30,
      isActive: true,
      hasError: false,
    }
  },
  methods: {
    plus: function(){
      this.cnt += 1
    },
  }
}
</script>

<style>

</style>