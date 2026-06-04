import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName } from '../components/ui/Icon';
import { ShowcaseSection } from './helpers/ShowcaseSection';

const DEVICE_ICONS: { name: IconName; src: string; label: string }[] = [
  { name: '01', src: '/images/showcase/icon-01.svg', label: 'Device 01' },
  { name: '02', src: '/images/showcase/icon-02.svg', label: 'Device 02' },
  { name: '03', src: '/images/showcase/icon-03.svg', label: 'Device 03' },
  { name: '04', src: '/images/showcase/icon-04.svg', label: 'Device 04' },
  { name: '05', src: '/images/showcase/icon-05.svg', label: 'Device 05' },
  { name: '06', src: '/images/showcase/icon-06.svg', label: 'Device 06' },
  { name: '07', src: '/images/showcase/icon-07.svg', label: 'Device 07' },
];

const ACTION_ICONS: { name: IconName; src: string; label: string }[] = [
  { name: 'search', src: '/images/showcase/icon-search.svg', label: 'Search' },
  { name: 'info', src: '/images/showcase/icon-info.svg', label: 'Info' },
  { name: 'user', src: '/images/showcase/icon-user.svg', label: 'User' },
];

const MISC_ICONS: { name: IconName; src: string; label: string }[] = [
  { name: 'star', src: '/images/showcase/icon-star.svg', label: 'Star' },
];

function IconShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>Icon</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        11가지 아이콘 variant. 디바이스(01~07, 16px), 액션(search/info/user, 48px), 별점(star, 12px).
      </p>

      <ShowcaseSection
        title="Device Icons (16×16)"
        description="플랫폼/디바이스 아이콘 — FilterChip, AppList 등에서 사용"
        code={`<Icon name="01" src="/images/showcase/icon-01.svg" alt="Device 01" />`}
        horizontal
      >
        {DEVICE_ICONS.map(({ name, src, label }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <div style={{ padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <Icon name={name} src={src} alt={label} />
            </div>
            <span style={{ fontSize: '10px', color: '#5f6368' }}>{name}</span>
          </div>
        ))}
      </ShowcaseSection>

      <ShowcaseSection
        title="Action Icons (48×48)"
        description="헤더 액션 버튼 — search, info, user"
        code={`<Icon name="search" src="/images/showcase/icon-search.svg" alt="검색" />\n<Icon name="info" src="/images/showcase/icon-info.svg" alt="고객센터" />\n<Icon name="user" src="/images/showcase/icon-user.svg" alt="프로필" />`}
        horizontal
      >
        {ACTION_ICONS.map(({ name, src, label }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <Icon name={name} src={src} alt={label} />
            </div>
            <span style={{ fontSize: '10px', color: '#5f6368' }}>{name}</span>
          </div>
        ))}
      </ShowcaseSection>

      <ShowcaseSection
        title="Star Icon (12×12)"
        description="평점 표시에 사용"
        code={`<Icon name="star" src="/images/showcase/icon-star.svg" alt="별점" />`}
        horizontal
      >
        {MISC_ICONS.map(({ name, src, label }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <div style={{ padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <Icon name={name} src={src} alt={label} />
            </div>
            <span style={{ fontSize: '10px', color: '#5f6368' }}>{name}</span>
          </div>
        ))}
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/Icon',
  component: IconShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof IconShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
