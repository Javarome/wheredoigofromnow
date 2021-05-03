import {BoardPlugin} from "board/BoardPlugin"
import {Board} from "board/Board"
import {User} from "User"
import {BoardAskItem} from "board/item/BoardAskItem"
import {BoardMessageItem} from "board/item/BoardMessageItem"

export class PalPlugin implements BoardPlugin {

  async visit(user: User, board: Board) {
    if (!user.firstName) {
      const firstName = await board.add(new BoardAskItem("What is your first name?"))
      user.firstName = firstName
      board.add(new BoardMessageItem(`Hello ${user.firstName}!`))
    }
    if (!user.age) {
      const age = await board.add(new BoardAskItem("What is your age?"))
      user.age = age
      board.add(new BoardMessageItem(`Ok${age > 40 ? " boomer" : " kiddie"}!`))
    }
  }
}
