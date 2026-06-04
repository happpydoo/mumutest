import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '../components/ui/Tab';
import { ShowcaseSection } from './helpers/ShowcaseSection';

function TabShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>Tab</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        카테고리 전환에 사용하는 탭 아이템. active 상태에서 하단 인디케이터가 표시됩니다.
      </p>

      <ShowcaseSection
        title="Active (state=On)"
        description="선택된 탭 — 녹색 텍스트 + 하단 인디케이터"
        code={`<Tab label="게임" active />`}
      >
        <div style={{ background: '#f9fafb', padding: '8px', borderRadius: '6px', display: 'inline-block' }}>
          <Tab label="게임" active />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Inactive (state=Off)"
        description="미선택 탭 — 회색 텍스트, 인디케이터 없음"
        code={`<Tab label="앱" />`}
      >
        <div style={{ background: '#f9fafb', padding: '8px', borderRadius: '6px', display: 'inline-block' }}>
          <Tab label="앱" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="All States Side by Side"
        description="active / inactive 나란히 비교"
        code={`<Tab label="게임" active />\n<Tab label="앱" />`}
        horizontal
      >
        <div style={{ background: '#f9fafb', padding: '8px', borderRadius: '6px', display: 'flex' }}>
          <Tab label="게임" active />
          <Tab label="앱" />
          <Tab label="영화/TV" />
          <Tab label="도서" />
          <Tab label="키즈" />
        </div>
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/Tab',
  component: TabShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TabShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
