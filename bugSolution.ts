function combine(arr1: number[], arr2: number[]): number[] {
  //Using Type Guards to check if the arrays are actually of type numbers
  function isNumberArray(arr: any[]): arr is number[] {
    return arr.every(item => typeof item === 'number');
  }

  if (!isNumberArray(arr1) || !isNumberArray(arr2)) {
    throw new Error('Both arrays must contain only numbers.');
  }
  return arr1.concat(arr2);
}
// alternatively, using type assertion
function combine2(arr1: any[], arr2: any[]): number[] {
  return (arr1 as number[]).concat(arr2 as number[]);
} 