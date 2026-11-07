import React from 'react';
import type { Language } from '../types';

export interface ComingSoonRibbonProps {
  /** The announcement text repeated inside the ribbon. Defaults to "COMING SOON" */
  text?: string;
  /** Separator symbol between repeated announcements. Defaults to "·" */
  separator?: string;
  /** Marquee direction: 'left' (right-to-left) or 'right' (left-to-right). Defaults to 'left' */
  direction?: 'left' | 'right';
  /** Duration in seconds for one full loop. Lower is faster. Defaults to 24 */
  speed?: number;
  /** Diagonal rotation angle in degrees. Defaults to -5 */
  rotation?: number;
  /** Height of the ribbon. Defaults to 'h-11 sm:h-13 md:h-14' */
  height?: string;
  /** Background color (warm golden yellow / amber tape). Defaults to #E5A93C */
  backgroundColor?: string;
  /** Typography color (dark chocolate-brown / near-black). Defaults to #24150D */
  textColor?: string;
  /** Optional crisp edge border color */
  borderColor?: string;
  /** Positioning mode: 'absolute' | 'relative' | 'fixed'. Defaults to 'absolute' */
  position?: 'absolute' | 'relative' | 'fixed';
  /** Vertical top position (e.g. '30%', '420px'). Defaults to '50%' */
  top?: string | number;
  /** Vertical bottom position if top is not used */
  bottom?: string | number;
  /** z-index stacking layer. Defaults to 25 (above cards and content) */
  zIndex?: number;
  /** Number of repetitions per half-track to ensure coverage. Defaults to 12 */
  repeatCount?: number;
  /** Optional Language context for localized default text */
  language?: Language;
  /** Additional CSS classes for ribbon wrapper */
  className?: string;
}

export interface DualComingSoonRibbonProps extends ComingSoonRibbonProps {
  /** Secondary ribbon configuration */
  secondary?: Partial<ComingSoonRibbonProps>;
}

/**
 * Premium Animated Diagonal Coming Soon Ribbon
 * Physical graphic design tape aesthetic with continuous infinite horizontal marquee.
 * Strictly adheres to Quílate design tokens and 60fps GPU acceleration.
 */
export const ComingSoonRibbon: React.FC<ComingSoonRibbonProps> = ({
  text,
  separator = '·',
  direction = 'left',
  speed = 24,
  rotation = -5,
  height = 'h-11 sm:h-13 md:h-14',
  backgroundColor = '#E5A93C', // Warm golden yellow / amber brand tape
  textColor = '#24150D',       // Dark chocolate-brown typography
  borderColor = 'rgba(36, 21, 13, 0.25)', // Crisp physical tape edge
  position = 'absolute',
  top = '50%',
  bottom,
  zIndex = 25,
  repeatCount = 12,
  language,
  className = '',
}) => {
  // Determine text based on language if not explicitly provided
  const displayText =
    text ||
    (language === 'pt' ? 'COMING SOON · EM BREVE' : 'COMING SOON');

  const items = Array.from({ length: repeatCount }, () => displayText);

  return (
    <div
      className={`pointer-events-none select-none flex items-center overflow-hidden shadow-sm ${height} ${className}`}
      style={{
        position,
        top: bottom === undefined ? top : undefined,
        bottom: bottom !== undefined ? bottom : undefined,
        left: '50%',
        width: '180vw',
        minWidth: '2200px',
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transformOrigin: 'center center',
        backgroundColor,
        color: textColor,
        borderTop: borderColor ? `1.5px solid ${borderColor}` : undefined,
        borderBottom: borderColor ? `1.5px solid ${borderColor}` : undefined,
        zIndex,
      }}
      aria-hidden="true"
    >
      <div
        className={`flex whitespace-nowrap will-change-transform w-fit ${
          direction === 'left' ? 'v2-ribbon-track-left' : 'v2-ribbon-track-right'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Track Half A */}
        <div className="flex shrink-0 items-center">
          {items.map((phrase, idx) => (
            <span key={`a-${idx}`} className="inline-flex items-center">
              <span className="font-condensed font-black tracking-[0.24em] text-xs sm:text-sm md:text-base uppercase">
                {phrase}
              </span>
              <span className="mx-3 sm:mx-5 text-xs sm:text-sm opacity-60 font-black">
                {separator}
              </span>
            </span>
          ))}
        </div>

        {/* Track Half B (Exact Clone for Seamless Mathematical Loop) */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {items.map((phrase, idx) => (
            <span key={`b-${idx}`} className="inline-flex items-center">
              <span className="font-condensed font-black tracking-[0.24em] text-xs sm:text-sm md:text-base uppercase">
                {phrase}
              </span>
              <span className="mx-3 sm:mx-5 text-xs sm:text-sm opacity-60 font-black">
                {separator}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Dual Coming Soon Ribbons Composition
 * Renders a primary warm amber ribbon and a secondary complementary ribbon
 * (e.g. crossing or offset diagonal) creating an authentic physical packaging/editorial tape look.
 */
export const DualComingSoonRibbons: React.FC<DualComingSoonRibbonProps> = ({
  secondary,
  ...primaryProps
}) => {
  return (
    <>
      {/* Primary Ribbon (Golden Amber) */}
      <ComingSoonRibbon {...primaryProps} />

      {/* Secondary Complementary Ribbon (e.g. Deep Carob or Offset Amber) */}
      <ComingSoonRibbon
        text={secondary?.text || primaryProps.text}
        separator={secondary?.separator || primaryProps.separator}
        direction={secondary?.direction || (primaryProps.direction === 'left' ? 'right' : 'left')}
        speed={secondary?.speed || 28}
        rotation={secondary?.rotation !== undefined ? secondary?.rotation : 3.5}
        height={secondary?.height || 'h-10 sm:h-12 md:h-13'}
        backgroundColor={secondary?.backgroundColor || '#24150D'}
        textColor={secondary?.textColor || '#E5A93C'}
        borderColor={secondary?.borderColor || 'rgba(229, 169, 60, 0.3)'}
        position={secondary?.position || primaryProps.position}
        top={secondary?.top !== undefined ? secondary.top : '54%'}
        bottom={secondary?.bottom}
        zIndex={secondary?.zIndex !== undefined ? secondary.zIndex : 24}
        repeatCount={secondary?.repeatCount || primaryProps.repeatCount}
        language={secondary?.language || primaryProps.language}
        className={secondary?.className || ''}
      />
    </>
  );
};

