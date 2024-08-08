import { createAction } from "typesafe-actions"
import { DropDown, Modal } from "./types"
export const SET_MODAL = "store/redux/config/SET_MODAL"
export const SET_LOADING = "store/redux/config/SET_LOADING"
export const SET_DROPDOWN_OPEN = "store/redux/config/SET_DROPDOWN_OPEN"

export const setModal = createAction(SET_MODAL)<Modal>()
export const setLoading = createAction(SET_LOADING)<boolean>()
export const setDropdownOpen = createAction(SET_DROPDOWN_OPEN)<DropDown>()
