import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Banner } from './Banner';

const meta = {
  title: 'UI/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=462-2978',
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '배너에 텍스트 들어가는데\n그냥 우리 이미지 쓸게요!',
    subtitle: '피그마 피디아 실습 클래스',
  },
};

export const WithContent: Story = {
  args: {
    title: '지금 바로 시작하세요',
    subtitle: '무료로 체험해보기',
    children: (
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
        }}
      >
        {['01', '02', '03', '04'].map((n) => (
          <div
            key={n}
            style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--background-secondary)',
            }}
          />
        ))}
      </div>
    ),
  },
};

export const ShortTitle: Story = {
  args: {
    title: '신규 출시',
    subtitle: '이번 주 신규 앱',
  },
};

export const ContentCheck: Story = {
  args: {
    title: '테스트 배너',
    subtitle: '부제목',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('테스트 배너')).toBeInTheDocument();
    expect(canvas.getByText('부제목')).toBeInTheDocument();
  },
};
