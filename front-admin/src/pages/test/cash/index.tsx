import { Button, Col, Input, Row } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { useAsyncEffect, useInputs } from "hooks"
import { BasicModal, ErrorModal } from "component/modal"
import { useState } from "react"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { getIpAddress } from "utils"
const TestCashManagementPage = () => {
  const idInput = useInputs({ value: "" })
  const amountInput = useInputs({ value: "" })
  const [openModal, setOpenModal] = useState(false)
  const [openCompleteModal, setOpenCompleteModal] = useState(false)
  const [openErrorModal, setOpenErrorMOdal] = useState(false)
  const [ipAddress, setIpAddress] = useState("")
  const [error, setError] = useState("")
  useAsyncEffect(async () => {
    const ip = await getIpAddress()
    setIpAddress(ip?.IPv4 as string)
  }, [])

  const onCharge = async () => {
    const response = await apiManager.gameTestApi.chargeCashForTest({
      cash: amountInput.value,
      ipAddress: ipAddress ?? "",
      receiverId: idInput.value,
    })
    if (apiUtil.isErrorResponse(response)) {
      setError(response.message ? response.message : "서버에 문제가 발생했습니다.")
      setOpenModal(false)
      setOpenErrorMOdal(true)
      return
    }
    setOpenModal(false)
    setOpenCompleteModal(true)
  }
  const onCloseCompleteModal = () => {
    idInput.onClear()
    amountInput.onClear()
    setOpenCompleteModal(false)
  }
  return (
    <LayoutMain>
      <BasicModal title="홈페이지 캐쉬 변동" open={openModal} onOk={onCharge} onCancel={() => setOpenModal(false)}>
        캐쉬를 지급 하시겠습니까?
      </BasicModal>
      <BasicModal
        title=""
        open={openCompleteModal}
        onOk={() => {}}
        width={300}
        onCancel={onCloseCompleteModal}
        footer={<Button onClick={onCloseCompleteModal}>확인</Button>}
      >
        <Col className={styles.modal_box}>충전되었습니다.</Col>
      </BasicModal>
      <ErrorModal open={openErrorModal} onCancel={() => setOpenErrorMOdal(false)}>
        {error}
      </ErrorModal>
      {ipAddress && (
        <Col className={styles.container}>
          <Row className={styles.page_title}>홈페이지 캐쉬 변동</Row>
          <Col className={styles.wrapper}>
            <Col className={styles.input_row}>
              <Col className={styles.input_label}>ID</Col>
              <Input className={styles.input} value={idInput.value} onChange={idInput.onChange} />
            </Col>
            <Row className={styles.input_row}>
              <Col className={styles.input_label}>변동 금액</Col>
              <Input className={styles.input} type="number" value={amountInput.value} onChange={amountInput.onChange} />
            </Row>
          </Col>
          <Row>사용방법 </Row>
          <Row>지급 : 1000, 차감 : -1000</Row>
          <Row className={styles.button_wrapper}>
            <Button
              onClick={() => {
                if (!idInput.value) {
                  alert("아이디를 입력해주세요.")
                  return
                }
                if (!amountInput.value) {
                  alert("충전금액을 입력해주세요.")
                  return
                }
                setOpenModal(true)
              }}
            >
              충전
            </Button>
          </Row>
        </Col>
      )}
    </LayoutMain>
  )
}
export default AuthHoc(TestCashManagementPage)
