<template>
  <div class="container flex flex-wrap ml-20 w-full">
    <SearchResultCard v-for="publicBookReview in publicBookReviewList" :public-book-review="publicBookReview" />
  </div>
</template>

<script setup lang="ts">
import SearchResultCard from './SearchResultCard.vue';
import PublicBookReview from '../model/PublicBookReview';

const props = defineProps({
  publicBookReviewList: Array<PublicBookReview>,
});
</script>
