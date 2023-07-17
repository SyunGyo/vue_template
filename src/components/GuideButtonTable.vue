<template>
  <div class="h-12 mb-0 pb-0 flex justify-center bg-morning border-b-2 border-b-sunset">
    <GuideButton :is-selected="true" :label="collection_button_name" />
    <GuideButton :is_selected="false" :label="recommend_button_name" />
  </div>
</template>

<script setup lang="ts">
import GuideButton from './GuideButton.vue';

const collection_button_name = 'あなたのコレクション';
const recommend_button_name = 'おすすめ';

const props = defineProps({
  label: String,
});
</script>
