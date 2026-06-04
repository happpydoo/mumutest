import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Thumbnail } from './Thumbnail';

describe('Thumbnail', () => {
  it('src가 있으면 이미지를 렌더링한다', () => {
    render(<Thumbnail src="https://example.com/img.png" alt="썸네일" />);
    expect(screen.getByAltText('썸네일')).toBeInTheDocument();
  });

  it('src가 없으면 이미지를 렌더링하지 않는다', () => {
    render(<Thumbnail />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('variant 1은 background-secondary 배경색을 사용한다', () => {
    const { container } = render(<Thumbnail variant="1" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.backgroundColor).toBe('var(--background-secondary)');
  });

  it('variant 2는 accent-primary 배경색을 사용한다', () => {
    const { container } = render(<Thumbnail variant="2" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.backgroundColor).toBe('var(--accent-primary)');
  });

  it('variant 3은 accent-primary-1 배경색을 사용한다', () => {
    const { container } = render(<Thumbnail variant="3" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.backgroundColor).toBe('var(--accent-primary-1)');
  });
});
