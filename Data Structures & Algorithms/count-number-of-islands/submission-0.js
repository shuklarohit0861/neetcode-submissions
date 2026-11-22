class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let count = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    grid[r][c] = "0";
                    count++;
                    bfs(r, c);
                }
            }
        }

        function bfs(r, c) {
            const queue = [[r, c]];
            let head = 0;
            const dirctions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            while (head < queue.length) {
                const [row, col] = queue[head++];
                for (const [dr, dc] of dirctions) {
                    const nr = row + dr;
                    const nc = col + dc;
                    if (nc >= 0 && nr >= 0 && nc < cols && nr < rows && grid[nr][nc] === "1") {
                        grid[nr][nc] = "0";
                        queue.push([nr, nc]);
                    }
                }
            }
        }
        return count;
    }
}
