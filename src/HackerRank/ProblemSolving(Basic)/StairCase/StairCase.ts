
// https://www.hackerrank.com/challenges/staircase
export class StairCase {
    public execute(length: number): string {
        let result = '', space = ' ', hash = '#';

        for (let i = 0; i < length; i++) {
            result += space.repeat(length - i - 1) + hash.repeat(i + 1) + '\n';
        }

        return result;
    }

}
