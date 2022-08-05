
// https://docs.google.com/document/d/1QD5fSm-PQN77lxcX3dj3SpmKeJ7ceruKKvDtYwsd9dU/edit?usp=sharing
export class SalesByMatch {

    public countPairs(socksPile, totalSocks): number {
        let socksTypes = this.getSockTypes(totalSocks);
        const sockCounter = new Map(); // creates a hashtable for storing pairs count

        socksTypes.forEach( (sockType) => {
            let count = this.getSocksCountByType(totalSocks, sockType);
            sockCounter.set(sockType, Math.floor(count / 2) ); // store pairs count
        });

        let sockPairsList = Array.from(sockCounter.values()); // transform pairs hashtable to array
        let pairsCount = sockPairsList.reduce((x, y) => x + y); // count total pairs

        return pairsCount
    }

    // Creates a new array with socks types (removing repeated)
    private getSockTypes(socks) {
        return [...new Set(socks)];
    }

    // Get the count of total socks types
    private getSocksCountByType(totalSocks, sockType) {
        return totalSocks.filter((sock) => sockType === sock).length;
    }

}
