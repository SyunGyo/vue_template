<template>
  <div style="height: 440px; width: 260px" class="mx-8 mt-20 rounded overflow-hidden shadow-lg bg-lightcream">
    <div style="height: 280px; width: 260px">
      <img :src="book_img_url" class="h-full mx-auto" />
    </div>
    <div class="flex flex-grow flex-col justify-end">
      <p class="my-1 font-black text-lg">{{ props.publicBookReview?.title }}</p>
      <p class="my-1">{{ props.publicBookReview?.author }}</p>
    </div>
    <StarTable :size="30" :point="4.2" />
  </div>
</template>

<script setup lang="ts">
import StarTable from './StarTable.vue';
import PublicBookReview from '../model/PublicBookReview';
import { ref, onMounted } from 'vue';

const book_title = ref<string | undefined>('');
const book_img_url = ref<string>('');
const book_author = ref<string>('');
const book_total_point = ref<Number>(0);
const props = defineProps({
  publicBookReview: PublicBookReview,
});
onMounted(() => {
  if (props.publicBookReview !== undefined) {
    book_title.value = props.publicBookReview.title ?? '';
    book_img_url.value = props.publicBookReview.img_url ?? '';
    book_author.value = props.publicBookReview.author ?? '';
    book_total_point.value = props.publicBookReview.total_point ?? 0;
  }
});
</script>
