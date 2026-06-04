import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ImageTile } from './ImageTile';

describe('ImageTile', () => {
  it('이미지를 렌더링한다', () => {
    render(<ImageTile src="https://example.com/img.png" alt="앱 이미지" />);
    expect(screen.getByAltText('앱 이미지')).toBeInTheDocument();
  });

  it('type prop을 data 속성으로 전달한다', () => {
    const { container } = render(<ImageTile type="05" src="https://example.com/img.png" />);
    const el = container.firstChild as HTMLElement;
    expect(el.dataset.imageType).toBe('05');
  });

  it('기본 type은 01이다', () => {
    const { container } = render(<ImageTile src="https://example.com/img.png" />);
    const el = container.firstChild as HTMLElement;
    expect(el.dataset.imageType).toBe('01');
  });

  it('배경색으로 border-default 토큰을 사용한다', () => {
    const { container } = render(<ImageTile src="https://example.com/img.png" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.backgroundColor).toBe('var(--border-default)');
  });
});
