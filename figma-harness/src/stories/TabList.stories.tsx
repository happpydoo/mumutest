import type { Meta, StoryObj } from '@storybook/react';
import { TabList } from '../components/ui/TabList';
import { ShowcaseSection } from './helpers/ShowcaseSection';

const DEFAULT_TABS = ['게임', '앱', '영화/TV', '도서', '키즈'];

function TabListShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>TabList</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        탭 목록 컨테이너. 내부 상태로 active 인덱스를 관리합니다.
      </p>

      <ShowcaseSection
        title="Default (첫 번째 탭 활성)"
        code={`<TabList\n  tabs={['게임', '앱', '영화/TV', '도서', '키즈']}\n  defaultActiveIndex={0}\n/>`}
      >
        <div style={{ background: '#f9fafb', padding: '8px', borderRadius: '6px', overflowX: 'auto' }}>
          <TabList tabs={DEFAULT_TABS} defaultActiveIndex={0} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="두 번째 탭 활성"
        code={`<TabList\n  tabs={['게임', '앱', '영화/TV', '도서', '키즈']}\n  defaultActiveIndex={1}\n/>`}
      >
        <div style={{ background: '#f9fafb', padding: '8px', borderRadius: '6px', overflowX: 'auto' }}>
          <TabList tabs={DEFAULT_TABS} defaultActiveIndex={1} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="onChange 콜백"
        description="탭 클릭 시 인덱스를 반환합니다."
        code={`<TabList\n  tabs={['게임', '앱', '영화/TV']}\n  onChange={(index) => console.log('selected:', index)}\n/>`}
      >
        <div style={{ background: '#f9fafb', padding: '8px', borderRadius: '6px' }}>
          <TabList
            tabs={['게임', '앱', '영화/TV']}
            onChange={(i) => console.log('Tab selected:', i)}
          />
        </div>
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/TabList',
  component: TabListShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TabListShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
