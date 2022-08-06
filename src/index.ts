import { SalesByMatch } from "./HackerRank/ProblemSolving(Basic)/SalesByMatch/SalesByMatch";
import { CompareTheTriplets } from "./HackerRank/ProblemSolving(Basic)/CompareTheTriplets/CompareTheTriplets";
import { AVeryBigSum } from "./HackerRank/ProblemSolving(Basic)/AVeryBigSum/AVeryBigSum";
import { DiagonalDifference } from "./HackerRank/ProblemSolving(Basic)/DiagonalDifference/DiagonalDifference";
import { PlusMinus } from "./HackerRank/ProblemSolving(Basic)/PlusMinus/PlusMinus";

const user = new SalesByMatch();
const result = user.countPairs( 9, [3, 20, 3, 10, 3, 30, 50, 10, 20]);
console.log(result);

const triplets = new CompareTheTriplets();
const a = [5, 6, 7];
const b = [3, 6, 10];
const result2 = triplets.execute(a, b);
console.log(result2);

const aVeryBigSum = new AVeryBigSum();
const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const result3 = aVeryBigSum.execute(arr);
console.log(result3);

const diagonaldifference = new DiagonalDifference();
const result4 = diagonaldifference.execute( [[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
console.log(result4);

const plusMinus = new PlusMinus();
const result5 = plusMinus.execute([-4, 3, -9, 0, 4, 1]);
console.log(result5);
