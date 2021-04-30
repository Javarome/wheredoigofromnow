import {Board} from "board/Board"
import {User} from "User"
import {PalPlugin} from "board/plugins/PalPlugin"

const board = new Board()

let palPlugin = new PalPlugin()
board.register(palPlugin)

const user = new User()

board.run(user)
