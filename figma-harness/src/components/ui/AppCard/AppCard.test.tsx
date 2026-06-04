import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AppCard } from './AppCard';

const defaultProps = {
  title: '버섯 키우기',
  category: '캐주얼',
  genre: '전략',
  rating: 3.7,
};

describe('AppCard', () => {
  it('앱 정보를 렌더링한다', () => {
    render(<AppCard {...defaultProps} />);
    expect(screen.getByText('버섯 키우기')).toBeInTheDocument();
    expect(screen.getByText('캐주얼')).toBeInTheDocument();
    expect(screen.getByText('3.7')).toBeInTheDocument();
  });

  it('imageSrc가 있으면 커버 이미지를 렌더링한다', () => {
    render(<AppCard {...defaultProps} imageSrc="https://example.com/cover.png" imageAlt="커버" />);
    expect(screen.getByAltText('커버')).toBeInTheDocument();
  });

  it('imageSrc가 없으면 커버 이미지를 렌더링하지 않는다', () => {
    render(<AppCard {...defaultProps} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('thumbnailSrc가 있으면 썸네일 이미지를 렌더링한다', () => {
    render(<AppCard {...defaultProps} thumbnailSrc="https://example.com/thumb.png" thumbnailAlt="썸네일" />);
    expect(screen.getByAltText('썸네일')).toBeInTheDocument();
  });
});
