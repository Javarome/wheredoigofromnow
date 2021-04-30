import {Board} from "board/Board"
import {User} from "User"
import {PalPlugin} from "board/plugins/PalPlugin"
import {BoardView} from "board/view/BoardView"

const board = new Board(new BoardView())

let palPlugin = new PalPlugin()
board.register(palPlugin)

const user = new User()

board.run(user)
