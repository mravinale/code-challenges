import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { TimeConversion } from "./TimeConversion";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Time Conversion Tests", () => {

    it("Test case 0", async () => {
        // Arrange
        const timeConversion = new TimeConversion();

        // Act
        const result = timeConversion.execute("07:05:45PM");

        // Assert
        expect(result).equals("19:05:45");
    });

    it("Test case 1", async () => {
        // Arrange
        const timeConversion = new TimeConversion();

        // Act
        const result = timeConversion.execute("12:40:22AM");

        // Assert
        expect(result).equals("00:40:22");
    });

    it("Test case 2", async () => {
        // Arrange
        const timeConversion = new TimeConversion();

        // Act
        const result = timeConversion.execute("01:40:22AM");

        // Assert
        expect(result).equals("01:40:22");
    });

    it("Test case 3", async () => {
        // Arrange
        const timeConversion = new TimeConversion();

        // Act
        const result = timeConversion.execute("01:40:22PM");

        // Assert
        expect(result).equals("13:40:22");
    });

    it("Test case 4", async () => {
        // Arrange
        const timeConversion = new TimeConversion();

        // Act
        const result = timeConversion.execute("12:45:54PM");

        // Assert
        expect(result).equals("12:45:54");
    });

});
