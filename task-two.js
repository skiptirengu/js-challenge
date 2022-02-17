function solution(array) {
  if (!(array instanceof Array)) throw new Error('invalid data type');

  return array.map(x => Math.pow(x, 2));
}

console.log(solution([1, 2, 3, 5, 6, 8, 9]));