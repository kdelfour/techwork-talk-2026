import extractorMdc from '@unocss/extractor-mdc'
import { variantMatcher } from '@unocss/preset-mini/utils'
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  safelist: [
    '!opacity-0',
    'prose',
    'grid-rows-[1fr_max-content]',
    'grid-cols-[1fr_max-content]',
    'text-tron-cyan',
    'text-tron-orange',
    'text-tron-magenta',
    'text-tron-violet',
    'border-tron-cyan',
    'border-tron-orange',
    'border-tron-magenta',
    'border-tron-violet',
    'bg-tron-cyan/10',
    'bg-tron-orange/10',
    'bg-tron-magenta/10',
    'bg-tron-violet/10',
  ],
  theme: {
    colors: {
      tron: {
        cyan: '#00d9ff',
        orange: '#ff8c00',
        magenta: '#ff2e9a',
        violet: '#a855f7',
        grid: '#0e3a4a',
      },
    },
    fontFamily: {
      sans: '"Space Grotesk", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"JetBrains Mono", Menlo, Consolas, "Liberation Mono", monospace',
      orbitron: '"Orbitron", system-ui, sans-serif',
    },
  },
  shortcuts: {
    'bg-main': 'bg-black',
    'bg-active': 'bg-white/5',
    'border-main': 'border-white/10',
    'text-main': 'text-[#e5e7eb]',
    'text-soft': 'text-[#9ca3af]',
    'text-primary': 'color-$slidev-theme-primary',
    'bg-primary': 'bg-$slidev-theme-primary',
    'border-primary': 'border-$slidev-theme-primary',
    'abs-tl': 'absolute top-0 left-0',
    'abs-tr': 'absolute top-0 right-0',
    'abs-b': 'absolute bottom-0 left-0 right-0',
    'abs-bl': 'absolute bottom-0 left-0',
    'abs-br': 'absolute bottom-0 right-0',

    'z-drawing': 'z-10',
    'z-camera': 'z-15',
    'z-dragging': 'z-18',
    'z-menu': 'z-20',
    'z-label': 'z-40',
    'z-nav': 'z-50',
    'z-context-menu': 'z-60',
    'z-modal': 'z-70',
    'z-focus-indicator': 'z-200',

    'slidev-glass-effect': 'shadow-xl backdrop-blur-8 border border-white/10 bg-black/75',

    // TRON-specific
    'tron-title': 'font-orbitron font-black tracking-wider',
    'tron-glow-cyan': 'shadow-[0_0_30px_rgba(0,217,255,0.4)]',
    'tron-glow-orange': 'shadow-[0_0_30px_rgba(255,140,0,0.4)]',
    'tron-glow-magenta': 'shadow-[0_0_30px_rgba(255,46,154,0.4)]',
    'tron-glow-violet': 'shadow-[0_0_30px_rgba(168,85,247,0.4)]',
  },
  variants: [
    variantMatcher('forward', input => ({ prefix: `.slidev-nav-go-forward ${input.prefix}` })),
    variantMatcher('backward', input => ({ prefix: `.slidev-nav-go-backward ${input.prefix}` })),
  ],
  presets: [
    presetWind3(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      collections: {
        pixelarticons: () => import('@iconify-json/pixelarticons/icons.json').then(i => i.default),
        tabler: () => import('@iconify-json/tabler/icons.json').then(i => i.default),
      },
      scale: 1,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives({ enforce: 'pre' }),
    transformerVariantGroup(),
  ],
  extractors: [
    extractorMdc(),
  ],
})
