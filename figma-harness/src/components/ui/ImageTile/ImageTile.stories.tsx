import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { ImageTile } from './ImageTile';

const meta = {
  title: 'UI/ImageTile',
  component: ImageTile,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=462-3030',
    },
  },
  args: { src: '/images/showcase/image-tile-01.png' },
} satisfies Meta<typeof ImageTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Type01: Story = {
  args: { type: '01', alt: '이미지 01' },
};

export const Type02: Story = {
  args: { type: '02', alt: '이미지 02' },
};

export const Type03: Story = {
  args: { type: '03', alt: '이미지 03' },
};

export const AllTypes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
      {(['01', '02', '03', '04', '05', '06', '07', '08'] as const).map((type) => (
        <ImageTile key={type} {...args} type={type} alt={`이미지 ${type}`} />
      ))}
    </div>
  ),
};

export const RendersImage: Story = {
  args: { type: '01', alt: '앱 이미지' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByAltText('앱 이미지')).toBeInTheDocument();
  },
};
