import type { Meta, StoryObj } from '@storybook/react';

const PRIMITIVE: Record<string, { name: string; hex: string }[]> = {
  Neutral: [
    { name: '--primitive-neutral-0', hex: '#ffffff' },
    { name: '--primitive-neutral-200', hex: '#dadce0' },
    { name: '--primitive-neutral-400', hex: '#989898' },
    { name: '--primitive-neutral-550', hex: '#5f6368' },
    { name: '--primitive-neutral-600', hex: '#696969' },
    { name: '--primitive-neutral-850', hex: '#202124' },
    { name: '--primitive-neutral-900', hex: '#181818' },
    { name: '--primitive-neutral-1000', hex: '#000000' },
  ],
  Blue: [
    { name: '--primitive-blue-100', hex: '#c1d4de' },
    { name: '--primitive-blue-300', hex: '#68b0c3' },
    { name: '--primitive-blue-400', hex: '#638cb4' },
    { name: '--primitive-blue-600', hex: '#0179ca' },
  ],
  Green: [
    { name: '--primitive-green-50', hex: '#e6f3ef' },
    { name: '--primitive-green-400', hex: '#6c9464' },
    { name: '--primitive-green-600', hex: '#01875f' },
    { name: '--primitive-green-800', hex: '#056449' },
  ],
  Red: [
    { name: '--primitive-red-600', hex: '#c71c56' },
  ],
};

const SEMANTIC: Record<string, { name: string; ref: string }[]> = {
  Neutral: [
    { name: '--neutral-variant', ref: '--primitive-neutral-400' },
    { name: '--neutral-variant-1', ref: '--primitive-neutral-900' },
    { name: '--neutral-variant-2', ref: '--primitive-neutral-1000' },
    { name: '--neutral-variant-3', ref: '--primitive-neutral-600' },
  ],
  Border: [
    { name: '--border-default', ref: '--primitive-blue-400' },
    { name: '--border-default-1', ref: '--primitive-neutral-200' },
    { name: '--border-default-2', ref: '--primitive-blue-600' },
    { name: '--border-default-3', ref: '--primitive-red-600' },
  ],
  Background: [
    { name: '--background-primary', ref: '--primitive-green-50' },
    { name: '--background-secondary', ref: '--primitive-blue-100' },
  ],
  Text: [
    { name: '--text-primary', ref: '--primitive-neutral-850' },
    { name: '--text-secondary', ref: '--primitive-neutral-550' },
    { name: '--text-secondary-1', ref: '--primitive-neutral-0' },
    { name: '--text-secondary-2', ref: '--primitive-green-800' },
    { name: '--text-secondary-3', ref: '--primitive-green-600' },
  ],
  Accent: [
    { name: '--accent-primary', ref: '--primitive-green-400' },
    { name: '--accent-primary-1', ref: '--primitive-blue-300' },
  ],
};

function ColorSwatch({ name, hex, ref }: { name: string; hex?: string; ref?: string }) {
  const isDark = hex
    ? parseInt(hex.slice(1), 16) < 0x808080 * 3
    : false;

  return (
    <div
      style={{
        width: '100%',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
      }}
    >
      <div
        style={{
          height: '64px',
          backgroundColor: `var(${name})`,
          border: name === '--primitive-neutral-0' || name === '--text-secondary-1'
            ? '1px solid #e5e7eb' : undefined,
        }}
      />
      <div style={{ padding: '8px', backgroundColor: '#fff' }}>
        <p style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: 600, fontFamily: 'monospace', color: '#202124', wordBreak: 'break-all' }}>
          {name}
        </p>
        {hex && (
          <p style={{ margin: 0, fontSize: '10px', color: '#5f6368', fontFamily: 'monospace' }}>{hex}</p>
        )}
        {ref && (
          <p style={{ margin: 0, fontSize: '10px', color: '#0179ca', fontFamily: 'monospace' }}>→ {ref}</p>
        )}
      </div>
    </div>
  );
}

function ColorGroup({ title, items, isPrimitive }: {
  title: string;
  items: { name: string; hex?: string; ref?: string }[];
  isPrimitive?: boolean;
}) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600, color: '#202124' }}>
        {isPrimitive ? '🎨' : '🔗'} {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px' }}>
        {items.map((item) => (
          <ColorSwatch key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

function ColorPalette() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>
        Color Tokens
      </h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '32px' }}>
        Figma 변수 → CSS Custom Properties 매핑. Semantic 토큰은 Primitive를 참조합니다.
      </p>

      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#202124', marginBottom: '16px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px' }}>
        Primitive Colors
      </h2>
      {Object.entries(PRIMITIVE).map(([group, tokens]) => (
        <ColorGroup key={group} title={group} items={tokens} isPrimitive />
      ))}

      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#202124', margin: '32px 0 16px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px' }}>
        Semantic Colors
      </h2>
      {Object.entries(SEMANTIC).map(([group, tokens]) => (
        <ColorGroup key={group} title={group} items={tokens} />
      ))}
    </div>
  );
}

const meta = {
  title: 'Tokens/Colors',
  component: ColorPalette,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {};

export const PrimitiveOnly: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '900px' }}>
      {Object.entries(PRIMITIVE).map(([group, tokens]) => (
        <ColorGroup key={group} title={group} items={tokens} isPrimitive />
      ))}
    </div>
  ),
};

export const SemanticOnly: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '900px' }}>
      {Object.entries(SEMANTIC).map(([group, tokens]) => (
        <ColorGroup key={group} title={group} items={tokens} />
      ))}
    </div>
  ),
};
