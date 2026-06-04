import type { Meta, StoryObj } from '@storybook/react';
import { Thumbnail } from '../components/ui/Thumbnail';
import { ShowcaseSection } from './helpers/ShowcaseSection';

function ThumbnailShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>Thumbnail</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        64×64 앱 아이콘 썸네일. 3가지 배경색 variant. AppList, AppCard 내부에서 사용됩니다.
      </p>

      <ShowcaseSection
        title="Variant 1 — background-secondary"
        description="배경색: var(--background-secondary) = #c1d4de"
        code={`<Thumbnail variant="1" src="/images/showcase/thumbnail-1.png" alt="버섯" />`}
      >
        <Thumbnail variant="1" src="/images/showcase/thumbnail-1.png" alt="버섯" />
      </ShowcaseSection>

      <ShowcaseSection
        title="Variant 2 — accent-primary"
        description="배경색: var(--accent-primary) = #6c9464"
        code={`<Thumbnail variant="2" src="/images/showcase/thumbnail-2.png" alt="토마토" />`}
      >
        <Thumbnail variant="2" src="/images/showcase/thumbnail-2.png" alt="토마토" />
      </ShowcaseSection>

      <ShowcaseSection
        title="Variant 3 — accent-primary-1"
        description="배경색: var(--accent-primary-1) = #68b0c3"
        code={`<Thumbnail variant="3" src="/images/showcase/thumbnail-3.png" alt="토마토 2" />`}
      >
        <Thumbnail variant="3" src="/images/showcase/thumbnail-3.png" alt="토마토 2" />
      </ShowcaseSection>

      <ShowcaseSection
        title="이미지 없음"
        description="src 미전달 — 배경색 박스만 표시"
        code={`<Thumbnail variant="1" />`}
      >
        <Thumbnail variant="1" />
      </ShowcaseSection>

      <ShowcaseSection
        title="3가지 나란히 비교"
        code={`<Thumbnail variant="1" src="/images/showcase/thumbnail-1.png" />\n<Thumbnail variant="2" src="/images/showcase/thumbnail-2.png" />\n<Thumbnail variant="3" src="/images/showcase/thumbnail-3.png" />`}
        horizontal
      >
        <Thumbnail variant="1" src="/images/showcase/thumbnail-1.png" alt="variant 1" />
        <Thumbnail variant="2" src="/images/showcase/thumbnail-2.png" alt="variant 2" />
        <Thumbnail variant="3" src="/images/showcase/thumbnail-3.png" alt="variant 3" />
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/Thumbnail',
  component: ThumbnailShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ThumbnailShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
