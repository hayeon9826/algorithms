import heapq
# 더 맵게
def solution(scoville, K):
    # 최소힙으로 변환
    heapq.heapify(scoville)
    # 섞은 횟수
    cnt = 0
    # 가장 작은 스코빌 지수가 K 이상이 될 때까지 실행
    while scoville[0] < K:
        cnt += 1
        # 가장 작은 스코빌 지수의 음식
        first_scovile = heapq.heappop(scoville)
        # 두번째로 작은 스코빌 지수의 음식
        second_scovile = heapq.heappop(scoville)
        # 두 음식 섞기
        mix_scovile = first_scovile + (second_scovile * 2)
        # 섞은 음식 포함시키기
        heapq.heappush(scoville, mix_scovile)
        # 모든 음식을 섞은 후에도 K미만인 경우
        if len(scoville) == 1 and scoville[0] < K:
            return -1
    return cnt