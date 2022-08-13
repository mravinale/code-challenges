import { AVeryBigSum } from "./HackerRank/AVeryBigSum/AVeryBigSum";
import { CakeCandles } from "./HackerRank/CakeCandles/CakeCandles";
import { CompareTheTriplets } from "./HackerRank/CompareTheTriplets/CompareTheTriplets";
import { DiagonalDifference } from "./HackerRank/DiagonalDifference/DiagonalDifference";
import { MiniMaxSum } from "./HackerRank/MiniMaxSum/MiniMaxSum";
import { PlusMinus } from "./HackerRank/PlusMinus/PlusMinus";
import { SalesByMatch } from "./HackerRank/SalesByMatch/SalesByMatch";
import { StairCase } from "./HackerRank/StairCase/StairCase";
import { TimeConversion } from "./HackerRank/TimeConversion/TimeConversion";

const user = new SalesByMatch();
const result = user.countPairs( 9, [3, 20, 3, 10, 3, 30, 50, 10, 20]);
console.log(result);

const triplets = new CompareTheTriplets();
const result2 = triplets.execute([5, 6, 7], [3, 6, 10]);
console.log(result2);

const aVeryBigSum = new AVeryBigSum();
const result3 = aVeryBigSum.execute([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
console.log(result3);

const diagonalDifference = new DiagonalDifference();
const result4 = diagonalDifference.execute( [[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
console.log(result4);

const plusMinus = new PlusMinus();
const result5 = plusMinus.execute([-4, 3, -9, 0, 4, 1]);
console.log(result5);

const miniMaxSum = new MiniMaxSum();
const result6 = miniMaxSum.execute([1, 2, 3, 4, 5]);
console.log(result6);

const cakeCandles = new CakeCandles();
const result7 = cakeCandles.execute([1, 5, 5, 4, 5]);
console.log(result7);

const stairCase = new StairCase();
const result8 = stairCase.execute(3);
console.log(result8);

const timeConversion = new TimeConversion();
const result9 = timeConversion.execute("12:45:54PM");
console.log(result9);
