import { ReactNode } from 'react';
import { useGlitch } from '@/hooks/useGlitch';
import type { GlitchConfig } from '@/hooks/useGlitch';

interface HologramProps {
  children: ReactNode;
  className?: string;
  config?: GlitchConfig;
}

export function Hologram({ children, className = '', config }: HologramProps) {
  const ref = useGlitch<HTMLDivElement>({
    minInterval: 3000,
    maxInterval: 8000,
    minSeverity: 0.15,
    maxSeverity: 0.6,
    minDuration: 80,
    maxDuration: 250,
    trigger: 'auto',
    ...config,
  });

  return (
    <div ref={ref} className={`hologram ${className}`}>
      <div
        className="hologram__inner"
        style={{
          transform: `
            rotateX(calc(var(--glitch-offset-y, 0px) * 0.8))
            rotateY(calc(var(--glitch-offset-x, 0px) * 0.4))
            translateZ(calc(var(--glitch-severity, 0) * 4px))
          `,
          opacity: `calc(0.85 + (1 - var(--glitch-severity, 0)) * 0.15)`,
          boxShadow: `
            0 0 calc(var(--glitch-severity, 0) * 16px) rgba(94, 246, 255, calc(var(--glitch-severity, 0) * 0.25)),
            inset 0 0 calc(var(--glitch-severity, 0) * 24px) rgba(94, 246, 255, calc(var(--glitch-severity, 0) * 0.06))
          `,
        }}
      >
        <div
          className="hologram__scanline"
          style={{
            top: `calc(var(--glitch-clip-top, 50%))`,
            opacity: 'var(--glitch-active, 0)',
          }}
        />
        {children}
      </div>
    </div>
  );
}
