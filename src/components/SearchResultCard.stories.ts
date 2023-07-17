import type { Meta, StoryObj } from '@storybook/vue3';
import SearchResultCard from './SearchResultCard.vue';
import PublicBookReview from '../model/PublicBookReview';

const meta: Meta<typeof SearchResultCard> = {
  component: SearchResultCard,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
};

export default meta;
type Story = StoryObj<typeof SearchResultCard>;

const review_data_0 = new PublicBookReview();
review_data_0.img_url = 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1548/9784101001548.jpg?_ex=200x200';
review_data_0.title = '海辺のカフカ';
review_data_0.author = '村上春樹';

export const Selected: Story = {
  args: {
    publicBookReview: review_data_0,
  },
};
