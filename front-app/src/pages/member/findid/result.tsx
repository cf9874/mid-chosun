import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
const FindIdResultPage = () => {
  return (
    <LayoutLogin>
      <div>
        <div className={styles.container}>
          <div className={styles.page_title}>계정명 찾기</div>
          <div className={styles.result_wrapper}>
            - 아이디 찾기의 결과는 <span className={styles.result_highlight}>test123</span> 입니다.
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default FindIdResultPage
