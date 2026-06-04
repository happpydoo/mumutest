import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '../components/ui/Banner';
import { Item } from '../components/ui/Item';
import { ShowcaseSection } from './helpers/ShowcaseSection';

const ITEMS = [
  { name: '01' as const, src: '/images/showcase/item-01.png', alt: '캐릭터 01' },
  { name: '02' as const, src: '/images/showcase/item-02.png', alt: '캐릭터 02' },
  { name: '03' as const, src: '/images/showcase/item-03.png', alt: '캐릭터 03' },
  { name: '04' as const, src: '/images/showcase/item-04.png', alt: '캐릭터 04' },
];

function BannerShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>Banner</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        어두운 배경의 프로모션 배너. 텍스트와 선택적 children 콘텐츠를 포함합니다.
      </p>

      <ShowcaseSection
        title="텍스트만"
        code={`<Banner\n  title="배너에 텍스트 들어가는데\n그냥 우리 이미지 쓸게요!"\n  subtitle="피그마 피디아 실습 클래스"\n/>`}
      >
        <Banner
          title={'배너에 텍스트 들어가는데\n그냥 우리 이미지 쓸게요!'}
          subtitle="피그마 피디아 실습 클래스"
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="캐릭터 이미지 포함"
        description="children으로 Item 컴포넌트 4개를 전달"
        code={`<Banner title="지금 시작하세요" subtitle="피그마 피디아 실습 클래스">\n  <div style={{ display: 'flex', gap: '12px' }}>\n    <Item name="01" src="/images/showcase/item-01.png" alt="01" />\n    <Item name="02" src="/images/showcase/item-02.png" alt="02" />\n    <Item name="03" src="/images/showcase/item-03.png" alt="03" />\n    <Item name="04" src="/images/showcase/item-04.png" alt="04" />\n  </div>\n</Banner>`}
      >
        <Banner
          title={'배너에 텍스트 들어가는데\n그냥 우리 이미지 쓸게요!'}
          subtitle="피그마 피디아 실습 클래스"
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {ITEMS.map(({ name, src, alt }) => (
              <Item key={name} name={name} src={src} alt={alt} />
            ))}
          </div>
        </Banner>
      </ShowcaseSection>

      <ShowcaseSection
        title="짧은 제목"
        code={`<Banner title="신규 출시" subtitle="이번 주 신규 앱" />`}
      >
        <Banner title="신규 출시" subtitle="이번 주 신규 앱" />
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/Banner',
  component: BannerShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof BannerShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
