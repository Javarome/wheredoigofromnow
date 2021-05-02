import {BoardPlugin} from "board/BoardPlugin"
import {BoardItem} from "board/item/BoardItem"
import {User} from "User"
import {BoardWebView} from "board/view/BoardWebView"

export class Board {

  private readonly plugins: BoardPlugin[] = []
  private readonly items: BoardItem[] = []

  constructor(readonly view: BoardWebView) {
  }

  run(user: User) {
    this.plugins.forEach(plugin => plugin.visit(user, this))
  }

  register(plugin: BoardPlugin) {
    this.plugins.push(plugin)
  }

  add(item: BoardItem): any {
    this.items.push(item)
    return item.putOn(this)
  }
}
