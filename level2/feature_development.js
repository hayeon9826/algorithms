function solution(progresses, speeds) {
  let answer = [];
  let deploy_days = []
  
  for(let i = 0; i < progresses.length; i ++ ){
      deploy_days.push(Math.ceil((100 - progresses[i]) / speeds[i]))
  }
  
  let count = 1;
  let index = 0;
  
  for(let j = 0 ; j < deploy_days.length; j ++ ){
      if(deploy_days[index] >= deploy_days[j+1]){
          count = count + 1
      }else{
          answer.push(count)
          count = 1
          index = j + 1
      }
      
  }
  return answer;
}