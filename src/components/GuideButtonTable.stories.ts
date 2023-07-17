import type { Meta, StoryObj } from '@storybook/vue3';
import GuideButtonTable from './GuideButtonTable.vue';

const meta: Meta<typeof GuideButtonTable> = {
  component: GuideButtonTable,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
};

export default meta;
type Story = StoryObj<typeof GuideButtonTable>;

export const Default: Story = {
  args: {
    label: 'あああ',
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
