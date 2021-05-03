import {Board} from "board/Board"
import {BoardPlugin} from "board/BoardPlugin"
import {User} from "User"
import {BoardMessageItem} from "board/item/BoardMessageItem"
import {UserEvent} from "UserEvent"
import {BoardItem} from "board/item/BoardItem"

export class CalendarPlugin implements BoardPlugin {

  visit(user: User, board: Board) {
    const events = user.events
    const birth = user.birth
    const futureEvents = events.filter((event: UserEvent) => event.when.getTime() > Date.now())
    for (const event of futureEvents) {
      let appDate = event.when
      let boardtx: BoardItem
      if (event.when.getDate() === birth.when.getDate() && event.when.getMonth() === birth.when.getMonth()) {
        boardtx = new BoardMessageItem("Happy birthday!")
      } else {
        boardtx = new BoardMessageItem(`You have a ${event} today at ${appDate}`)
      }
      board.add(boardtx)
    }
  }
}
