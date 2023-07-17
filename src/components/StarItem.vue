<template>
  <svg
    v-if="fillRegion == 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-100 -100 200 200"
    :width="props.size"
    height="props.size"
  >
    <polygon
      fill="#EDDC44"
      points="0,-100 29.39,-40.45 95.11,-30.9 47.55,15.45 58.78,80.90 0,50 -58.78,80.9 -47.55,15.45 -95.11,-30.9 -29.39,-40.45"
    />
  </svg>
  <svg
    v-if="fillRegion == 0.5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-100 -100 200 200"
    :width="props.size"
    height="props.size"
  >
    <polygon fill="#EDDC44" points="0,-100  0,50 -58.78,80.9 -47.55,15.45 -95.11,-30.9 -29.39,-40.45" />
    <polygon fill="#B1B3B6" points="0,-100 29.39,-40.45 95.11,-30.9 47.55,15.45 58.78,80.90 0,50" />
  </svg>
  <svg
    v-if="fillRegion == 0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-100 -100 200 200"
    :width="props.size"
    height="props.size"
  >
    <polygon
      fill="#B1B3B6"
      points="0,-100 29.39,-40.45 95.11,-30.9 47.55,15.45 58.78,80.90 0,50 -58.78,80.9 -47.55,15.45 -95.11,-30.9 -29.39,-40.45"
    />
  </svg>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const fillRegion = ref<Number>(0);

const props = defineProps({
  point: Number,
  size: Number,
});

onMounted(() => {
  if (props.point !== undefined) {
    if (props.point <= 0) {
      fillRegion.value = 0;
    } else if (props.point < 1) {
      fillRegion.value = 0.5;
    } else {
      fillRegion.value = 1;
    }
  }
});
</script>
