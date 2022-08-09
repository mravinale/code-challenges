
export class BaseBallGame {

    public execute(ops: string[]): number {
        let opsResult: number[] = [];

        for (let i = 0; i < ops.length; i++) {
            if (ops[i] === "C") {
                opsResult.pop();
            } else if (ops[i] === "D") {
                opsResult.push(opsResult[opsResult.length - 1] * 2);
            } else if (ops[i] === "+") {
                opsResult.push(opsResult[opsResult.length - 1] + opsResult[opsResult.length - 2]);
            } else {
                opsResult.push(Number.parseInt(ops[i], 0));
            }
        }
        let result = opsResult.reduce((a, b) => a + b, 0);

        return result;
    }

}
