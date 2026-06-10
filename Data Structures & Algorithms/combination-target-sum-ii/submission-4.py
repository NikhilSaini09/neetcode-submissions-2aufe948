class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        result = []
        
        def generate_collection(index, remaining, comb):
            if remaining == 0:
                result.append(comb[:])
                return

            for i in range(index, len(candidates)):
                if i > index and candidates[i] == candidates[i - 1]:
                    continue

                if candidates[i] > remaining:
                    break

                comb.append(candidates[i])
                generate_collection(i + 1, remaining - candidates[i], comb)
                comb.pop()

        generate_collection(0, target, [])
        return result