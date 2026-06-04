function StarIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
        fill="var(--text-secondary)"
      />
    </svg>
  );
}

export interface AppListProps {
  title: string;
  category: string;
  genre: string;
  rating: number;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  className?: string;
}

export function AppList({
  title,
  category,
  genre,
  rating,
  thumbnailSrc,
  thumbnailAlt = '',
  className,
}: AppListProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          flexShrink: 0,
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          backgroundColor: 'var(--background-secondary)',
          boxShadow: '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
        }}
      >
        {thumbnailSrc && (
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>

      <div
        style={{
          flex: '1 0 0',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            color: 'var(--text-primary)',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-sm)',
            alignItems: 'center',
            height: '20px',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            {category}
          </span>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '12px',
              color: 'var(--text-secondary)',
            }}
          >
            •
          </span>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            {genre}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            height: '20px',
          }}
        >
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--text-secondary)',
            }}
          >
            {rating.toFixed(1)}
          </span>
          <StarIcon />
        </div>
      </div>
    </div>
  );
}
