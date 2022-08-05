import { SalesByMatch } from "./app/SalesByMatch";
import { CompareTheTriplets } from "./app/CompareTheTriplets";

const user = new SalesByMatch();
const result = user.countPairs( 9, [3, 20, 3, 10, 3, 30, 50, 10, 20]);
console.log(result);

const triplets = new CompareTheTriplets();

const a = [5, 6, 7];
const b = [3, 6, 10];

const results = triplets.execute(a, b);
console.log(results);
