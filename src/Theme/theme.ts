import { calcPx } from '@/Hooks/CalcPx';

const fontSize = {
  font_11: `
    font-Size : 11px;
  `,
  font_12: `
  font-Size : 12px;
`,
};

const Color = {
  green_gradient: 'linear-gradient(90deg, #00A542 0%, #81E600 100%)',
  black_: '#222222',
  gray: '#868686',
  l_gray: '#979797',
  W_gray: '#CECECE',
};

const border = {
  border_5px: `
  border-radious : '5px';
  `,
};

export const theme = {
  fontSize,
  Color,
  border,
};

export type Theme = typeof theme;
