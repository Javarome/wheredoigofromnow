import {BoardPlugin} from "board/BoardPlugin"
import {Board} from "board/Board"
import {User} from "User"

export class HealthPlugin implements BoardPlugin {
  visit(user: User, board: Board): void {
  }
}
