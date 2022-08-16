
// https://www.hackerrank.com/challenges/grading/problem
export class Grading {
    public execute(grades: number[]): number[] {

       return grades.map((grade) => {
           // if grade is less than 38, return grade
           if (grade < 38) return grade;
           // if grade is divisible by 5 and less than 3, return grade
           else if (grade % 5 < 3) return grade;
           // round up to the next multiple of 5
           else return grade + (5 - grade % 5);
        });

    }
}
