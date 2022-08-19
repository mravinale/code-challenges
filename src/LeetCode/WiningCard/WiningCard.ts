
// https://leetcode.com/discuss/interview-question/1768919/winning-card
export class WiningCard {

    public execute(hand: number[][]): number {

        let winner = -1
        hand.forEach((cards) => {
            // tslint:disable-next-line:no-shadowed-variable
            let NoDuplicate = (cards.filter((el, _, card) => {
                return card.filter(el2 => el2 === el).length === 1
            }))
            let highCard = Math.max(...NoDuplicate)
            if (winner < highCard) {
                winner = highCard;
            }
        })
        return winner;
    }
}
