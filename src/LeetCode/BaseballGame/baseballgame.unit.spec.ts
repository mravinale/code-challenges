import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { BaseBallGame } from "./BaseBallGame";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Challenge 1 Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const baseBallGame = new BaseBallGame();

        // Act
        const result = baseBallGame.execute(["1", "2", "3", "4", "5"]);

        // Assert
        expect(result).equals(15); // 1 + 2 + 3 + 4 + 5
    });

    it("Test case 1", async () => {
        // Arrange
        const baseBallGame = new BaseBallGame();

        // Act
        const result = baseBallGame.execute(["5", "2", "C", "D", "+"]);

        // Assert
        expect(result).equals(30); // 5 + 10 + 15
    });

    it("Test case 2", async () => {
        // Arrange
        const baseBallGame = new BaseBallGame();

        // Act
        const result = baseBallGame.execute(["5", "-2", "4", "C", "D", "9", "+", "+"]);

        // Assert
        expect(result).equals(27); // 5 + 10 + 15
    });

});
