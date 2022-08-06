import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { AVeryBigSum } from "./AVeryBigSum";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("A Very Big Sum Tests", () => {

    it("Test case0", async () => {
        // Arrange
        const aVeryBigSum = new AVeryBigSum();

        // Act
        const result = aVeryBigSum.execute([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);

        // Assert
        expect(result).equals(5000000015);
    });

    it("Test case2", async () => {
        // Arrange
        const aVeryBigSum = new AVeryBigSum();

        // Act
        const result = aVeryBigSum.execute([3000000001, 4000000002, 5000000003, 6000000004, 7000000005]);

        // Assert
        expect(result).equals(25000000015);
    });

    it("Test case3", async () => {
        // Arrange
        const aVeryBigSum = new AVeryBigSum();

        // Act
        const result = aVeryBigSum.execute([2000000001, 2000000002, 2000000003, 2000000004, 2000000005]);

        // Assert
        expect(result).equals(10000000015);
    });

});
