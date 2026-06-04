import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Tab } from './Tab';

const meta = {
  title: 'UI/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=462-3623',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: { label: '게임', active: true },
};

export const Inactive: Story = {
  args: { label: '앱', active: false },
};

export const ClickInteraction: Story = {
  args: { label: '게임', active: false },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab');
    await userEvent.click(tab);
    expect(args.onClick).toHaveBeenCalled();
  },
};
