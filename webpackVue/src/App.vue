<template>
  <div class="hello">
    <h3>{{ message }}</h3>
    <div>{{ age }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Hello World", age: 18 };
  },
};
</script>

<style>
body{
  /* background: #000; */
}
h3 {
  margin: 40px 0 0;
  color: #42b983;
}
</style>
