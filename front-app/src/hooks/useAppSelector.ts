import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootReducerType } from "store/redux"

export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector
