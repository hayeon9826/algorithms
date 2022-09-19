function solution(s) {
  let answer = '';
  let arr = s.split(" ").sort(function (a, b) {  return a - b;  });
  answer = arr[0].toString() + " " + arr[arr.length - 1]
  return answer;
}