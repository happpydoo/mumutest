import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Tab } from './Tab';

describe('Tab', () => {
  it('레이블을 렌더링한다', () => {
    render(<Tab label="게임" />);
    expect(screen.getByText('게임')).toBeInTheDocument();
  });

  it('active 상태에서 인디케이터를 표시한다', () => {
    const { container } = render(<Tab label="게임" active />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('inactive 상태에서 인디케이터가 없다', () => {
    const { container } = render(<Tab label="게임" active={false} />);
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeInTheDocument();
  });

  it('클릭 시 onClick을 호출한다', async () => {
    const handleClick = vi.fn();
    render(<Tab label="게임" onClick={handleClick} />);
    await userEvent.click(screen.getByRole('tab'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
