class CountSquares:
    def __init__(self):
        self.pts = defaultdict(lambda: defaultdict(int))

    def add(self, point: List[int]) -> None:
        self.pts[point[0]][point[1]] += 1

    def count(self, point: List[int]) -> int:
        ans = 0
        x, y = point
        col = self.pts.get(x, {})
        for p, cnt in col.items():
            if p == y:
                continue
            side = p - y;
            x1, x2 = x + side, x - side
            for xx in (x1, x2):
                cnts = self.pts.get(xx, {})
                ans += cnt * cnts.get(y, 0) * cnts.get(p, 0)
        return ans