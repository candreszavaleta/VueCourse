<!-- Composition API -->
<script setup>
import {ref} from "vue"; 
const count = ref(0);
const addToCount = ()=>{
  count.value = count.value+1;
}
const subractFromCount = ()=>{
  count.value = count.value-1;
}
</script>

<!-- Options API -->
<!-- <script>
export default({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCount(){
      this.count = this.count+1;
    },
    subractFromCount(){
      this.count = this.count-1;
    }
  }
})
</script> -->

<template>
  <main>
    <div>
      <h4>The current count is</h4>
      <h1>{{ count }}</h1>
      <button @click="subractFromCount()">-</button>
      <button @click="addToCount()">+</button>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 100vw;
  height: 100vh;  
  display: flex;
  align-items: center;
  justify-content: center;
}
div {
  text-align: center;
}
</style>