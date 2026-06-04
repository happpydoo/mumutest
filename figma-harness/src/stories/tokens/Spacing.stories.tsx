import type { Meta, StoryObj } from '@storybook/react';

const SPACING = [
  { name: '--spacing-xs', label: 'spacing-xs', px: 4 },
  { name: '--spacing-sm', label: 'spacing-sm', px: 8 },
  { name: '--spacing-md', label: 'spacing-md', px: 12 },
  { name: '--spacing-lg', label: 'spacing-lg', px: 16 },
  { name: '--spacing-xl', label: 'spacing-xl', px: 24 },
  { name: '--spacing-2xl', label: 'spacing-2xl', px: 32 },
];

const RADIUS = [
  { name: '--radius-sm', label: 'radius-sm', px: 4 },
  { name: '--radius-md', label: 'radius-md', px: 8 },
  { name: '--radius-lg', label: 'radius-lg', px: 12 },
  { name: '--radius-full', label: 'radius-full', px: 9999 },
];

const SHADOW = [
  { name: '--shadow-sm', label: 'shadow-sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { name: '--shadow-md', label: 'shadow-md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
];

function SpacingShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>
        Spacing Tokens
      </h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '32px' }}>
        스페이싱, 보더 라디우스, 쉐도우 시각화
      </p>

      {/* Spacing Scale */}
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#202124', marginBottom: '16px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px' }}>
        Spacing Scale
      </h2>
      <div style={{ marginBottom: '32px' }}>
        {SPACING.map(({ name, label, px }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ width: '180px', flexShrink: 0 }}>
              <code style={{ fontSize: '11px', color: '#0179ca', backgroundColor: '#f0f7ff', padding: '2px 6px', borderRadius: '3px' }}>{name}</code>
              <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#5f6368' }}>{px}px</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
              <div
                style={{
                  height: '24px',
                  width: `var(${name})`,
                  backgroundColor: 'var(--accent-primary)',
                  borderRadius: '2px',
                  minWidth: '2px',
                }}
              />
              <div
                style={{
                  height: `var(${name})`,
                  width: '24px',
                  backgroundColor: 'var(--accent-primary-1)',
                  borderRadius: '2px',
                  minHeight: '2px',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Radius Scale */}
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#202124', marginBottom: '16px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px' }}>
        Border Radius Scale
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px', marginBottom: '32px' }}>
        {RADIUS.map(({ name, label, px }) => (
          <div key={name} style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--background-secondary)',
                border: '2px solid var(--border-default)',
                borderRadius: `var(${name})`,
                marginBottom: '8px',
              }}
            />
            <code style={{ fontSize: '11px', color: '#0179ca', backgroundColor: '#f0f7ff', padding: '2px 6px', borderRadius: '3px', display: 'block', marginBottom: '4px' }}>{name}</code>
            <p style={{ margin: 0, fontSize: '10px', color: '#5f6368' }}>{px >= 9999 ? '9999px (pill)' : `${px}px`}</p>
          </div>
        ))}
      </div>

      {/* Shadow Scale */}
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#202124', marginBottom: '16px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px' }}>
        Shadow Scale
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {SHADOW.map(({ name, label, value }) => (
          <div key={name} style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <div
              style={{
                width: '80px',
                height: '48px',
                backgroundColor: '#ffffff',
                boxShadow: `var(${name})`,
                borderRadius: '6px',
                marginBottom: '12px',
              }}
            />
            <code style={{ fontSize: '11px', color: '#0179ca', backgroundColor: '#f0f7ff', padding: '2px 6px', borderRadius: '3px', display: 'block', marginBottom: '4px' }}>{name}</code>
            <p style={{ margin: 0, fontSize: '9px', color: '#5f6368', wordBreak: 'break-all' }}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Tokens/Spacing',
  component: SpacingShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof SpacingShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {};
