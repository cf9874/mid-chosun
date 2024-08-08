import { ConfigAction, ConfigState } from "./types"
import { createReducer } from "typesafe-actions"
import { SET_MODAL, SET_LOADING, SET_DROPDOWN_OPEN } from "./actions"
import produce from "immer"

const initialState: ConfigState = {
  modal: {
    open: false,
    children: <></>,
  },
  isLoading: false,
  dropdown: [],
}

const reducer = createReducer<ConfigState, ConfigAction>(initialState, {
  [SET_MODAL]: (state, { payload }) => {
    return produce(state, draft => {
      Object.assign(draft.modal, payload)
    })
  },
  [SET_LOADING]: (state, { payload }) => {
    return produce(state, draft => {
      draft.isLoading = payload
    })
  },
  [SET_DROPDOWN_OPEN]: (state, { payload }) => {
    return produce(state, draft => {
      const list = state.dropdown.map(v =>
        v.id === payload.id ? { ...v, isOpen: payload.isOpen } : { ...v, isOpen: false },
      )

      const foundIndex = list.findIndex(v => v.id === payload.id)

      if (foundIndex === -1) {
        draft.dropdown = list.concat(payload)
      } else {
        draft.dropdown = list
      }
    })
  },
})
export default reducer

// return produce(state, draft => {
//   const list = payload.open ? state.dropdown.map(v => ({ name: v.name, open: false })) : state.dropdown

//   const foundValue = list.find(v => v.name === payload.name)

//   if (foundValue) {
//     draft.dropdown = list.map(v => (v.name === payload.name ? { ...v, open: payload.open } : v))
//   } else {
//     draft.dropdown = list.concat(payload)
//   }
// })
