export interface BannerProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}

export function Banner({ title, subtitle, children, className }: BannerProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'var(--neutral-variant-1)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-2xl)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--spacing-sm)',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: '1 0 0',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-lg)',
          color: 'var(--text-secondary-1)',
        }}
      >
        <p
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: 1.4,
            margin: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '36px',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>

      {children && (
        <div style={{ flexShrink: 0 }}>
          {children}
        </div>
      )}
    </div>
  );
}
