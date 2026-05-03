import bisect

class TimeMap:
    def __init__(self):
        self.dict = collections.defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.dict[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.dict:
            return ""

        vt = self.dict[key];

        idx = bisect.bisect_right(vt, (timestamp, chr(127)))

        if idx == 0:
            return ""
        
        return vt[idx - 1][1]