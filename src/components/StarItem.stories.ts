import type { Meta, StoryObj } from '@storybook/vue3';
import StarItem from './StarItem.vue';

const meta: Meta<typeof StarItem> = {
  component: StarItem,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
};

export default meta;
type Story = StoryObj<typeof StarItem>;

export const Full: Story = {
  args: {
    point: 5,
    size: 40,
  },
};

export const Half: Story = {
  args: {
    point: 0.4,
    size: 40,
  },
};

export const empty: Story = {
  args: {
    point: -0.1,
    size: 40,
  },
};
