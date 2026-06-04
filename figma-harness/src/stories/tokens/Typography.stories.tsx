import type { Meta, StoryObj } from '@storybook/react';

const FONT_FAMILIES = [
  { name: '--font-family-sans', label: 'font-family-sans', value: "'Inter', sans-serif", usage: '기본 UI 텍스트' },
];

const FONT_SIZES = [
  { name: '--text-sm', label: 'text-sm', value: '0.875rem', px: '14px' },
  { name: '--text-base', label: 'text-base', value: '1rem', px: '16px' },
  { name: '--text-lg', label: 'text-lg', value: '1.125rem', px: '18px' },
];

const FONT_WEIGHTS = [
  { name: '--font-weight-medium', label: 'font-weight-medium', value: '500' },
  { name: '--font-weight-semibold', label: 'font-weight-semibold', value: '600' },
];

const FIGMA_TYPOGRAPHY = [
  {
    label: 'Typography/heading/Medium_22',
    family: 'Pretendard',
    size: '22px',
    weight: 500,
    lineHeight: '28px',
    sample: '섹션 제목 텍스트',
  },
  {
    label: 'Typography/heading/Bold_24',
    family: 'Pretendard',
    size: '24px',
    weight: 700,
    lineHeight: '1.4',
    sample: '강조 제목 텍스트',
  },
  {
    label: 'Typography/display/Bold_32',
    family: 'Pretendard',
    size: '32px',
    weight: 700,
    lineHeight: '1.4',
    sample: '배너 디스플레이 텍스트',
  },
  {
    label: 'Typography/body/Bold_15.6',
    family: 'Roboto',
    size: '15.6px',
    weight: 700,
    lineHeight: '28px',
    sample: '로고/강조 본문 텍스트',
  },
];

function TypographyShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>
        Typography Tokens
      </h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '32px' }}>
        CSS 토큰 기반 타이포그래피 스케일 + Figma 원본 타이포그래피 정의
      </p>

      {/* CSS Token Scale */}
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#202124', marginBottom: '16px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px' }}>
        CSS Token Scale
      </h2>

      <h3 style={{ fontSize: '13px', color: '#5f6368', marginBottom: '12px', fontWeight: 500 }}>Font Size</h3>
      <div style={{ marginBottom: '24px' }}>
        {FONT_SIZES.map(({ name, label, value, px }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '16px', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ width: '200px', flexShrink: 0 }}>
              <code style={{ fontSize: '11px', color: '#0179ca', backgroundColor: '#f0f7ff', padding: '2px 6px', borderRadius: '3px' }}>{name}</code>
              <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#5f6368' }}>{value} ({px})</p>
            </div>
            <p style={{ margin: 0, fontSize: `var(${name})`, color: 'var(--text-primary)', fontFamily: 'var(--font-family-sans)' }}>
              가나다라마바사 ABCDEFGabcdefg 0123456789
            </p>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: '13px', color: '#5f6368', marginBottom: '12px', fontWeight: 500 }}>Font Weight</h3>
      <div style={{ marginBottom: '24px' }}>
        {FONT_WEIGHTS.map(({ name, label, value }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ width: '200px', flexShrink: 0 }}>
              <code style={{ fontSize: '11px', color: '#0179ca', backgroundColor: '#f0f7ff', padding: '2px 6px', borderRadius: '3px' }}>{name}</code>
              <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#5f6368' }}>{value}</p>
            </div>
            <p style={{ margin: 0, fontSize: '16px', fontWeight: `var(${name})` as unknown as number, color: 'var(--text-primary)' }}>
              가나다라마바사 ABCDEFGabcdefg
            </p>
          </div>
        ))}
      </div>

      {/* Figma Typography */}
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#202124', margin: '32px 0 16px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px' }}>
        Figma Typography Definitions
      </h2>
      <div>
        {FIGMA_TYPOGRAPHY.map(({ label, family, size, weight, lineHeight, sample }) => (
          <div key={label} style={{ padding: '20px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ width: '220px', flexShrink: 0 }}>
                <code style={{ fontSize: '10px', color: '#0179ca', backgroundColor: '#f0f7ff', padding: '2px 6px', borderRadius: '3px', wordBreak: 'break-all' }}>{label}</code>
                <div style={{ marginTop: '8px', fontSize: '10px', color: '#5f6368', lineHeight: 1.8 }}>
                  <div>family: {family}</div>
                  <div>size: {size}</div>
                  <div>weight: {weight}</div>
                  <div>lineHeight: {lineHeight}</div>
                </div>
              </div>
              <p style={{ margin: 0, fontFamily: family, fontSize: size, fontWeight: weight, lineHeight, color: 'var(--text-primary)' }}>
                {sample}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Tokens/Typography',
  component: TypographyShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TypographyShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {};
