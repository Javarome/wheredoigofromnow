import {Board} from "../Board"
import {BoardPlugin} from "../BoardPlugin"
import {User} from "../../User"
import {BoardItem} from "../item/BoardItem"
import {UserEvent} from "../../UserEvent"
import {BoardMessageItem} from "../item/BoardMessageItem"

export class IDPlugin implements BoardPlugin {

  visit(user: User, board: Board): void {
    const frIdEvents = user.events.filter((event: UserEvent) => event.what.type === "ID" && event.what.data.country === "fr")
    if (frIdEvents.length > 0) {
      let lastId = frIdEvents[frIdEvents.length - 1]
      let idDate = lastId.when
      let day = 24 * 3600 * 1000
      let month = day * 30
      if (idDate.getTime() + month < Date.now() - 10 * 365 * day) {
        board.add(new BoardMessageItem("You should update your ID before next month!"))
      }
    }
  }
}
