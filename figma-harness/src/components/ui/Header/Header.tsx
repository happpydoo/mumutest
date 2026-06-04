import { TabList } from '../TabList';
import { Icon } from '../Icon';

export interface HeaderAction {
  name: 'search' | 'info' | 'user';
  src: string;
  alt?: string;
  onClick?: () => void;
}

export interface HeaderProps {
  logoText?: string;
  breakpoint?: 'mobile' | 'web';
  tabs?: string[];
  activeTabIndex?: number;
  onTabChange?: (index: number) => void;
  actions?: HeaderAction[];
  className?: string;
}

const DEFAULT_ACTIONS: HeaderAction[] = [
  { name: 'search', src: '', alt: '검색' },
  { name: 'info', src: '', alt: '고객센터' },
  { name: 'user', src: '', alt: '프로필' },
];

const DEFAULT_TABS = ['게임', '앱', '영화/TV', '도서', '키즈'];

export function Header({
  logoText = 'Logo 영역',
  breakpoint = 'mobile',
  tabs = DEFAULT_TABS,
  activeTabIndex = 0,
  onTabChange,
  actions = DEFAULT_ACTIONS,
  className,
}: HeaderProps) {
  const isMobile = breakpoint === 'mobile';

  return (
    <header
      className={className}
      style={{
        backgroundColor: 'var(--text-secondary-1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '28px',
        paddingTop: 'var(--spacing-sm)',
        paddingBottom: 'var(--spacing-sm)',
        width: isMobile ? '375px' : '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0 : '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '15.6px',
              fontWeight: 700,
              lineHeight: '28px',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            {logoText}
          </span>
        </div>

        {!isMobile && tabs.length > 0 && (
          <TabList
            tabs={tabs}
            defaultActiveIndex={activeTabIndex}
            onChange={onTabChange}
          />
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        {actions.map((action) =>
          action.src ? (
            <Icon
              key={action.name}
              name={action.name}
              src={action.src}
              alt={action.alt}
            />
          ) : null
        )}
      </div>
    </header>
  );
}
