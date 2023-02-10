class Solution:
    def findLucky(self, arr: List[int]) -> int:
        luckyTracker = {}
        for item in arr:
            if item not in luckyTracker:
                luckyTracker[item] = 1
            else:
                luckyTracker[item] = luckyTracker[item] + 1
        bigLucky = -1
        for num in luckyTracker:
            if num == luckyTracker[num] and num > bigLucky:
                bigLucky = num

        return bigLucky