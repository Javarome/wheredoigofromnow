import {BoardPlugin} from "board/BoardPlugin"
import {Board} from "board/Board"
import {User} from "User"
import {BoardAskItem} from "board/item/BoardAskItem"

export class FinancePlugin implements BoardPlugin {
  visit(user: User, board: Board): void {
    const cash = this.getCash(user)
    if (cash > 1500) {
//    Bank
      //  cryptomoney
      const investment = new BoardAskItem(`What about investing ${cash / 3}?`)
      const answer = board.add(investment)
      if (answer == "yes") {
        // TODO:
      }
    }
  }

  private getCash(user: User): number {
    let cash = 0
    const cashEvents = user.events.filter(event => event.what.type === "earn" || event.what.type === "paid")
    for (const event of cashEvents) {
      cash += event.what.type === "earn" ? event.what.data as number : -event.what.data as number
    }
    return cash
  }
}
