import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { PlusMinus } from "./PlusMinus";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Plus Minus Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const plusMinus = new PlusMinus();

        // Act
        const result = plusMinus.execute([-4, 3, -9, 0, 4, 1]);

        // Assert
        expect(result[0]).equals(0.5);
        expect(result[1]).equals(0.3333333333333333);
        expect(result[2]).equals(0.16666666666666666);
    });

    it("Test case 1", async () => {
        // Arrange
        const plusMinus = new PlusMinus();

        // Act
        const result = plusMinus.execute([-2, 3, -9, 6, 4, 1]);

        // Assert
        expect(result[0]).equals(0.6666666666666666);
        expect(result[1]).equals(0.3333333333333333);
        expect(result[2]).equals(0);
    });

    it("Test case 2", async () => {
        // Arrange
        const plusMinus = new PlusMinus();

        // Act
        const result = plusMinus.execute([-4, -3, -9, 0, 4, 1]);

        // Assert
        expect(result[0]).equals(0.3333333333333333);
        expect(result[1]).equals(0.5);
        expect(result[2]).equals(0.16666666666666666);
    });

});
