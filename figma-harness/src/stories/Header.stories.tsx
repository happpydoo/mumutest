import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/ui/Header';
import { ShowcaseSection } from './helpers/ShowcaseSection';

const ACTIONS = [
  { name: 'search' as const, src: '/images/showcase/icon-search.svg', alt: '검색' },
  { name: 'info' as const, src: '/images/showcase/icon-info.svg', alt: '고객센터' },
  { name: 'user' as const, src: '/images/showcase/icon-user.svg', alt: '프로필' },
];

function HeaderShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>Header</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        반응형 헤더. mobile은 로고 + 아이콘, web은 로고 + TabList + 아이콘 구성.
      </p>

      <ShowcaseSection
        title="Mobile Breakpoint"
        description="375px — 로고 + 우측 액션 아이콘"
        code={`<Header\n  breakpoint="mobile"\n  logoText="Logo 영역"\n  actions={[\n    { name: 'search', src: '/images/showcase/icon-search.svg', alt: '검색' },\n    { name: 'info', src: '/images/showcase/icon-info.svg', alt: '고객센터' },\n    { name: 'user', src: '/images/showcase/icon-user.svg', alt: '프로필' },\n  ]}\n/>`}
      >
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
          <Header breakpoint="mobile" logoText="Logo 영역" actions={ACTIONS} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Web Breakpoint"
        description="100% 너비 — 로고 + TabList + 우측 액션 아이콘"
        code={`<Header\n  breakpoint="web"\n  logoText="Logo 영역"\n  tabs={['게임', '앱', '영화/TV', '도서', '키즈']}\n  activeTabIndex={0}\n  actions={actions}\n/>`}
      >
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
          <Header
            breakpoint="web"
            logoText="Logo 영역"
            tabs={['게임', '앱', '영화/TV', '도서', '키즈']}
            activeTabIndex={0}
            actions={ACTIONS}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Web — 두 번째 탭 활성"
        code={`<Header breakpoint="web" tabs={['게임', '앱', '영화/TV']} activeTabIndex={1} actions={actions} />`}
      >
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
          <Header
            breakpoint="web"
            logoText="Logo 영역"
            tabs={['게임', '앱', '영화/TV']}
            activeTabIndex={1}
            actions={ACTIONS}
          />
        </div>
      </ShowcaseSection>
    </div>
  );
}

const meta = {
  title: 'Showcase/Header',
  component: HeaderShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof HeaderShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
