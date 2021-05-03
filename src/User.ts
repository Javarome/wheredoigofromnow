import {UserEvent} from "./UserEvent"
import {v4 as uuid} from "uuid"

export class User {
  id: string = uuid()

  readonly events: UserEvent[] = []

  firstName: string

  get birth(): UserEvent | undefined {
    return this.events[0]
  }

  get age(): number | undefined {
    let birth = this.birth
    if (birth) {
      let ageMs = Date.now() - birth.when.getTime()
      return Math.floor(ageMs / 1000 / 3600 / 24 / 365)
    }
  }

  set age(years: number) {
    if (this.birth) {
      this.birth.when = new Date(Date.now() - (years * 365 * 24 * 3600 * 1000))
    } else {
      let birth = new UserEvent()
      this.events.splice(0, 0, birth)
    }
  }
}
