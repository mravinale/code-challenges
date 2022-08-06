import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { MiniMaxSum } from "./MiniMaxSum";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Mini Max Sum Tests", () => {

    it("Test case0", async () => {
        // Arrange
        const miniMaxSum = new MiniMaxSum();

        // Act
        const result = miniMaxSum.execute([1, 2, 3, 4, 5]);

        // Assert
        expect(result[0]).equals(10);
        expect(result[1]).equals(14);
    });

    it("Test case1", async () => {
        // Arrange
        const miniMaxSum = new MiniMaxSum();

        // Act
        const result = miniMaxSum.execute([2, 2, 3, 4, 8]);

        // Assert
        expect(result[0]).equals(11);
        expect(result[1]).equals(17);
    });

    it("Test case2", async () => {
        // Arrange
        const miniMaxSum = new MiniMaxSum();

        // Act
        const result = miniMaxSum.execute([0, 2, 3, 4, 6]);

        // Assert
        expect(result[0]).equals(9);
        expect(result[1]).equals(15);
    });
});
