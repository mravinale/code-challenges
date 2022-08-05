
// https://www.hackerrank.com/challenges/compare-the-triplets
export class CompareTheTriplets {

   // compare 2 triplets
    public execute(a: number[], b: number[]): number[] {
        let aliceScore = 0;
        let bobScore = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                aliceScore++;
            } else if (a[i] < b[i]) {
                bobScore++;
            }
        }
        return [aliceScore, bobScore];
    }
}
