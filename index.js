export default (game) => {
  const hasDuplicates = (g) => new Set(g).size !== g.length;
  const reversed = [];
  let isSudoku = true;
  let count = 0;
  while (count < 9) {
    game.forEach((row) => reversed.push(row[count]));
    count++;
  }
  const columns = [];
  while (reversed.length > 0) columns.push(reversed.splice(0, 9));
  const checkIsSudoku = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (hasDuplicates(arr[i])) {
        isSudoku = false;
        break;
      }
    }
  };
  checkIsSudoku(columns) && checkIsSudoku(game);
  return isSudoku;
};
