function solution(n) {
  let temp = [1, 2]
  
  if(n<=2){
    return n
  }
  
  for(let i = 2; i < n; i++) {
    temp.push(temp[i-1] + temp[i-2]);
  }
  return temp[n-1] % 1000000007;
}