"use strict";

function createObject(properties) {
  const object = {};
  const keys = properties.filter((el, i) => i % 2 === 0);
  const values = properties.filter((el, i) => i % 2 !== 0);
  for (const [i, el] of keys.entries()) {
    object[`${el}`] = Number(values[i]);
  }
  console.log(object);
}
createObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

// 1.	Print an Array with a Given Delimiter
// The input comes as an array of strings. The last element of the array is the delimiter.
// The output is the same array, printed on the console, each element separated from the others by the given delimiter.

function delimeter(arrayOfStrings) {
  const del = arrayOfStrings.splice(-1, 1);

  console.log(arrayOfStrings.join(`${del}`));
}
delimeter(["How about no?", "I", "will", "not", "do", "it!", "_"]);

// 02. Print every N-th Element from an Array
// The input comes as an array of strings. The last element is N - the step.
// The output is every element on the N-th step starting from the first one. If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. The elements must be printed each on a new line.

function num2(arrayOfStrings) {
  const step = arrayOfStrings.splice(-1, 1);
  for (let i = 0; i < arrayOfStrings.length; i += Number(step)) {
    console.log(arrayOfStrings[i]);
  }
}
num2(["1", "2", "3", "4", "5", "6"]);

// 03. Add and Remove Elements
// Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be "add" or "remove".
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an "add" command you should add the current number to your array.
// Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// The input comes as an array of strings. Each element holds a command.
// The output is the array itself, with each element printed on a new line. In case of an empty array, just print "Empty".

function num3(command) {
  const arr = [];
  let num = 0;
  command.forEach((act) => {
    if (act === "add") {
      num++;
      arr.push(num);
    } else if (act === "remove") {
      num++;
      arr.splice(-1, 1);
    }
  });
  arr.length > 0 ? console.log(`${arr.join("\n")}`) : console.log("Empty");
}

num3(["remove", "remove", "remove"]);

// 04. Rotate Array
// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.
// The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
// The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.

function num4(elements) {
  const times = Number(elements.splice(-1, 1));
  for (let i = 0; i < times; i++) {
    let firstEl = elements.pop();
    elements.unshift(firstEl);
  }
  console.log(`${elements.join(" ")}`);
}
num4(["1", "2", "3", "4", "2"]);

// 5.	Extract Increasing Subsequence from Array
// Write a function that extracts only those numbers that form a non-decreasing subsequence. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number.
// The input comes as an array of numbers.
//The output is the processed array after the filtration, which should be a non-decreasing subsequence. Each element should be printed on a new line.

function num5(sequence) {
  const result = [];
  for (const [i, el] of sequence.entries()) {
    if (i === 0) {
      result.push(el);
    } else if (result.some((val) => el < val)) {
      continue;
    } else {
      result.push(el);
    }
  }
  console.log(`${result.join("\n")}`);
}
num5([1, 3, 8, 4, 10, 12, 3, 2, 24]);

// 6.	Sort an Array by 2 Criteria
// Write a function that orders a given array of strings, by length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the ordered array of strings.

function num6(arr) {
  const obj = {};
  const result = [];
  arr.forEach((el) => el.toLowerCase());
  arr.sort().sort((a, b) => a.length - b.length);
  console.log(`${arr.join("\n")}`);
}
num6(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

// 7.	Magic Matrices
// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.

function num7(mat) {
  let col = Array(mat.length).fill(0);
  let row = Array(mat.length).fill(0);
  for (let n = 0; n < mat.length; n++) {
    for (const [i, el] of mat.entries()) {
      row[n] = el.reduce((acc, el) => acc + el, 0);
    }
    for (const [i, el] of mat.entries()) {
      for (const [i1, el1] of el.entries()) {
        if (n === i1) col[n] += el1;
      }
    }
  }
  const setOfCol = new Set(col);
  const setOfRow = new Set(row);
  setOfCol.size === 1 && setOfRow.size === 1 && setOfRow[0] === setOfCol[0]
    ? console.log(true)
    : console.log(false);
}
num7([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);

// 8.	*Tic-Tac-Toe
// Make a tic-tac-toe console application.
// You will receive an array of arrays. As you know there are two players in this game, so the first element of the input will be first player's chosen coordinates, the second element will be the second player's turn coordinates and so on.
// The initial state of the dashboard is
// [[false, false, false],
// [false, false, false],
// [false, false, false]]
// The first player's mark is X and the second player's mark is O.
// Input
// One parameter:
// •	An array - the moves in row that players make
// Output
// •	There are two players - X and O
// •	If  a player tries to make his turn on already taken place, he should make his turn again and you should print the following message:
// "This place is already taken. Please choose another!"
// •	If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
// "The game ended! Nobody wins :("
// •	If someone wins you should print the following message and  the current state of the dashboard:
// "Player {X/0} wins"
// Note: When printing the state of the dashboard the elements of each row the dashboard should be separated by "\t" and each row should be on new line.

// Constraints
// The elements in the input array will always be enough to end the game.

function num8(sequence) {
  const board = [
    ["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"],
  ];
  // let board = [...Array(3).fill(Array(3).fill(false))];
  const marks = ["X", "O"];
  let playerNum;
  const checkFreeSpace = function () {
    let flag;
    for (const el of board) {
      flag = el.includes("false");
    }
    return flag;
  };
  const printBoard = function () {
    for (const el of board) {
      console.log(`${el.join("\t")}`);
    }
  };

  const check = function () {
    let colum = [];
    let diag = [];
    let diafReverse = [];
    for (let row = 0; row < board.length; row++) {
      let rowEq = board[row].includes("false") || new Set(board[row]).size;
      if (rowEq === 1) return true;

      for (let col = 0; col < board[row].length; col++) {
        colum.push(board[col][row]);
        if (colum.length === 3 && !colum.includes("false")) {
          if (new Set(colum).size === 1) {
            return true;
          } else colum = [];
        }
        if (col === board[row].length - 1) colum = [];

        if (col === row) {
          diag.push(board[col][row]);
          if (diag.length === 3 && !diag.includes("false")) {
            if (new Set(diag).size === 1) {
              return true;
            } else diag = [];
          }
        }
      }

      for (let row = 1; row <= board.length; row++) {
        for (let col = 1; col <= board.length; col++) {
          if (col === row) {
            diafReverse.push(board[board.length - col][board.length - row]);
            if (diafReverse.length === 3 && !diafReverse.includes("false")) {
              if (new Set(diafReverse).size === 1) {
                return true;
              } else diafReverse = [];
            }
          }
        }
      }
    }
  };
  const mark = function () {
    const temp = marks.shift();
    marks.push(temp);
    return marks;
  };
  const move = (turn) => sequence[turn].split(" ").map((val) => Number(val));
  for (const [i, el] of sequence.entries()) {
    let [x, y] = move(i);
    if (board[x][y] !== "X" && board[x][y] !== "O") {
      if (i % 2 === 0) {
        //player 1
        board[x][y] = marks[0];
        playerNum = marks[0];
      } else {
        //player 2
        board[x][y] = marks[1];
        playerNum = marks[1];
      }
    } else {
      mark();
      console.log("This place is already taken. Please choose another!");
    }
    if (check()) {
      console.log(`Player ${playerNum} wins!`);
      printBoard();
      break;
    } else if (!checkFreeSpace()) {
      console.log("The game ended! Nobody wins :(");
      printBoard();
      break;
    }
  }
}
num8(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
