function solution(brown, yellow) {
  let answer;
  let samples = []
  
  for(let i = brown + yellow; i > 0; i --){
      if(i^2 >= brown + yellow && (brown + yellow) % i == 0){
          if((brown + yellow) / i > i){
              break;
          }
          samples.push([i, (brown + yellow) / i])
      }
  }
  
  for(let i = 0; i < samples.length; i ++ ){
      if(samples[i][0] + samples[i][1] == (brown + 4)/ 2 ){
          answer = samples[i]
      }
  }

  return answer;
}