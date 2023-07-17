<template>
  <button
    v-if="!isSelected"
    onclick="document.location.href='/bookshelf/';"
    class="text-black h-10 mt-2 ml-4 mr-4 px-2 rounded-t-lg bg-cream text-xl border-2 border-b-sunset border-t-sunset border-l-sunset border-r-sunset hover:bg-lightcream"
  >
    {{ label }}
  </button>
  <button
    v-if="isSelected"
    onclick="document.location.href='/';"
    class="h-10 mt-2 ml-4 mr-4 px-2 rounded-t-lg bg-lightcream text-xl border-2 border-b-lightcream border-t-sunset border-l-sunset border-r-sunset hover:bg-cream"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  isSelected: {
    type: Boolean,
    default: false,
  },
});
</script>
