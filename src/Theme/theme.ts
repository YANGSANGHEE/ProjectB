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
  red: '#FF0000',
  orange: '#FFB629',
  yellow: '#FFE300',
  green: '#39D729',
};
const border = {
  border_5px: `
  border-radius : 5px;
  `,
};
const flexSet = {
  flexRowCenter: `
    display:flex;
    align-items:center;
    justify-content: center;
  `,
  flexColumnCenter: `
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
  `,
};
const device = {
  mobile_wide: `@media (min-width:560px) and (max-width:899px)`,
  mobile: `@media (min-width:320px) and (max-width:768px)`,
};
export const theme = {
  fontSize,
  Color,
  border,
  device,
  flexSet,
};

export type Theme = typeof theme;
