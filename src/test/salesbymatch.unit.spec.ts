import SinonChai from 'sinon-chai';
import { SalesByMatch } from "../app/SalesByMatch";
import chai, { expect } from "chai";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Sales By Match Tests", () => {

    it("Test case0", async () => {
        // Act
        const salesByMatch = new SalesByMatch();
        const sales =  salesByMatch.countPairs( 7, [1, 2, 1, 2, 1, 3, 2])

        // Assert
        expect(sales).equals(2);
    });

    it("Test case1", async () => {
        // Act
        const salesByMatch = new SalesByMatch();
        const sales =  salesByMatch.countPairs( 9, [10, 20, 20, 10, 10, 30, 50, 10, 20])

        // Assert
        expect(sales).equals(3);
    });

    it("Test case2", async () => {
        // Act
        const salesByMatch = new SalesByMatch();
        const sales =  salesByMatch.countPairs( 9, [3, 20, 3, 10, 3, 30, 50, 10, 20])

        // Assert
        expect(sales).equals(3);
    });

});
