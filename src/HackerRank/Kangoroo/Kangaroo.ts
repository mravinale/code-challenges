
// https://www.hackerrank.com/challenges/kangaroo/problem
export class Kangaroo {
    public execute(x1: number, v1: number, x2: number, v2: number): string {
        let result = 'NO';
        if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) {
            result = 'YES';
        }
        return result;

    }
}
