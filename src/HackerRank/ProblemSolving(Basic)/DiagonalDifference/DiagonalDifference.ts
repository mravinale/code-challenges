
// https://www.hackerrank.com/challenges/diagonal-difference
export class DiagonalDifference {

    public execute(matrix: number[][]): number {
        let sumDiag1 = 0, sumDiag2 = 0, length = matrix.length;

        for (let i = 0; i < length; i++) {
            sumDiag1 += matrix[i][i];
            sumDiag2 += matrix[i][length - 1 - i];
        }

        return Math.abs(sumDiag1 - sumDiag2);
    }
}
