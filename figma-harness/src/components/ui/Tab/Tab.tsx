export interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tab({ label, active = false, onClick, className }: TabProps) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '64px',
        paddingTop: 'var(--spacing-xl)',
        paddingLeft: 'var(--spacing-lg)',
        paddingRight: 'var(--spacing-lg)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '18px',
          color: active ? 'var(--text-secondary-3)' : 'var(--text-secondary)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      {active && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '24px',
            height: '3px',
            backgroundColor: 'var(--text-secondary-3)',
            borderRadius: '3px 3px 0 0',
          }}
        />
      )}
    </button>
  );
}
