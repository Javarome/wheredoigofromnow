import {Board} from "board/Board";
import {User} from "User"

export interface BoardPlugin {
  visit(user: User, board: Board): void
}
