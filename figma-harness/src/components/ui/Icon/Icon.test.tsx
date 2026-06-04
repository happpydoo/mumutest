import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Icon } from './Icon';

const src = 'https://example.com/icon.png';

describe('Icon', () => {
  it('이미지를 렌더링한다', () => {
    render(<Icon name="search" src={src} alt="검색" />);
    expect(screen.getByAltText('검색')).toBeInTheDocument();
  });

  it('디바이스 아이콘은 16px 컨테이너를 갖는다', () => {
    const { container } = render(<Icon name="01" src={src} alt="디바이스" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.width).toBe('16px');
    expect(wrapper.style.height).toBe('16px');
  });

  it('search 아이콘은 48px 컨테이너를 갖는다', () => {
    const { container } = render(<Icon name="search" src={src} alt="검색" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.width).toBe('48px');
    expect(wrapper.style.height).toBe('48px');
  });

  it('star 아이콘은 12px 컨테이너를 갖는다', () => {
    const { container } = render(<Icon name="star" src={src} alt="별점" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.width).toBe('12px');
    expect(wrapper.style.height).toBe('12px');
  });

  it('alt가 없으면 빈 문자열로 렌더링된다', () => {
    render(<Icon name="user" src={src} />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
  });
});
