
// https://www.hackerrank.com/challenges/mini-max-sum
export class MiniMaxSum {
    public execute(arr: number[]): number[] {

        // order array ascending
        arr.sort((a, b) => a - b);

        // get sum of all elements except the first one
        let max = arr.slice(1).reduce((x, y) => x + y);

        // get sum of all elements except the last one
        let min = arr.slice(0, arr.length - 1).reduce((x, y) => x + y);

        // console.log(`${min} ${max}`);
        return [min, max];
    }
}
