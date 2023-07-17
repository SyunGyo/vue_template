import type { Meta, StoryObj } from '@storybook/vue3';
import StarTable from './StarTable.vue';

const meta: Meta<typeof StarTable> = {
  component: StarTable,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
};

export default meta;
type Story = StoryObj<typeof StarTable>;

export const Five: Story = {
  args: {
    point: 5,
    size: 40,
  },
};

export const FourTwo: Story = {
  args: {
    point: 4.2,
    size: 40,
  },
};

export const Four: Story = {
  args: {
    point: 4,
    size: 40,
  },
};

export const ThreeTwo: Story = {
  args: {
    point: 3.2,
    size: 40,
  },
};

export const ZeroNine: Story = {
  args: {
    point: 0.9,
    size: 40,
  },
};
