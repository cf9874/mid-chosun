import { Button, Col, Input, Row, Space, Descriptions } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import { useState } from "react"
import { apiUtil } from "apis/api.util"
import AuthHoc from "hoc/AuthHoc"
import { useAsyncEffect, useInputs } from "hooks"
import { apiManager } from "apis/api.manager"
import { UserInfoDto } from "apis/dto"

const InfoManagementPage = () => {
  const [info, setInfo] = useState<UserInfoDto["userStatus"]>()

  const pwInput = useInputs({ value: "" })
  const pwConfirmInput = useInputs({ value: "" })

  useAsyncEffect(async () => {
    const response = await apiManager.userApi.getUserInfo()
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setInfo(response.data.userStatus)
  }, [])

  const onChangeInfo = async () => {
    if (!pwInput.value) {
      alert("변경할 비밀번호를 입력해주세요.")
      return
    }
    if (!pwConfirmInput.value) {
      alert("변경할 비밀번호를 다시 확인해주세요.")
      return
    }
    if (pwConfirmInput.value !== pwInput.value) {
      alert("비밀번호가 일치하지 않습니다.")
      return
    }
    const response = await apiManager.userApi.changePassword({
      resetPassword: pwInput.value,
      confirmPassword: pwConfirmInput.value,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    alert("비밀번호가 변경되었습니다.")
    pwInput.onClear()
    pwConfirmInput.onClear()
  }

  return (
    <LayoutMain>
      <Col className={styles.container}>
        <Row className={styles.page_title}>관리자 정보 관리</Row>
        <Space className={styles.login_box} direction="vertical">
          <Row className={styles.page_title_desc}>관리자 정보 변경</Row>
          <Descriptions
            bordered
            style={{
              width: 400,
            }}
            size="small"
            labelStyle={{
              width: 150,
            }}
          >
            <Descriptions.Item label="번호" span={6}>
              {info?.num}
            </Descriptions.Item>
            <Descriptions.Item label="관리자" span={6}>
              {info?.id}
            </Descriptions.Item>
            <Descriptions.Item label="이름" span={6}>
              {info?.name}
            </Descriptions.Item>
            <Descriptions.Item label="비밀번호" span={6}>
              <Input type="password" value={pwInput.value} onChange={pwInput.onChange} />
            </Descriptions.Item>
            <Descriptions.Item label="비밀번호 확인" span={6}>
              <Input type="password" value={pwConfirmInput.value} onChange={pwConfirmInput.onChange} />
            </Descriptions.Item>
          </Descriptions>
          <Row className={styles.login_box_button_wrapper} justify={"end"}>
            <Button className={styles.login_box_button} onClick={onChangeInfo}>
              변경
            </Button>
          </Row>
        </Space>
      </Col>
    </LayoutMain>
  )
}
export default AuthHoc(InfoManagementPage)
