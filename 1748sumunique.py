class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        checkDict = {}
        total = 0
        for num in nums:
            if num not in checkDict:
                checkDict[num] = True
                total += num
            elif num in checkDict and checkDict[num] == True:
                checkDict[num] = False
                total -= num
            else:
                pass

        return total 