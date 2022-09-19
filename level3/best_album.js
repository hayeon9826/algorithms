function solution(genres, plays) {
  var dic = {};
  genres.forEach((t, i) => {
    // dictionary에 장르별로 재생 횟수 저장 (공통)      
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  var dupDic = {};
  return genres
     // 각 장르별로 장르명, 재생 수, 인덱스 설정
    .map((t, i) => ({ genre: t, count: plays[i], index: i }))
    .sort((a, b) => {
      // 노래 수록 기준으로 sorting
      // 1. 속한 노래 만이 재생된 장르 먼저 수록
      // 2. 장르 내에서 많이 재생된 노래 수록
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    // 그리고 중복되는 장르가 있으면     
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    // 같은 장르에 같은 재생횟수는 index로 정렬
    .map((t) => t.index);
}