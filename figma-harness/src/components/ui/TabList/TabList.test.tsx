import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { TabList } from './TabList';

const tabs = ['게임', '앱', '영화/TV'];

describe('TabList', () => {
  it('모든 탭 레이블을 렌더링한다', () => {
    render(<TabList tabs={tabs} />);
    tabs.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('defaultActiveIndex의 탭이 active 상태다', () => {
    render(<TabList tabs={tabs} defaultActiveIndex={1} />);
    const tabElements = screen.getAllByRole('tab');
    expect(tabElements[1]).toHaveAttribute('aria-selected', 'true');
    expect(tabElements[0]).toHaveAttribute('aria-selected', 'false');
  });

  it('탭 클릭 시 active 상태가 변경된다', async () => {
    render(<TabList tabs={tabs} />);
    const tabElements = screen.getAllByRole('tab');
    await userEvent.click(tabElements[2]);
    expect(tabElements[2]).toHaveAttribute('aria-selected', 'true');
  });

  it('탭 클릭 시 onChange를 호출한다', async () => {
    const handleChange = vi.fn();
    render(<TabList tabs={tabs} onChange={handleChange} />);
    await userEvent.click(screen.getByText('앱'));
    expect(handleChange).toHaveBeenCalledWith(1);
  });
});
