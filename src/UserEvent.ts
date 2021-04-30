import {User} from "./User";

class UserEventLocation {
}

class UserEventWhat {
  type: string
  data: any
}

export class UserEvent {
  id: string
  who: User
  what: UserEventWhat
  where: UserEventLocation
  when: Date
}
