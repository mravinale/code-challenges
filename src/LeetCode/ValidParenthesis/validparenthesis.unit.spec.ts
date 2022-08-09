import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { ValidParenthesis } from "./ValidParenthesis";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Challenge 1 Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const validParenthesis = new ValidParenthesis();

        // Act
        const result = validParenthesis.execute("(({[([{{[(");

        // Assert
        expect(result).equals(false);
    });

    it("Test case 1", async () => {
        // Arrange
        const validParenthesis = new ValidParenthesis();

        // Act
        const result = validParenthesis.execute("{()}");

        // Assert
        expect(result).equals(true);
    });

    it("Test case 2", async () => {
        // Arrange
        const validParenthesis = new ValidParenthesis();

        // Act
        const result = validParenthesis.execute("{([)}");

        // Assert
        expect(result).equals(false);
    });

});
