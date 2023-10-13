import { createStitches, defaultThemeMap } from '@stitches/react'

import * as defaultTokens from '@burndev-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: { ...defaultTokens },
})
