import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { useRouter } from "next/router"
import { useInputs } from "hooks"
const FindPasswordResultPage = () => {
  const router = useRouter()
  const changePassword = () => {
    // logic
    if (passwordInput.value !== passwordConfirmInput.value) {
      alert("비밀번호가 일치하지 않습니다.")
      return
    }
    void router.push("/")
  }
  const passwordInput = useInputs({ value: "" })
  const passwordConfirmInput = useInputs({ value: "" })
  return (
    <LayoutLogin>
      <div>
        <div className={styles.container}>
          <div className={styles.page_title}>비밀번호 찾기</div>
          <div className={styles.user_info_container}>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>새로운 비밀번호 입력</div>
              <div className={styles.user_info_input_box}>
                <input
                  className={styles.user_info_input}
                  value={passwordInput.value}
                  onChange={passwordInput.onChange}
                />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>새로운 비밀번호 재입력</div>
              <div className={styles.user_info_input_box}>
                <input
                  className={styles.user_info_input}
                  value={passwordConfirmInput.value}
                  onChange={passwordConfirmInput.onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submit_box}>
          <button className={styles.submit_button} onClick={changePassword}>
            찾기
          </button>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default FindPasswordResultPage
