const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  let column = letters[0].length;
  let row = letters.length;
  const verticalArr = [];
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (let i = 0; i < column; i++) {
    verticalArr.push([]);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      verticalArr[j][i] = letters[i][j];
    }
  }

  let verticalJoin = verticalArr.map((a) => a.join(""));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
