import { Button, Col, Modal, ModalProps } from "antd"

export const ErrorModal = (props: ModalProps) => {
  return (
    <Modal {...props} width={300} footer={<Button onClick={props.onCancel}>닫기</Button>}>
      <Col
        style={{
          height: 80,
        }}
      >
        {props.children}
      </Col>
    </Modal>
  )
}
