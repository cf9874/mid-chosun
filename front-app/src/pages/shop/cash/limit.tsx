import { LayoutLogin } from "component/layout"
import styles from "./limit.module.scss"

const LimitChangePage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>캐쉬 충전</div>
        <div className={styles.content_title}>- 월 결제한도 변경</div>
        <div className={styles.content_desc}>
          ※ 월 결제한도는 <span className={styles.content_desc_highlight}>월 2회</span> 변경이 가능합니다. (1일 1회
          변경가능)
        </div>
        <div className={styles.table_wrapper}>
          <div className={styles.table_row}>
            <div className={styles.table_header}>아이디</div>
            <div className={styles.table_item}>
              <input value={"testid1234"} disabled className={styles.table_input} />
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_header}>이메일</div>
            <div className={styles.table_item}>
              <input className={styles.table_input} /> <button className={styles.certify_button}>인증번호 발송</button>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_header}>이메일 인증번호</div>
            <div className={styles.table_item}>
              <input className={styles.table_input} />
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_header}>현재 월 결제한도</div>
            <div className={styles.table_item}>
              <input value={(550000).toLocaleString()} className={styles.table_input} disabled />
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_header}>변경할 월 결제한도</div>
            <div className={styles.table_item_desc}>
              <input className={styles.table_input} />
              <div className={styles.table_desc}>(최근 변경일 : 2024.03.30, 변경횟수 : 3)</div>
            </div>
          </div>
        </div>
        <div className={styles.button_wrapper}>
          <button className={styles.button}>확인</button>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default LimitChangePage
