import { ActionType } from "typesafe-actions"
import * as actions from "./actions"

export type ConfigAction = ActionType<typeof actions>

export type ConfigState = {
  modal: Modal
  isLoading: boolean
  dropdown: DropDown[]
}

export type Modal = {
  open: boolean
  children?: JSX.Element
}
export type DropDown = {
  id: string
  isOpen: boolean
}

export type IsLoading = boolean
