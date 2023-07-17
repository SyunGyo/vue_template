import type { Meta, StoryObj } from '@storybook/vue3';
import GuideButton from './GuideButton.vue';

const meta: Meta<typeof GuideButton> = {
  component: GuideButton,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
};

export default meta;
type Story = StoryObj<typeof GuideButton>;

export const Selected: Story = {
  args: {
    label: 'あなたのコレクション',
    isSelected: true,
  },
};

export const NotSelected: Story = {
  args: {
    label: 'あなたのコレクション',
    isSelected: false,
  },
};

// export const Primary: Story = {
//   render: (args) => ({
//     components: { JunkButton },
//     setup() {
//       const count = ref(1);

//       function countIncrease() {
//         count.value++;
//       };
//       return { countIncrease, count,args};
//     },
//     template: '<JunkButton :count="count" @countIncrease="countIncrease"/>',
//   }),

//   parameters: {
//     backgrounds: {
//       values: [
//         { name: 'red', value: '#f00'}
//       ]
//     }
//   }
// };
