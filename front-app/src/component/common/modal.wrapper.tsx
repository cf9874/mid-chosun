import React from "react"
import { shallowEqual } from "react-redux"
import { useAppSelector, useAppDispatch } from "hooks"
import { setModal } from "store/redux/config"

export const ModalWrapper = () => {
  const { modal } = useAppSelector(state => state.configReducer, shallowEqual)

  const modalDispatch = useAppDispatch(setModal)

  return (
    <div
      className={`modal ${modal.open && "open"}`}
      onClick={() => {
        modalDispatch({ open: false })
      }}
    >
      {modal.open ? <div onClick={e => e.stopPropagation()}>{modal.children}</div> : null}
    </div>
  )
}
