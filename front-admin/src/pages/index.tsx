import { useAppDispatch, useInputs } from "hooks"
import styles from "./index.module.scss"
import { Button, Col, Input, Row, Space } from "antd"
import { useRouter } from "next/router"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { initProfile } from "store/redux/profile"
import { setCookie } from "nookies"
import { COOKIE_KEY } from "const"

export default function Home() {
  const router = useRouter()
  const idInput = useInputs({ value: "" })
  const pwInput = useInputs({ value: "" })
  const initProfileDis = useAppDispatch(initProfile)

  const onLogin = async () => {
    if (!idInput.value || !pwInput.value) {
      alert("입력값을 확인해주세요.")
      return
    }
    const response = await apiManager.userApi.signIn({
      id: idInput.value,
      pass: pwInput.value,
    })
    console.log(2626, response)
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message)
      return
    }
    const maxAge = 24 * 60 * 60
    const cookieOptions = {
      maxAge: maxAge,
      httpOnly: false,
      // secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict" as const,
    }
    setCookie(null, COOKIE_KEY.ACCESSTOKEN, response.token, cookieOptions)
    initProfileDis({
      id: response.loginCheck.id,
      num: response.loginCheck.num,
      level: response.loginCheck.level,
      name: response.loginCheck.name,
    })
    void router.push("/info/manage")
  }
  return (
    <Space className={styles.container} direction="vertical">
      <Row className={styles.page_title}>미드조선 관리자 페이지</Row>
      <Space className={styles.login_box} direction="vertical">
        <Row className={styles.login_box_row_wrapper} justify={"center"}>
          <Row className={styles.login_box_row} justify={"center"} align={"middle"}>
            <Col className={styles.login_box_title}>ID</Col>
            <Col className={styles.login_input_group}>
              <Input className={styles.login_input} value={idInput.value} onChange={idInput.onChange} />
            </Col>
          </Row>
          <Row className={styles.login_box_row} justify={"center"} align={"middle"}>
            <Col className={styles.login_box_title}>PW</Col>
            <Col className={styles.login_input_group}>
              <Input className={styles.login_input} type="password" value={pwInput.value} onChange={pwInput.onChange} />
            </Col>
          </Row>
        </Row>
        <Row className={styles.login_box_button_wrapper} justify={"center"}>
          <Button className={styles.login_box_button} onClick={onLogin}>
            로그인
          </Button>
        </Row>
      </Space>
    </Space>
  )
}
