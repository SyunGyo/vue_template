import type { Meta, StoryObj } from '@storybook/vue3';
import JunkButton from './JunkButton.vue';

const meta: Meta<typeof JunkButton> = {
  component: JunkButton,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
};

export default meta;
type Story = StoryObj<typeof JunkButton>;

export const Default = {
  args: {
    count: 2,
  },
};

export const Primary: Story = {
  args: {
    count: 1,
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
