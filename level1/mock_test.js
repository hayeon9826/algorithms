function solution(answers) {
  let answer = [0, 0, 0]
  const a = [1, 2, 3, 4, 5]
  const b = [2, 1, 2, 3, 2, 4, 2, 5]
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  
  for(let i = 0; i < answers.length; i ++){
      if(answers[i] === a[i % 5]){
          answer[0] += 1
      }
      if(answers[i] === b[i % 8]){
          answer[1] += 1
      }
      if(answers[i] === c[i % 10]){
          answer[2] += 1
      }
  }
  
  
  return getMaxIndex(answer);
}

function getMaxIndex(values){
  let answer = []
  let max = 0
  
  for(let i = 0; i < values.length; i ++){
      if(values[i] === max){
          answer.push(i + 1)
      }else if(values[i] > max){
          max = values[i]
          answer = [i+1]
      }
  }
  
  return answer
}