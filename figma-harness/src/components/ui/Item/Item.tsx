export type ItemName = '01' | '02' | '03' | '04';

export interface ItemProps {
  name?: ItemName;
  src: string;
  alt?: string;
  className?: string;
}

export function Item({ name = '01', src, alt = '', className }: ItemProps) {
  return (
    <div
      className={className}
      data-item-name={name}
      style={{
        position: 'relative',
        width: '85px',
        height: '85px',
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
