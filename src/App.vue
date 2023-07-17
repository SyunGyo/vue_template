<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import NavigationBar from './components/NavigationBar.vue';
import GuideButtonBar from './components/GuideButtonBar.vue';
import JunkButton from '@/junks/JunkButton.vue';
import { ref } from 'vue';

const count = ref(0);
const countIncrease = () => {
  count.value++;
};
</script>

<template>
  <NavigationBar />
  <!-- <JunkButton :count="count" @countIncrease="countIncrease" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
