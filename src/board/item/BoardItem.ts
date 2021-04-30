import {Board} from "../Board"

export interface BoardItem {
  putOn(board: Board): void
}
