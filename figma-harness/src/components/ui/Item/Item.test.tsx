import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Item } from './Item';

describe('Item', () => {
  it('이미지를 렌더링한다', () => {
    render(<Item src="https://example.com/img.png" alt="캐릭터" />);
    expect(screen.getByAltText('캐릭터')).toBeInTheDocument();
  });

  it('name prop을 data 속성으로 전달한다', () => {
    const { container } = render(<Item name="02" src="https://example.com/img.png" />);
    const el = container.firstChild as HTMLElement;
    expect(el.dataset.itemName).toBe('02');
  });

  it('기본 name은 01이다', () => {
    const { container } = render(<Item src="https://example.com/img.png" />);
    const el = container.firstChild as HTMLElement;
    expect(el.dataset.itemName).toBe('01');
  });

  it('alt 기본값은 빈 문자열이다', () => {
    render(<Item src="https://example.com/img.png" />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
  });
});
