function solution(numbers) {
  let answer = '';
  answer = numbers.map( c => String(c) ).sort((a , b) => (b + a) - (a + b)).join('')

  return answer[0] === '0' ? '0' : answer;
}