import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Background } from './Background';

describe('Background', () => {
  it('제목을 렌더링한다', () => {
    render(<Background title="꿈의 마을" rating={3.7} />);
    expect(screen.getByText('꿈의 마을')).toBeInTheDocument();
  });

  it('평점을 소수점 1자리로 표시한다', () => {
    render(<Background title="앱" rating={4.0} />);
    expect(screen.getByText('4.0')).toBeInTheDocument();
  });

  it('imageSrc가 있으면 이미지를 렌더링한다', () => {
    render(<Background title="앱" rating={3.7} imageSrc="https://example.com/img.png" imageAlt="아이콘" />);
    expect(screen.getByAltText('아이콘')).toBeInTheDocument();
  });

  it('imageSrc가 없으면 이미지를 렌더링하지 않는다', () => {
    render(<Background title="앱" rating={3.7} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
