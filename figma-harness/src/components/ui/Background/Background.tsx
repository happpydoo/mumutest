export interface BackgroundProps {
  title: string;
  rating: number;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function Background({ title, rating, imageSrc, imageAlt = '', className }: BackgroundProps) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '143px',
        height: '197px',
        borderRadius: 'var(--radius-md)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '143px',
          height: '143px',
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundColor: 'var(--border-default)',
          boxShadow: '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          top: '156px',
          left: 0,
          right: '1px',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-xs)',
        }}
      >
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            color: 'var(--text-primary)',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '20px', overflow: 'hidden' }}>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            {rating.toFixed(1)}
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
              fill="var(--text-secondary)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
