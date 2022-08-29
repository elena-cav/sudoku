export default (game) => {
  const hasDuplicates = (g) => g.filter((l, i) => g.lastIndexOf(l) !== i);
  const reversed = [];
  let columnOrRow = 0;
  let position = 0;
  let count = 0;
  const columns = [];
  while (count < 9) {
    game.forEach((row) => reversed.push(row[count]));
    count++;
  }
  while (reversed.length > 0) columns.push(reversed.splice(0, 9));
  const checkIsSudoku = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const duplicates = hasDuplicates(arr[i]);
      if (duplicates.length > 0) {
        position = arr[i].lastIndexOf(duplicates[0]) + 1;
        columnOrRow = i + 1;
        return false;
      }
    }
    return true;
  };
  if (!checkIsSudoku(game)) {
    return `Sorry, this is not a valid Sudoku. Your error is on row ${columnOrRow}, column ${position}`;
  } else if (!checkIsSudoku(columns)) {
    return `Sorry, this is not a valid Sudoku. Your error is on column ${columnOrRow}, row ${position}`;
  } else return "Congratulations. This is a valid Sudoku!";
};
