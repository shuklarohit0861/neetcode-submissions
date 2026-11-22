class Solution {
  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */
  exist(board, word) {
    if (word.length === 0) return true;
    if (board.length === 0 || board[0].length === 0) return false;

    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, index) {
      if (index === word.length) return true;

      if (
        r < 0 || c < 0 ||
        r >= rows || c >= cols ||
        board[r][c] !== word[index]
      ) {
        return false;
      }

      const char = board[r][c];
      board[r][c] = "#"; // Mark this cell as used in the current path.

      const found =
        dfs(r + 1, c, index + 1) ||
        dfs(r - 1, c, index + 1) ||
        dfs(r, c + 1, index + 1) ||
        dfs(r, c - 1, index + 1);

      board[r][c] = char; // Restore the board for other paths.
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