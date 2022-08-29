import sudoku from "./index";

describe("sudoku", () => {
  const trueSudoku = [
    [1, 5, 2, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 2, 5, 6, 8, 4, 1],
    [4, 6, 8, 3, 7, 1, 2, 9, 5],
    [3, 8, 7, 1, 2, 4, 6, 5, 9],
    [5, 9, 1, 7, 6, 3, 4, 2, 8],
    [2, 4, 6, 8, 9, 5, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 5, 9, 4, 8, 1, 3, 7],
    [8, 7, 3, 5, 1, 2, 9, 6, 4],
  ];
  const falseRowSudoku = [
    [1, 5, 2, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 2, 4, 6, 8, 4, 1],
    [4, 6, 8, 3, 7, 1, 2, 9, 5],
    [3, 8, 7, 1, 2, 4, 6, 5, 9],
    [5, 9, 1, 7, 6, 3, 4, 2, 8],
    [2, 4, 6, 8, 9, 5, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 5, 9, 4, 8, 1, 3, 7],
    [8, 7, 3, 5, 1, 2, 9, 6, 4],
  ];
  const falseColumnSudoku = [
    [1, 5, 2, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 2, 5, 6, 8, 4, 1],
    [4, 6, 8, 3, 7, 1, 2, 9, 5],
    [5, 8, 7, 1, 2, 4, 6, 3, 9],
    [5, 9, 1, 7, 6, 3, 4, 2, 8],
    [2, 4, 6, 8, 9, 5, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 5, 9, 4, 8, 1, 3, 7],
    [8, 7, 3, 5, 1, 2, 9, 6, 4],
  ];
  it("should return a boolean", () => {
    expect(typeof sudoku(trueSudoku)).toBe("string");
  });
  it("should return true if the game is a valid sudoku", () => {
    expect(sudoku(trueSudoku)).toBe("Congratulations. This is a valid Sudoku!");
  });
  it("should return false if the game is a valid sudoku", () => {
    expect(sudoku(falseRowSudoku)).toBe(
      "Sorry, this is not a valid Sudoku. Your error is on row 2, column 8"
    );
  });
  it("should return false if the game is a valid sudoku", () => {
    expect(sudoku(falseColumnSudoku)).toBe(
      "Sorry, this is not a valid Sudoku. Your error is on column 1, row 5"
    );
  });
});
