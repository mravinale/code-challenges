
// https://www.hackerrank.com/challenges/plus-minus
export class PlusMinus {
    public execute(arr: number[]): number[] {
        let positive = 0, negative = 0, zero = 0; // initialize counters

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) positive++;
            else if (arr[i] < 0) negative++;
            else zero++;
        }

        return [positive / arr.length, negative / arr.length, zero / arr.length];
    }
}
