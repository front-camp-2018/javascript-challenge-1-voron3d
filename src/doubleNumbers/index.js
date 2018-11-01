/* eslint-disable-next-line */
export const doubleNum = num => {
  const sNum = String(num);
  const sNum1 = sNum.slice(0, sNum.length / 2);
  const sNum2 = sNum.slice(sNum.length / 2);
  return (sNum1 === sNum2) ? num : num * 2;
};
