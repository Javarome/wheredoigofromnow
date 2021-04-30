import {BoardPlugin} from "board/BoardPlugin"
import {Board} from "board/Board"
import {User} from "User"
import {BoardAskItem} from "board/item/BoardAskItem"
import {BoardMessageItem} from "board/item/BoardMessageItem"

export class PalPlugin implements BoardPlugin {

  visit(user: User, board: Board): void {
    const firstName = board.add(new BoardAskItem("What is your first name?"))
    board.add(new BoardMessageItem(`Hello ${firstName}!`))
  }
}
