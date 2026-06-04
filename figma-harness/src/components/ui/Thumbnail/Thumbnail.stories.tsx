import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Thumbnail } from './Thumbnail';

const meta = {
  title: 'UI/Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=448-2280',
    },
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant1: Story = {
  args: {
    variant: '1',
    src: '/images/showcase/thumbnail-1.png',
    alt: '썸네일 1',
  },
};

export const Variant2: Story = {
  args: {
    variant: '2',
    src: '/images/showcase/thumbnail-1.png',
    alt: '썸네일 2',
  },
};

export const Variant3: Story = {
  args: {
    variant: '3',
    src: '/images/showcase/thumbnail-1.png',
    alt: '썸네일 3',
  },
};

export const WithoutImage: Story = {
  args: { variant: '1' },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
      {(['1', '2', '3'] as const).map((v) => (
        <Thumbnail key={v} {...args} variant={v} alt={`variant ${v}`} />
      ))}
    </div>
  ),
  args: { src: '/images/showcase/thumbnail-1.png' },
};

export const RendersImage: Story = {
  args: { variant: '1', src: '/images/showcase/thumbnail-1.png', alt: '썸네일' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByAltText('썸네일')).toBeInTheDocument();
  },
};
