import type { Meta, StoryObj } from '@storybook/react';
import { ImageTile, type ImageTileType } from '../components/ui/ImageTile';
import { ShowcaseSection } from './helpers/ShowcaseSection';

const TILES: { type: ImageTileType; src: string }[] = [
  { type: '01', src: '/images/showcase/image-tile-01.png' },
  { type: '02', src: '/images/showcase/image-tile-02.png' },
  { type: '03', src: '/images/showcase/image-tile-03.png' },
  { type: '04', src: '/images/showcase/image-tile-04.png' },
  { type: '05', src: '/images/showcase/image-tile-05.png' },
  { type: '06', src: '/images/showcase/image-tile-06.png' },
  { type: '07', src: '/images/showcase/image-tile-07.png' },
  { type: '08', src: '/images/showcase/image-tile-08.png' },
];

function ImageTileShowcase() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>ImageTile</h2>
      <p style={{ fontSize: '12px', color: '#5f6368', marginBottom: '24px' }}>
        143×143 앱 이미지 타일. 8가지 variant. 배경색은 <code>--border-default</code>.
      </p>

      <ShowcaseSection
        title="전체 8가지 variant"
        description="type=01 ~ type=08"
        code={`<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>\n  {(['01','02','03','04','05','06','07','08']).map((type) => (\n    <ImageTile key={type} type={type} src={\`/images/showcase/image-tile-\${type}.png\`} alt={type} />\n  ))}\n</div>`}
        horizontal
      >
        {TILES.map(({ type, src }) => (
          <div key={type} style={{ textAlign: 'center' }}>
            <ImageTile type={type} src={src} alt={`type ${type}`} />
            <span style={{ display: 'block', marginTop: '4px', fontSize: '10px', color: '#5f6368' }}>type={type}</span>
          </div>
        ))}
      </ShowcaseSection>

      {TILES.slice(0, 4).map(({ type, src }) => (
        <ShowcaseSection
          key={type}
          title={`type="${type}"`}
          code={`<ImageTile type="${type}" src="/images/showcase/image-tile-${type}.png" alt="${type}" />`}
        >
          <ImageTile type={type} src={src} alt={`type ${type}`} />
        </ShowcaseSection>
      ))}
    </div>
  );
}

const meta = {
  title: 'Showcase/ImageTile',
  component: ImageTileShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ImageTileShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
