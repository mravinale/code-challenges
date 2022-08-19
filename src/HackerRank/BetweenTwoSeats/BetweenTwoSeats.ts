
// https://www.hackerrank.com/challenges/between-two-sets/problem
export class BetweenTwoSeats {

    public execute(a: number[], b: number[]): number[] {

        // create a multiple array for each element in a until the max value of the array b
        let multipleArray = a.map((element) => {
            let result: number[] = [0];
            for (let i = 0; result[i] < Math.max(...b); i++) {
                result.push(element * i);
            }
            return result;
        });

        // get the intersection of the multiple array (clean up)
        let intersection = multipleArray.reduce((x, y) => x.filter(v => y.includes(v)));

        // detect the factors of the intersection in b array
        return intersection.filter((element) => {
            return b.every((element2) => {
                return element2 % element === 0;
            });
        });
    }
}
