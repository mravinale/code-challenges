import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { StairCase } from "../app/StairCase";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Stair Case Tests", () => {

    it("Test case0", async () => {
        // Arrange
        const stairCase = new StairCase();

        // Act
        const result = stairCase.execute(4);

        // Assert
        expect(result).equals("   #\n  ##\n ###\n####\n");
    });

    it("Test case2", async () => {
        // Arrange
        const stairCase = new StairCase();

        // Act
        const result = stairCase.execute(5);

        // Assert
        expect(result).equals("    #\n   ##\n  ###\n ####\n#####\n");
    });

    it("Test case3", async () => {
        // Arrange
        const stairCase = new StairCase();

        // Act
        const result = stairCase.execute(3);

        // Assert
        expect(result).equals("  #\n ##\n###\n");
    });

});
