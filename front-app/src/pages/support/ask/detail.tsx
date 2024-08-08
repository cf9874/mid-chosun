import { LayoutLogin } from "component/layout"
import styles from "./detail.module.scss"
import { useRouter } from "next/router"
const AskDetailPage = () => {
  const router = useRouter()
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>1:1 문의</div>
        <div className={styles.table}>
          <div className={styles.table_row}>
            <div className={styles.table_row_header}>제목</div>
            <div className={styles.table_row_contents}>
              <div className={styles.table_row_content}>테스트 타이틀</div>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_row_header}>사고날짜</div>
            <div className={styles.table_row_contents}>
              <div className={styles.table_row_content}>2024년 03월 18일</div>
              <div className={styles.table_row_content}>
                <div className={styles.table_row_header}>사고시간</div>
                <div className={styles.table_row_content}>13시 51분</div>
              </div>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_row_header}>이메일</div>
            <div className={styles.table_row_contents}>
              <div className={styles.table_row_content}>main@naver.com</div>
              <div className={styles.table_row_content}>
                <div className={styles.table_row_header}>연락처</div>
                <div className={styles.table_row_content}>01000000000</div>
              </div>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_row_header}>피해내용</div>
            <div className={styles.table_row_contents}>
              <div className={styles.table_row_content}>테스트 컨텐트</div>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_row_header}>답변내용</div>
            <div className={styles.table_row_contents}>
              <div className={styles.table_row_content}></div>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_row_header}>첨부파일</div>
            <div className={styles.table_row_contents}>
              <div className={styles.table_row_content}>(Kb)</div>
            </div>
          </div>
        </div>
        <div className={styles.button_wrapper}>
          <button className={styles.delete_button}>삭제</button>
          <button className={styles.button} onClick={() => void router.push("/support/ask")}>
            확인
          </button>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default AskDetailPage
