/**
 * @param Num
 * 매개변수를 넣은 px 값을 자동으로 vw로 변환
 * @returns
 */

export const calcPx = (Num: number): string => {
  let Counts = Number((Num / (320 / 100)).toFixed(1));
  return `${Counts}vw`;
};
