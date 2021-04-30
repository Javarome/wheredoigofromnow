import {BoardPlugin} from "board/BoardPlugin"
import {User} from "User"
import {Board} from "board/Board"

export class JobPlugin implements BoardPlugin {

  visit(user: User, board: Board): void {
  }
}
