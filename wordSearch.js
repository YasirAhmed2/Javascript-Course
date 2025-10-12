/*
Given an m x n grid of characters board and a string word, return true 
if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, 
where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.
*/


var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    // DFS function to search word starting from (r, c)
    function dfs(r, c, index) {
        // Base case: if we’ve found all letters
        if (index === word.length) return true;

        // Check boundaries and character match
        if (
            r < 0 || c < 0 || 
            r >= rows || c >= cols || 
            board[r][c] !== word[index]
        ) return false;

        // Temporarily mark cell as visited
        const temp = board[r][c];
        board[r][c] = '#';

        // Explore all 4 directions
        const found = 
            dfs(r + 1, c, index + 1) || 
            dfs(r - 1, c, index + 1) || 
            dfs(r, c + 1, index + 1) || 
            dfs(r, c - 1, index + 1);

        // Backtrack (restore cell)
        board[r][c] = temp;

        return found;
    }

    // Try to start from every cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
};
// Example usage:
const board = [
  ['A','B','C','E'],    
    ['S','F','C','S'],
    ['A','D','E','E']
];
console.log(exist(board, "ABCCED"));