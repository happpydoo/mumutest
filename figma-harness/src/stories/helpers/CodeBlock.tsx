import { useState } from 'react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <div style={{ position: 'relative', marginTop: '8px' }}>
      <pre
        style={{
          backgroundColor: '#1a1a2e',
          color: '#e2e8f0',
          padding: '12px 48px 12px 16px',
          borderRadius: '6px',
          fontSize: '12px',
          fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
          overflowX: 'auto',
          margin: 0,
          lineHeight: 1.7,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        <code>{code.trim()}</code>
      </pre>
      <button
        onClick={handleCopy}
        title="코드 복사"
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          padding: '3px 10px',
          backgroundColor: copied ? '#01875f' : '#3a3a5c',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '11px',
          fontFamily: 'sans-serif',
          transition: 'background-color 0.15s',
          whiteSpace: 'nowrap',
        }}
      >
        {copied ? '✓ 복사됨' : '복사'}
      </button>
    </div>
  );
}
