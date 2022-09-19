def solution(begin, target, words):
    answer = 0
    temp = [];
    current = [];
    
    if target not in words:
        return 0
    else:
        answer += 1
        temp.append(begin)
        while temp:
            for i in temp:
                for word in words:
                    if sum(x!=y for x,y in zip(word, i)) == 1:
                        words.remove(word)
                        current.append(word)
                        if sum(x!=y for x,y in zip(word, target)) == 0:
                            return answer
                        elif sum(x!=y for x,y in zip(word, target)) == 1:
                            print(word)
                            answer += 1
                            return answer
                            
            temp = []
            temp = current
            current = []
            answer += 1
            
    return answer

# def target_word(temp, words, current, target, answer):