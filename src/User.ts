import {UserEvent} from "./UserEvent"
import {v4 as uuid} from "uuid"

export class User {
  id: string = uuid()

  events: UserEvent[] = []
}
