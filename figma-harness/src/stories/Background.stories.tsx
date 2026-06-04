import type { Meta, StoryObj } from '@storybook/react';
import { Background } from '../components/ui/Background';
import { ShowcaseSection } from './helpers/ShowcaseSection';

function BackgroundShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>Background</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        143×197 앱 카드 타일. 상단 이미지(143×143) + 하단 제목/평점.
      </p>

      <ShowcaseSection
        title="이미지 포함"
        description="앱 아이콘 이미지 + 제목 + 평점"
        code={`<Background\n  title="꿈의 마을 (Township)"\n  rating={3.7}\n  imageSrc="/images/showcase/app-icon.png"\n  imageAlt="꿈의 마을 아이콘"\n/>`}
      >
        <Background
          title="꿈의 마을 (Township)"
          rating={3.7}
          imageSrc="/images/showcase/app-icon.png"
          imageAlt="꿈의 마을 아이콘"
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="이미지 없음"
        description="imageSrc 미전달 — 배경색만 표시"
        code={`<Background title="앱 이름" rating={4.2} />`}
      >
        <Background title="앱 이름" rating={4.2} />
      </ShowcaseSection>

      <ShowcaseSection
        title="긴 제목 (말줄임)"
        code={`<Background\n  title="이름이 매우 긴 앱 제목이 잘려야 합니다"\n  rating={4.8}\n  imageSrc="/images/showcase/app-icon.png"\n/>`}
      >
        <Background
          title="이름이 매우 긴 앱 제목이 잘려야 합니다"
          rating={4.8}
          imageSrc="/images/showcase/app-icon.png"
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="여러 개 나란히"
        code={`<div style={{ display: 'flex', gap: '12px' }}>\n  <Background title="앱 A" rating={4.1} imageSrc="..." />\n  <Background title="앱 B" rating={3.5} imageSrc="..." />\n  <Background title="앱 C" rating={4.9} imageSrc="..." />\n</div>`}
        horizontal
      >
        {[
          { title: '꿈의 마을', rating: 3.7 },
          { title: '게임 앱 B', rating: 4.2 },
          { title: '앱 C', rating: 4.9 },
        ].map(({ title, rating }) => (
          <Background key={title} title={title} rating={rating} imageSrc="/images/showcase/app-icon.png" />
        ))}
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/Background',
  component: BackgroundShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof BackgroundShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
