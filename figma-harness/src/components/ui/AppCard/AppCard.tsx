import { AppList } from '../AppList';

export interface AppCardProps {
  title: string;
  category: string;
  genre: string;
  rating: number;
  imageSrc?: string;
  imageAlt?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  className?: string;
}

export function AppCard({
  title,
  category,
  genre,
  rating,
  imageSrc,
  imageAlt = '',
  thumbnailSrc,
  thumbnailAlt,
  className,
}: AppCardProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-xl)',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '234px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          backgroundColor: 'var(--background-secondary)',
          flexShrink: 0,
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>

      <AppList
        title={title}
        category={category}
        genre={genre}
        rating={rating}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt={thumbnailAlt}
        className="w-full"
      />
    </div>
  );
}
