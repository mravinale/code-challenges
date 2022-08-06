
// https://www.hackerrank.com/challenges/birthday-cake-candles
export class CakeCandles {
    public execute(candles: number[]): number {

        // find the max number from the array
        let max = Math.max(...candles);

        // count the number of times the max number appears in the array
        let count = candles.filter(x => x === max).length;

        return count;
    }
}
