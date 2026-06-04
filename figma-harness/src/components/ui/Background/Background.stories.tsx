import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Background } from './Background';

const meta = {
  title: 'UI/Background',
  component: Background,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=462-3043',
    },
  },
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '꿈의 마을 (Township)',
    rating: 3.7,
    imageSrc: '/images/showcase/app-icon.png',
    imageAlt: '꿈의 마을 아이콘',
  },
};

export const WithoutImage: Story = {
  args: {
    title: '앱 이름',
    rating: 4.2,
  },
};

export const LongTitle: Story = {
  args: {
    title: '매우 긴 앱 이름이 잘려야 합니다 테스트용',
    rating: 4.8,
    imageSrc: '/images/showcase/app-icon.png',
  },
};

export const ContentCheck: Story = {
  args: {
    title: '꿈의 마을',
    rating: 3.7,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('꿈의 마을')).toBeInTheDocument();
    expect(canvas.getByText('3.7')).toBeInTheDocument();
  },
};
