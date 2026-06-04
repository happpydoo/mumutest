import type { Meta, StoryObj } from '@storybook/react';
import { AppCard } from '../components/ui/AppCard';
import { ShowcaseSection } from './helpers/ShowcaseSection';

function AppCardShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>AppCard</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        커버 이미지(234px) + AppList로 구성된 앱 카드. imageSrc가 없으면 배경색 플레이스홀더.
      </p>

      <ShowcaseSection
        title="전체 이미지 포함"
        description="커버 이미지 + 썸네일 + 앱 정보"
        code={`<AppCard\n  title="인사이드 아웃 2"\n  category="영화"\n  genre="애니메이션"\n  rating={4.5}\n  imageSrc="/images/showcase/app-card.png"\n  imageAlt="인사이드 아웃 2"\n  thumbnailSrc="/images/showcase/thumbnail-1.png"\n  thumbnailAlt="포스터"\n/>`}
      >
        <div style={{ width: '416px' }}>
          <AppCard
            title="인사이드 아웃 2"
            category="영화"
            genre="애니메이션"
            rating={4.5}
            imageSrc="/images/showcase/app-card.png"
            imageAlt="인사이드 아웃 2"
            thumbnailSrc="/images/showcase/thumbnail-1.png"
            thumbnailAlt="포스터"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="이미지 없음 (플레이스홀더)"
        description="imageSrc 미전달 — 배경색 영역"
        code={`<AppCard\n  title="버섯 키우기"\n  category="캐주얼"\n  genre="전략"\n  rating={3.7}\n/>`}
      >
        <div style={{ width: '416px' }}>
          <AppCard title="버섯 키우기" category="캐주얼" genre="전략" rating={3.7} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="썸네일만 있는 경우"
        code={`<AppCard\n  title="버섯 키우기"\n  category="캐주얼"\n  genre="전략"\n  rating={3.7}\n  thumbnailSrc="/images/showcase/thumbnail-2.png"\n/>`}
      >
        <div style={{ width: '416px' }}>
          <AppCard
            title="버섯 키우기"
            category="캐주얼"
            genre="전략"
            rating={3.7}
            thumbnailSrc="/images/showcase/thumbnail-2.png"
          />
        </div>
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/AppCard',
  component: AppCardShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof AppCardShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
