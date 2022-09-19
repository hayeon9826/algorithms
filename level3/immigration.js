function solution(n, times) {
  times.sort((a, b) => a - b);
  
  let max = times[times.length-1] * n
  let min = 0
  let mid =  Math.floor((max+min)/2)
  
  while(min <= max){
      let count = 0
      for(let time of times){
        count += Math.floor(mid/time)
      }
      if(count >= n){
          max = mid - 1;
      }else{
          min = mid + 1;
      }
      mid =  Math.floor((max+min)/2)
  }
  return min;
}