import type { Meta, StoryObj } from '@storybook/react';
import { FilterChip } from '../components/ui/FilterChip';
import { ShowcaseSection } from './helpers/ShowcaseSection';

const CHIP_ICON = '/images/showcase/filter-chip-icon.svg';

function FilterChipShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>FilterChip</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        플랫폼 필터 칩. active 상태는 녹색 배경, inactive는 흰 배경 + 보더.
      </p>

      <ShowcaseSection
        title="Active (state=On)"
        description="선택된 상태 — 녹색 배경, 진한 녹색 텍스트"
        code={`<FilterChip\n  label="Windows"\n  active\n  iconSrc="/images/showcase/filter-chip-icon.svg"\n/>`}
      >
        <FilterChip label="Windows" active iconSrc={CHIP_ICON} />
      </ShowcaseSection>

      <ShowcaseSection
        title="Inactive (state=Off)"
        description="미선택 상태 — 흰 배경, 회색 보더, 회색 텍스트"
        code={`<FilterChip label="Windows" iconSrc="/images/showcase/filter-chip-icon.svg" />`}
      >
        <FilterChip label="Windows" iconSrc={CHIP_ICON} />
      </ShowcaseSection>

      <ShowcaseSection
        title="아이콘 없는 칩"
        code={`<FilterChip label="Android" />`}
      >
        <FilterChip label="Android" />
      </ShowcaseSection>

      <ShowcaseSection
        title="플랫폼 필터 그룹"
        description="여러 플랫폼 칩이 나열된 실제 사용 패턴"
        code={`const platforms = ['Windows', 'Android', 'iPhone', 'iPad', 'Mac'];\n\n<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>\n  {platforms.map((label, i) => (\n    <FilterChip key={label} label={label} active={i === 0} iconSrc={CHIP_ICON} />\n  ))}\n</div>`}
        horizontal
      >
        {['Windows', 'Android', 'iPhone', 'iPad', 'Mac'].map((label, i) => (
          <FilterChip key={label} label={label} active={i === 0} iconSrc={CHIP_ICON} />
        ))}
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/FilterChip',
  component: FilterChipShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof FilterChipShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
