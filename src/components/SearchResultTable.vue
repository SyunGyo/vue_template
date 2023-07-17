<template>
  <SearchResultCard />
</template>

<script setup lang="ts">
import SearchResultCard from './SearchResultCard.vue';

const props = defineProps({
  label: String,
  isSelected: {
    type: Boolean,
    default: false,
  },
});
</script>
