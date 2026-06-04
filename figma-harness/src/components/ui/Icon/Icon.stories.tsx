import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Icon } from './Icon';

const PLACEHOLDER = '/images/showcase/icon-search.svg';

const meta = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aQgSRLCsGpU2rU8L3jGJbZ/-%EA%B3%B5%EC%9C%A0%EC%9A%A9-%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%84%B8%EB%AF%B8%EB%82%98?node-id=462-3153',
    },
  },
  args: { src: PLACEHOLDER, alt: '아이콘' },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeviceIcon: Story = {
  args: { name: '01' },
};

export const StarIcon: Story = {
  args: { name: 'star', alt: '별점' },
};

export const SearchIcon: Story = {
  args: { name: 'search', alt: '검색' },
};

export const InfoIcon: Story = {
  args: { name: 'info', alt: '고객센터' },
};

export const UserIcon: Story = {
  args: { name: 'user', alt: '프로필' },
};

export const AllDeviceIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      {(['01', '02', '03', '04', '05', '06', '07'] as const).map((name) => (
        <Icon key={name} {...args} name={name} alt={`디바이스 ${name}`} />
      ))}
    </div>
  ),
  args: { src: PLACEHOLDER },
};

export const RendersImage: Story = {
  args: { name: 'search', alt: '검색 버튼' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByAltText('검색 버튼')).toBeInTheDocument();
  },
};
