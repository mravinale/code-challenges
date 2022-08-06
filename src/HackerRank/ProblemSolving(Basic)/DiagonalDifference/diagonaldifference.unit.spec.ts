import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { DiagonalDifference } from "./DiagonalDifference";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Diagonal difference Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const diagonalDifference = new DiagonalDifference();

        // Act
        const result = diagonalDifference.execute([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);

        // Assert
        expect(result).equals(15);
    });

    it("Test case 1", async () => {
        // Arrange
        const diagonalDifference = new DiagonalDifference();

        // Act
        const result = diagonalDifference.execute([[1, 2, 3], [44, 55, 66], [1, 8, -2]]);

        // Assert
        expect(result).equals(5);
    });

    it("Test case 2", async () => {
        // Arrange
        const diagonalDifference = new DiagonalDifference();

        // Act
        const result = diagonalDifference.execute([[22, 22, 22], [4, 5, 6], [10, 8, -12]]);

        // Assert
        expect(result).equals(22);
    });

});
