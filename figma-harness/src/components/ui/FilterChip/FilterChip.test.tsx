import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { FilterChip } from './FilterChip';

describe('FilterChip', () => {
  it('레이블을 렌더링한다', () => {
    render(<FilterChip label="Windows" />);
    expect(screen.getByText('Windows')).toBeInTheDocument();
  });

  it('iconSrc가 있으면 아이콘 이미지를 렌더링한다', () => {
    render(<FilterChip label="Windows" iconSrc="https://example.com/icon.png" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('iconSrc가 없으면 이미지를 렌더링하지 않는다', () => {
    render(<FilterChip label="Windows" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('클릭 시 onClick을 호출한다', async () => {
    const handleClick = vi.fn();
    render(<FilterChip label="Windows" onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('active 상태에서 background-primary 색상을 사용한다', () => {
    const { container } = render(<FilterChip label="Windows" active />);
    const btn = container.querySelector('button') as HTMLElement;
    expect(btn.style.backgroundColor).toBe('var(--background-primary)');
  });

  it('inactive 상태에서 보더가 있다', () => {
    const { container } = render(<FilterChip label="Windows" active={false} />);
    const btn = container.querySelector('button') as HTMLElement;
    expect(btn.style.border).toContain('var(--border-default-1)');
  });
});
