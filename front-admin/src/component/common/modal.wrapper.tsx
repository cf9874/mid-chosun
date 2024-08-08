import React from "react"
import { shallowEqual } from "react-redux"
import { useAppSelector, useAppDispatch } from "hooks"
import { setModal } from "store/redux/config"
import styles from "./modal.wrapper.module.scss"
export const ModalWrapper = () => {
  const { modal } = useAppSelector(state => state.configReducer, shallowEqual)

  const modalDispatch = useAppDispatch(setModal)

  return (
    <div
      className={`${styles.modal} ${modal.open && styles.open}`}
      onClick={() => {
        if (modal.customClose) {
          modal.customClose()
        }
        modalDispatch({ open: false })
      }}
    >
      {modal.open ? <div onClick={e => e.stopPropagation()}>{modal.children}</div> : null}
    </div>
  )
}
