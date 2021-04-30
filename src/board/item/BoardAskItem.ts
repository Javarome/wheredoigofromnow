import {BoardItem} from "board/item/BoardItem"
import {Board} from "board/Board"

export class BoardAskItem implements BoardItem{

  constructor(readonly question: string, type = "string") {
  }

  putOn(board: Board): void {
    return board.view.prompt(this.question)
  }
}
