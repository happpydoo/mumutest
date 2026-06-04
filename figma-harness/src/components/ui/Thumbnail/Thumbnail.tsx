export type ThumbnailVariant = '1' | '2' | '3';

export interface ThumbnailProps {
  variant?: ThumbnailVariant;
  src?: string;
  alt?: string;
  className?: string;
}

const BG_COLOR: Record<ThumbnailVariant, string> = {
  '1': 'var(--background-secondary)',
  '2': 'var(--accent-primary)',
  '3': 'var(--accent-primary-1)',
};

export function Thumbnail({ variant = '1', src, alt = '', className }: ThumbnailProps) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '64px',
        height: '64px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        backgroundColor: BG_COLOR[variant],
        boxShadow: '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
        flexShrink: 0,
      }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
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
  );
}
