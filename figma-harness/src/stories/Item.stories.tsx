import type { Meta, StoryObj } from '@storybook/react';
import { Item } from '../components/ui/Item';
import { ShowcaseSection } from './helpers/ShowcaseSection';

const ITEMS = [
  { name: '01' as const, src: '/images/showcase/item-01.png', alt: '대일' },
  { name: '02' as const, src: '/images/showcase/item-02.png', alt: '피튜' },
  { name: '03' as const, src: '/images/showcase/item-03.png', alt: '비비' },
  { name: '04' as const, src: '/images/showcase/item-04.png', alt: '시원' },
];

function ItemShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>Item</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        85×85 캐릭터/콘텐츠 이미지 아이템. Banner 내부에서 사용됩니다.
      </p>

      {ITEMS.map(({ name, src, alt }) => (
        <ShowcaseSection
          key={name}
          title={`name="${name}" — ${alt}`}
          code={`<Item name="${name}" src="/images/showcase/item-${name}.png" alt="${alt}" />`}
        >
          <Item name={name} src={src} alt={alt} />
        </ShowcaseSection>
      ))}

      <ShowcaseSection
        title="4개 나란히 (Banner 사용 패턴)"
        code={`<div style={{ display: 'flex', gap: '12px' }}>\n  <Item name="01" src="/images/showcase/item-01.png" alt="대일" />\n  <Item name="02" src="/images/showcase/item-02.png" alt="피튜" />\n  <Item name="03" src="/images/showcase/item-03.png" alt="비비" />\n  <Item name="04" src="/images/showcase/item-04.png" alt="시원" />\n</div>`}
        horizontal
      >
        {ITEMS.map(({ name, src, alt }) => (
          <Item key={name} name={name} src={src} alt={alt} />
        ))}
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/Item',
  component: ItemShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ItemShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
