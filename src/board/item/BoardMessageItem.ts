import {BoardItem} from "./BoardItem"
import {Board} from "../Board"

export class BoardMessageItem implements BoardItem {

  constructor(readonly message: string) {
  }

  putOn(board: Board): void {
    board.view.log(this.message)
  }
}
