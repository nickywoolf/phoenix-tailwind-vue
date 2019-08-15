<template>
  <h1>Hello, {{ name }}</h1>
</template>

<script>
export default {
  props: {
    name: { default: "World" }
  }
};
</script>

<style scoped>
h1 {
  @apply text-pink-500;
}
</style>