class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets: string[][]): string[] {
        const graph = {};
    
        for (const [src, dst] of tickets) {
            if (!graph[src]) graph[src] = [];
            graph[src].push(dst);
        }
        
        for (const key in graph) {
            graph[key].sort().reverse();
        }
        
        const itinerary = [];
        
        function dfs(airport: string): void {
            while (graph[airport] && graph[airport].length > 0) {
                dfs(graph[airport].pop());
            }
            itinerary.push(airport);
        }
        
        dfs("JFK");
        
        return itinerary.reverse();
    }
}
