class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        if (rows === 0 || cols === 0 || word.length === 0) {
            return false;
        }

        function dfs(r, c, index) {
            if (word.length === index) {
                return true;
            }

            if (r < 0 || c < 0 || r >= rows || c >= cols || word[index] !== board[r][c]) {
                return false;
            }

            const char = board[r][c];
            board[r][c] = "#";

            const found =
                dfs(r + 1, c, index + 1) ||
                dfs(r - 1, c, index + 1) ||
                dfs(r, c - 1, index + 1) ||
                dfs(r, c + 1, index + 1);

            board[r][c] = char;
            return found;
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }
        return false;
    }
}
