import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { AppList } from './AppList';

const meta = {
  title: 'UI/AppList',
  component: AppList,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=448-2632',
    },
  },
} satisfies Meta<typeof AppList>;

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

export const WithThumbnail: Story = {
  args: {
    title: '인사이드 아웃 2',
    category: '영화',
    genre: '애니메이션',
    rating: 4.5,
    thumbnailSrc: '/images/showcase/thumbnail-1.png',
    thumbnailAlt: '인사이드 아웃 2 썸네일',
  },
};

export const LongTitle: Story = {
  args: {
    title: '이름이 매우 길어서 넘칠 수 있는 앱 이름입니다 잘릴 것입니다',
    category: '생산성',
    genre: '유틸리티',
    rating: 4.2,
  },
};

export const Renders: Story = {
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
