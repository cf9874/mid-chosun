import { Profile, ProfileAction } from "./types"
import { createReducer } from "typesafe-actions"
import { INIT_PROFILE, UPDATE_PROFILE } from "./actions"
import produce from "immer"
const initialState: { profile: Profile } = {
  profile: {
    num: 0,
    id: "",
    level: "",
    name: "",
  },
}

const reducer = createReducer<{ profile: Profile }, ProfileAction>(initialState, {
  [UPDATE_PROFILE]: (state, { payload }) => {
    return produce(state, draft => {
      Object.assign(draft.profile, payload)
    })
  },
  [INIT_PROFILE]: (state, { payload }) => {
    return produce(state, draft => {
      draft.profile = payload
    })
  },
})

export default reducer
