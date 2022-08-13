
// https://www.hackerrank.com/challenges/sock-merchant
export class SalesByMatch {

    public countPairs(socksPile, totalSocks): number {
        let socksTypes = SalesByMatch.getSockTypes(totalSocks);
        const sockCounter = new Map(); // creates a hashtable for storing pairs count

        socksTypes.forEach( (sockType) => {
            let count = this.getSocksCountByType(totalSocks, sockType);
            sockCounter.set(sockType, Math.floor(count / 2) ); // store pairs count
        });

        let sockPairsList = Array.from(sockCounter.values()); // transform pairs hashtable to array
        return sockPairsList.reduce((x, y) => x + y); // count total pairs
    }

    // Creates a new array with socks types (removing repeated)
    private static getSockTypes(socks) {
        return [...new Set(socks)];
    }

    // Get the count of total socks types
    private getSocksCountByType(totalSocks, sockType) {
        return totalSocks.filter((sock) => sockType === sock).length;
    }

}
