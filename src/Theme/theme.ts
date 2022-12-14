import { calcPx } from '@/Hooks/CalcPx';

const fontSize = {
  font_11: `
    font-Size : 11px;
    font-weight : 400;,
  `,
  font_12: `
  font-Size : 12px;
`,
};

const Color = {
  green_gradient: 'linear-gradient(90deg, #00A542 0%, #81E600 100%)',
  black: '#222222',
  gray: '#868686',
  l_gray: '#979797',
  W_gray: '#CECECE',
};

const border = {
  border_5px: `
  border-radious : '5px';
  `,
};

const device = {
  mobile: `@media screen and (max-width:768px)`,
};

export const theme = {
  fontSize,
  Color,
  border,
  device,
};

export type Theme = typeof theme;
