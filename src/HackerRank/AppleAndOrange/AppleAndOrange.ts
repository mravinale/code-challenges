
// https://www.hackerrank.com/challenges/apple-and-orange/
export class AppleAndOrange {
    /*
    * Complete the countApplesAndOranges function below.
     *  1. INTEGER s
     *  2. INTEGER t
     *  3. INTEGER a
     *  4. INTEGER b
     *  5. INTEGER_ARRAY apples
     *  6. INTEGER_ARRAY oranges
     */
    public execute(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): number[] {

        // count the number of apples that land on the house
        let appleCount = apples.filter(x => x + a >= s && x + a <= t).length;
        // count the number of oranges that land on the house
        let orangeCount = oranges.filter(x => x + b >= s && x + b <= t).length;

        // return the number of apples and oranges that land on the house
        return [appleCount, orangeCount];
    }
}
