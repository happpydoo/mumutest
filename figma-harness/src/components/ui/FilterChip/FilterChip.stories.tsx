import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { FilterChip } from './FilterChip';

const meta = {
  title: 'UI/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=448-2157',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    label: 'Windows',
    active: true,
    iconSrc: '/images/showcase/filter-chip-icon.svg',
  },
};

export const Inactive: Story = {
  args: {
    label: 'Windows',
    active: false,
    iconSrc: '/images/showcase/filter-chip-icon.svg',
  },
};

export const WithoutIcon: Story = {
  args: {
    label: 'Android',
    active: false,
  },
};

export const ChipGroup: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px' }}>
      {['Windows', 'Android', 'iPhone', 'iPad', 'Mac'].map((label, i) => (
        <FilterChip key={label} {...args} label={label} active={i === 0} />
      ))}
    </div>
  ),
  args: { iconSrc: '/images/showcase/filter-chip-icon.svg' },
};

export const ClickInteraction: Story = {
  args: { label: 'Windows', active: false },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button');
    await userEvent.click(chip);
    expect(args.onClick).toHaveBeenCalled();
  },
};
