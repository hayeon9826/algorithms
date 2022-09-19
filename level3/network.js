function solution(n, computers) {
  let answer = 0,
    visited = []

  for(let i=0; i<computers.length; i++){
      if(!visited[i]){
          answer += 1
          dfs(i, computers, visited)
      }
  }
  
  return answer
}

function dfs(start, computers, visited){
    visited[start] = 1
    for(let i=0; i<computers.length; i++){
        if(!visited[i] && computers[start][i]){
            dfs(i, computers, visited)
        }
    }
    
}