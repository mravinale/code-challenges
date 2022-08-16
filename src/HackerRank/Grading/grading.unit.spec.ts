import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { Grading } from "./Grading";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Grading Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const grading = new Grading();

        // Act
        const result = grading.execute([73, 67, 38, 33]);

        // Assert
        expect(result).deep.equals([75, 67, 40, 33]);
    });

    it("Test case 1", async () => {
        // Arrange
        const grading = new Grading();

        // Act
        const result = grading.execute([37, 63, 38, 33]);

        // Assert
        expect(result).deep.equals([37, 65, 40, 33]);
    });
});
