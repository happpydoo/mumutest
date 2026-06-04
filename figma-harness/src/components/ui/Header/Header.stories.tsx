import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Header } from './Header';

const ICON_PLACEHOLDER = '/images/showcase/icon-search.svg';

const mockActions = [
  { name: 'search' as const, src: ICON_PLACEHOLDER, alt: '검색' },
  { name: 'info' as const, src: ICON_PLACEHOLDER, alt: '고객센터' },
  { name: 'user' as const, src: ICON_PLACEHOLDER, alt: '프로필' },
];

const meta = {
  title: 'UI/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=462-3690',
    },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {
    breakpoint: 'mobile',
    logoText: 'Logo 영역',
    actions: mockActions,
  },
};

export const Web: Story = {
  args: {
    breakpoint: 'web',
    logoText: 'Logo 영역',
    tabs: ['게임', '앱', '영화/TV', '도서', '키즈'],
    activeTabIndex: 0,
    actions: mockActions,
  },
};

export const WebSecondTabActive: Story = {
  args: {
    breakpoint: 'web',
    logoText: 'Logo 영역',
    tabs: ['게임', '앱', '영화/TV', '도서', '키즈'],
    activeTabIndex: 1,
    actions: mockActions,
  },
};

export const MobileRendersLogo: Story = {
  args: {
    breakpoint: 'mobile',
    logoText: 'Play Store',
    actions: mockActions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Play Store')).toBeInTheDocument();
  },
};
