export type ImageTileType = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08';

export interface ImageTileProps {
  type?: ImageTileType;
  src: string;
  alt?: string;
  className?: string;
}

export function ImageTile({ type = '01', src, alt = '', className }: ImageTileProps) {
  return (
    <div
      className={className}
      data-image-type={type}
      style={{
        position: 'relative',
        width: '143px',
        aspectRatio: '1 / 1',
        backgroundColor: 'var(--border-default)',
        overflow: 'hidden',
        boxShadow: '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '86%',
          height: '86%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
