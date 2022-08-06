import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { CakeCandles } from "./CakeCandles";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Cake Candles Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const cakeCandles = new CakeCandles();

        // Act
        const result = cakeCandles.execute([1, 5, 5, 4, 5]);

        // Assert
        expect(result).equals(3);
    });

    it("Test case 1", async () => {
        // Arrange
        const cakeCandles = new CakeCandles();

        // Act
        const result = cakeCandles.execute([1, 3, 5, 4, 5]);

        // Assert
        expect(result).equals(2);
    });

    it("Test case 2", async () => {
        // Arrange
        const cakeCandles = new CakeCandles();

        // Act
        const result = cakeCandles.execute([1, 3, 4, 4, 3, 4]);

        // Assert
        expect(result).equals(3);
    });

});
