import configure, { AppDispatch } from "./configure"
import { RootReducerType } from "./reducer"
const { store, persistor } = configure()

export default store
export { persistor }
export type { RootReducerType, AppDispatch }
