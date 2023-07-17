import SearchResultCard from "../components/SearchResultCard.vue";
import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: SearchResultCard
  }
];

