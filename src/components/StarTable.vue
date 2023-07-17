<template>
  <div class="flex">
    <StarItem :size="props.size" :point="props.point" />
    <StarItem :size="props.size" :point="props.point - 1" />
    <StarItem :size="props.size" :point="props.point - 2" />
    <StarItem :size="props.size" :point="props.point - 3" />
    <StarItem :size="props.size" :point="props.point - 4" />
  </div>
</template>

<script setup lang="ts">
import StarItem from './StarItem.vue';

const props = defineProps({
  point: {
    type: Number,
    default: 5,
  },
  size: {
    type: Number,
    default: 40,
  },
});
</script>
