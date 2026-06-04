import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Header } from './Header';

const mockActions = [
  { name: 'search' as const, src: 'https://example.com/search.png', alt: '검색' },
  { name: 'info' as const, src: 'https://example.com/info.png', alt: '고객센터' },
  { name: 'user' as const, src: 'https://example.com/user.png', alt: '프로필' },
];

describe('Header', () => {
  it('로고 텍스트를 렌더링한다', () => {
    render(<Header logoText="Play Store" actions={mockActions} />);
    expect(screen.getByText('Play Store')).toBeInTheDocument();
  });

  it('mobile 모드에서 탭을 렌더링하지 않는다', () => {
    render(<Header breakpoint="mobile" tabs={['게임', '앱']} actions={mockActions} />);
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
  });

  it('web 모드에서 탭 목록을 렌더링한다', () => {
    render(<Header breakpoint="web" tabs={['게임', '앱', '영화/TV']} actions={mockActions} />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByText('게임')).toBeInTheDocument();
  });

  it('web 모드에서 activeTabIndex 탭이 active 상태다', () => {
    render(<Header breakpoint="web" tabs={['게임', '앱']} activeTabIndex={1} actions={mockActions} />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('액션 아이콘을 렌더링한다', () => {
    render(<Header actions={mockActions} />);
    expect(screen.getByAltText('검색')).toBeInTheDocument();
    expect(screen.getByAltText('고객센터')).toBeInTheDocument();
  });

  it('onTabChange가 탭 전환 시 호출된다', async () => {
    const handleChange = vi.fn();
    const { getByText } = render(
      <Header breakpoint="web" tabs={['게임', '앱']} onTabChange={handleChange} actions={mockActions} />
    );
    const { userEvent } = await import('@testing-library/user-event');
    const user = userEvent.setup();
    await user.click(getByText('앱'));
    expect(handleChange).toHaveBeenCalledWith(1);
  });
});
