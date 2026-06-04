import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { TabList } from './TabList';

const meta = {
  title: 'UI/TabList',
  component: TabList,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=462-3643',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: ['게임', '앱', '영화/TV', '도서', '키즈'],
    defaultActiveIndex: 0,
  },
};

export const SecondTabActive: Story = {
  args: {
    tabs: ['게임', '앱', '영화/TV', '도서', '키즈'],
    defaultActiveIndex: 1,
  },
};

export const TabSwitch: Story = {
  args: {
    tabs: ['게임', '앱', '영화/TV'],
    defaultActiveIndex: 0,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');
    await userEvent.click(tabs[1]);
    expect(args.onChange).toHaveBeenCalledWith(1);
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
  },
};
