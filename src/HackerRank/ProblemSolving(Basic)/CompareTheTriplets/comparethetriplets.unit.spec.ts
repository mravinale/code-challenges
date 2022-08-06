import SinonChai from 'sinon-chai';
import chai, { expect } from "chai";
import { CompareTheTriplets } from "./CompareTheTriplets";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("Compare The Triplets Tests", () => {

    it("Test case0", async () => {
        // Act
        const compareTheTriplets = new CompareTheTriplets();
        const results =  compareTheTriplets.execute( [5, 6, 7], [3, 6, 10])

        // Assert
        expect(results[0]).equals(1);
        expect(results[1]).equals(1);
    });

    it("Test case2", async () => {
        // Act
        const compareTheTriplets = new CompareTheTriplets();
        const results =  compareTheTriplets.execute( [17, 28, 30], [99, 16, 8])

        // Assert
        expect(results[0]).equals(2);
        expect(results[1]).equals(1);
    });

    it("Test case3", async () => {
        // Act
        const compareTheTriplets = new CompareTheTriplets();
        const results =  compareTheTriplets.execute( [1, 2, 3], [9, 1, 8])

        // Assert
        expect(results[0]).equals(1);
        expect(results[1]).equals(2);
    });

});
