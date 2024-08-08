import { ActionType } from "typesafe-actions"
import * as actions from "./actions"

export type ProfileAction = ActionType<typeof actions>

export type Profile = {
  num: number
  id: string
  level: string
  name: string
}
