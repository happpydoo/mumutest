import type { Meta, StoryObj } from '@storybook/react';
import { AppList } from '../components/ui/AppList';
import { ShowcaseSection } from './helpers/ShowcaseSection';

function AppListShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>AppList</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        앱 정보 행. 썸네일 + 제목 + 카테고리/장르 + 평점으로 구성됩니다.
      </p>

      <ShowcaseSection
        title="썸네일 포함"
        description="thumbnailSrc 전달 시 64×64 이미지 렌더링"
        code={`<AppList\n  title="버섯 키우기"\n  category="캐주얼"\n  genre="전략"\n  rating={3.7}\n  thumbnailSrc="/images/showcase/thumbnail-1.png"\n  thumbnailAlt="버섯 아이콘"\n/>`}
      >
        <div style={{ width: '416px' }}>
          <AppList
            title="버섯 키우기"
            category="캐주얼"
            genre="전략"
            rating={3.7}
            thumbnailSrc="/images/showcase/thumbnail-1.png"
            thumbnailAlt="버섯 아이콘"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="썸네일 없음"
        description="thumbnailSrc 미전달 — 배경색 박스만 표시"
        code={`<AppList title="버섯 키우기" category="캐주얼" genre="전략" rating={3.7} />`}
      >
        <div style={{ width: '416px' }}>
          <AppList title="버섯 키우기" category="캐주얼" genre="전략" rating={3.7} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="긴 제목 (말줄임)"
        code={`<AppList\n  title="매우 긴 앱 이름이 말줄임 처리되어야 합니다 테스트용"\n  category="생산성"\n  genre="유틸리티"\n  rating={4.2}\n  thumbnailSrc="/images/showcase/thumbnail-2.png"\n/>`}
      >
        <div style={{ width: '416px' }}>
          <AppList
            title="매우 긴 앱 이름이 말줄임 처리되어야 합니다 테스트용"
            category="생산성"
            genre="유틸리티"
            rating={4.2}
            thumbnailSrc="/images/showcase/thumbnail-2.png"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="다양한 평점"
        code={`<AppList title="앱 A" category="게임" genre="액션" rating={5.0} />\n<AppList title="앱 B" category="앱" genre="도구" rating={1.0} />`}
      >
        <div style={{ width: '416px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { title: '인사이드 아웃 2', category: '영화', genre: '애니메이션', rating: 4.5, src: '/images/showcase/thumbnail-3.png' },
            { title: '버섯 키우기', category: '캐주얼', genre: '전략', rating: 3.7, src: '/images/showcase/thumbnail-1.png' },
            { title: '미스터리 앱', category: '앱', genre: '유틸리티', rating: 1.2 },
          ].map(({ title, category, genre, rating, src }) => (
            <AppList key={title} title={title} category={category} genre={genre} rating={rating} thumbnailSrc={src} />
          ))}
        </div>
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/AppList',
  component: AppListShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof AppListShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
