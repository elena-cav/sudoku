# Sudoku

Sudoku is a number-placement puzzle where the objective is to fill a 9x9 grid with digits such that each column, each row and each 3x3 sub-grid contain all digits from 1 to 9 exactly once. The challenge this week is to write code capable of validating whether a given Sudoku solution is valid or not.
Scoring:

- five: Points are awarded for an algorithm capable of validating these sample games.
- three: Further points are awarded for solving the challenge in a unique choice of language among other participants
- two: Further points are awarded for outputting a description of where an error in a game lies (for example Row 2, or Sub-grid 1,2 etc).

Example:
For this sample Sudoku:
[
[1, 5, 2, 4, 8, 9, 3, 7, 6],
[7, 3, 9, 2, 5, 6, 8, 4, 1],
[4, 6, 8, 3, 7, 1, 2, 9, 5],
[3, 8, 7, 1, 2, 4, 6, 5, 9],
[5, 9, 1, 7, 6, 3, 4, 2, 8],
[2, 4, 6, 8, 9, 5, 7, 1, 3],
[9, 1, 4, 6, 3, 7, 5, 8, 2],
[6, 2, 5, 9, 4, 8, 1, 3, 7],
[8, 7, 3, 5, 1, 2, 9, 6, 4]
]
The expected output is true
Submission:
When you have a solution, submit a link to your source code repo using the /submit command. If you encounter an error with either command, try again in 10 seconds. Please include any code and data required in order to test your solution easily. Submission closes noon 1st September

## To test

- Run `npm install`
- Run `npm run test` or `npm run test:watch`
