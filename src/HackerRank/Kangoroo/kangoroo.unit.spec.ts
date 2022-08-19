import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { Kangaroo } from "./Kangaroo";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Kangoroo Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const kangaroo = new Kangaroo();

        // Act
        const result = kangaroo.execute(0, 2, 5, 3)

        // Assert
        expect(result).equals("NO");
    });

    it("Test case 1", async () => {
        // Arrange
        const kangaroo = new Kangaroo();

        // Act
        const result = kangaroo.execute(0, 3, 4, 2)

        // Assert
        expect(result).equals("YES");
    });
});
