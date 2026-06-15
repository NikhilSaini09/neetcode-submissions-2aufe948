class Solution:
    def partition(self, s: str) -> List[List[str]]:
        sol = []
        
        def pal_part(ind: int, pp: list[str]):
            if ind == len(s):
                sol.append(pp[:])
                return
            
            for i in range(ind, len(s)):
                sub_str = s[ind : i + 1]
                
                if sub_str == sub_str[::-1]:
                    pp.append(sub_str)
                    pal_part(i + 1, pp)
                    pp.pop()

        pal_part(0, [])
        return sol