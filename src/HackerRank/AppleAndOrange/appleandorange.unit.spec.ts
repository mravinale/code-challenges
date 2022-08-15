import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { AppleAndOrange } from "./AppleAndOrange";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Apples And oranges Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const appleAndOrange = new AppleAndOrange();

        // Act
        const result = appleAndOrange.execute(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])

        // Assert
        expect(result[0]).equals(1);
        expect(result[1]).equals(2);
    });

    it("Test case 1", async () => {
        // Arrange
        const appleAndOrange = new AppleAndOrange();

        // Act
        const result = appleAndOrange.execute(7, 11, 5, 15, [-2, 2, 1], [5, -6])

        // Assert
        expect(result[0]).equals(1);
        expect(result[1]).equals(1);
    });

});
