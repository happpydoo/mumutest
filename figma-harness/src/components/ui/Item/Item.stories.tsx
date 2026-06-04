import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Item } from './Item';

const meta = {
  title: 'UI/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=448-2287',
    },
  },
  args: { src: '/images/showcase/item-01.png' },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name01: Story = {
  args: { name: '01', alt: '캐릭터 01' },
};

export const Name02: Story = {
  args: { name: '02', alt: '캐릭터 02' },
};

export const Name03: Story = {
  args: { name: '03', alt: '캐릭터 03' },
};

export const Name04: Story = {
  args: { name: '04', alt: '캐릭터 04' },
};

export const AllItems: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {(['01', '02', '03', '04'] as const).map((name) => (
        <Item key={name} {...args} name={name} alt={`캐릭터 ${name}`} />
      ))}
    </div>
  ),
};

export const RendersImage: Story = {
  args: { name: '01', alt: '캐릭터 이미지' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByAltText('캐릭터 이미지')).toBeInTheDocument();
  },
};
