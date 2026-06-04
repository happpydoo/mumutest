import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AppList } from './AppList';

const defaultProps = {
  title: '버섯 키우기',
  category: '캐주얼',
  genre: '전략',
  rating: 3.7,
};

describe('AppList', () => {
  it('제목을 렌더링한다', () => {
    render(<AppList {...defaultProps} />);
    expect(screen.getByText('버섯 키우기')).toBeInTheDocument();
  });

  it('카테고리와 장르를 렌더링한다', () => {
    render(<AppList {...defaultProps} />);
    expect(screen.getByText('캐주얼')).toBeInTheDocument();
    expect(screen.getByText('전략')).toBeInTheDocument();
  });

  it('평점을 소수점 1자리로 표시한다', () => {
    render(<AppList {...defaultProps} rating={4.0} />);
    expect(screen.getByText('4.0')).toBeInTheDocument();
  });

  it('thumbnailSrc가 있으면 이미지를 렌더링한다', () => {
    render(<AppList {...defaultProps} thumbnailSrc="https://example.com/img.png" thumbnailAlt="썸네일" />);
    expect(screen.getByAltText('썸네일')).toBeInTheDocument();
  });

  it('thumbnailSrc가 없으면 이미지를 렌더링하지 않는다', () => {
    render(<AppList {...defaultProps} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
