import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { WiningCard } from "./WiningCard";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Winning Card Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const winingCard = new WiningCard();

        // Act
        const result = winingCard.execute([[5, 5], [2, 2]]);

        // Assert
        expect(result).equals(-1);
    });

});
