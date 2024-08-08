/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux"
// import { AppDispatch } from "store/redux"
import { useCallback } from "react"
import { PayloadActionCreator } from "typesafe-actions"

export const useAppDispatch = <T extends (...args: any) => any, P extends Parameters<T>>(
  func: T extends PayloadActionCreator<string, any> ? T : (...args: P) => any,
) => {
  const dispatch = useDispatch()

  const wrapper = useCallback(
    (...args: P) => {
      dispatch(func(...args))
    },
    [dispatch, func],
  )

  return wrapper
}
