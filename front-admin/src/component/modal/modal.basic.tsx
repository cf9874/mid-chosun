import { Modal, ModalProps } from "antd"
import { ReactNode } from "react"

interface IModalProps extends ModalProps {
  width?: number
  title: string
  children: ReactNode
  open: boolean
  onOk: () => void | Promise<void>
  onCancel: () => void
}
export const BasicModal = (props: IModalProps) => {
  return (
    <Modal
      {...props}
      // width={props.width ?? 500}
    >
      {props.children}
    </Modal>
  )
}
