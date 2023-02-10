
class Solution:
    def isPathCrossing(self, path: str) -> bool:
        current = (0,0)
        been = set()
        been.add(current)
        print(been)
        moves = {
            'N' : [1,0],
            'S' : [-1,0],
            'E' : [0, 1],
            'W' : [0,-1]
        }
        
        for step in path:
            [x, y] = moves[step]
            current = (current[0] + x, current[1] + y)
            if current not in been:
                been.add(current)
            else:
                return True
        
        return False