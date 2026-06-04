export interface FilterChipProps {
  label: string;
  active?: boolean;
  iconSrc?: string;
  onClick?: () => void;
  className?: string;
}

export function FilterChip({ label, active = false, iconSrc, onClick, className }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        paddingTop: '7px',
        paddingBottom: '7px',
        paddingLeft: 'var(--spacing-lg)',
        paddingRight: 'var(--spacing-lg)',
        borderRadius: 'var(--radius-full)',
        border: active ? 'none' : `1px solid var(--border-default-1)`,
        backgroundColor: active ? 'var(--background-primary)' : 'var(--text-secondary-1)',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          style={{ width: '16px', height: '16px', objectFit: 'contain' }}
        />
      )}
      <span
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '18px',
          color: active ? 'var(--text-secondary-2)' : 'var(--text-secondary)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </button>
  );
}
