export type IconName =
  | '01' | '02' | '03' | '04' | '05' | '06' | '07'
  | 'search' | 'info' | 'star' | 'user';

export interface IconProps {
  name: IconName;
  src: string;
  alt?: string;
  className?: string;
}

const SIZE: Record<IconName, { container: number; image: number }> = {
  '01': { container: 16, image: 16 },
  '02': { container: 16, image: 16 },
  '03': { container: 16, image: 16 },
  '04': { container: 16, image: 16 },
  '05': { container: 16, image: 16 },
  '06': { container: 16, image: 16 },
  '07': { container: 16, image: 16 },
  star:   { container: 12, image: 12 },
  search: { container: 48, image: 24 },
  info:   { container: 48, image: 24 },
  user:   { container: 48, image: 29 },
};

export function Icon({ name, src, alt = '', className }: IconProps) {
  const { container, image } = SIZE[name];
  const hasButtonPadding = name === 'search' || name === 'info';

  return (
    <div
      className={className}
      style={{
        width: `${container}px`,
        height: `${container}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...(hasButtonPadding && { padding: 'var(--spacing-md)' }),
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: `${image}px`,
          height: `${image}px`,
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}
