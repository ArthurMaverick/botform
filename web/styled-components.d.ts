import {theme} from './src/styles/global/theme'

type Theme = typeof theme

declare module 'styled-components'{
  export interface DefaultTheme extends Theme {}
}