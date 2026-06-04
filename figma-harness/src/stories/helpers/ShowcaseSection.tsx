import type { ReactNode } from 'react';
import { CodeBlock } from './CodeBlock';

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  code: string;
  horizontal?: boolean;
}

export function ShowcaseSection({ title, description, children, code, horizontal }: ShowcaseSectionProps) {
  return (
    <div
      style={{
        marginBottom: '24px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
        <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#202124' }}>{title}</p>
        {description && (
          <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#5f6368' }}>{description}</p>
        )}
      </div>
      <div
        style={{
          padding: '20px 16px',
          display: horizontal ? 'flex' : 'block',
          flexWrap: 'wrap',
          gap: horizontal ? '12px' : undefined,
          alignItems: horizontal ? 'center' : undefined,
        }}
      >
        {children}
      </div>
      <div style={{ padding: '0 16px 16px' }}>
        <CodeBlock code={code} />
      </div>
    </div>
  );
}
