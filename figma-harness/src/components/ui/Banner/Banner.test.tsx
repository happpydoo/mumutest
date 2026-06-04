import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Banner } from './Banner';

describe('Banner', () => {
  it('제목을 렌더링한다', () => {
    render(<Banner title="배너 제목" subtitle="부제목" />);
    expect(screen.getByText('배너 제목')).toBeInTheDocument();
  });

  it('부제목을 렌더링한다', () => {
    render(<Banner title="제목" subtitle="피그마 피디아 실습 클래스" />);
    expect(screen.getByText('피그마 피디아 실습 클래스')).toBeInTheDocument();
  });

  it('children이 있으면 렌더링한다', () => {
    render(
      <Banner title="제목" subtitle="부제목">
        <span data-testid="custom-content">커스텀 콘텐츠</span>
      </Banner>
    );
    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  });

  it('children이 없으면 빈 영역을 렌더링하지 않는다', () => {
    render(<Banner title="제목" subtitle="부제목" />);
    expect(screen.queryByTestId('custom-content')).not.toBeInTheDocument();
  });
});
