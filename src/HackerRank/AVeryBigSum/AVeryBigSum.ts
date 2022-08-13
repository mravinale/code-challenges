
// https://www.hackerrank.com/challenges/a-very-big-sum
export class AVeryBigSum {
    public execute(arr: number[]): number {
        return arr.reduce((a, b) => a + b, 0);
    }
}
