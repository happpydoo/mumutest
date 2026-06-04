import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { AppCard } from './AppCard';

const meta = {
  title: 'UI/AppCard',
  component: AppCard,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=448-2661',
    },
  },
} satisfies Meta<typeof AppCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '버섯 키우기',
    category: '캐주얼',
    genre: '전략',
    rating: 3.7,
  },
};

export const WithImages: Story = {
  args: {
    title: '인사이드 아웃 2',
    category: '영화',
    genre: '애니메이션',
    rating: 4.5,
    imageSrc: '/images/showcase/app-card.png',
    imageAlt: '인사이드 아웃 2 스틸컷',
    thumbnailSrc: '/images/showcase/thumbnail-1.png',
    thumbnailAlt: '인사이드 아웃 2 포스터',
  },
};

export const NoImage: Story = {
  args: {
    title: '이미지 없는 앱',
    category: '도구',
    genre: '유틸리티',
    rating: 4.0,
  },
};

export const ContentCheck: Story = {
  args: {
    title: '버섯',
    category: '버섯!',
    genre: '입엇!',
    rating: 3.7,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('버섯')).toBeInTheDocument();
    expect(canvas.getByText('3.7')).toBeInTheDocument();
  },
};
