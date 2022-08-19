import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { BetweenTwoSeats } from "./BetweenTwoSeats";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Between 2 seats Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const betweenTwoSeats = new BetweenTwoSeats();

        // Act
        const result = betweenTwoSeats.execute([2, 4], [16, 32, 96])

        // Assert
        expect(result.length).equals(3);
        expect(result).deep.equals([4, 8, 16]);
    });

    it("Test case 1", async () => {
        // Arrange
        const betweenTwoSeats = new BetweenTwoSeats();

        // Act
        const result = betweenTwoSeats.execute([2, 6], [24, 36])

        // Assert
        expect(result.length).equals(2);
        expect(result).deep.equals([6, 12]);
    });

    it("Test case 2", async () => {
        // Arrange
        const betweenTwoSeats = new BetweenTwoSeats();

        // Act
        const result = betweenTwoSeats.execute([3, 4], [24, 48])

        // Assert
        expect(result.length).equals(2);
        expect(result).deep.equals([12, 24]);
    });

});
