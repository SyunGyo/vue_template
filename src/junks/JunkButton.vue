<template>
  <div class="border-2 border-black hover:bg-blue-700">
    {{ props.count }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  count: Number,
});
</script>
