import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { useRouter } from "next/router"
const AskPage = () => {
  const router = useRouter()
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>1:1 문의</div>
        <div className={styles.ask_wrapper}>
          <div className={styles.ask_table_header}>
            <div className={styles.ask_table_header_item}>번호</div>
            <div className={styles.ask_table_header_item}>제목</div>
            <div className={styles.ask_table_header_item}>등록일</div>
            <div className={styles.ask_table_header_item}>처리결과</div>
          </div>
          <div className={styles.ask_table}>
            <div className={styles.ask_table_item}>1</div>
            <div className={styles.ask_table_item_title} onClick={() => router.push(`/support/ask/detail?id=${1}`)}>
              캐쉬관련 -
            </div>
            <div className={styles.ask_table_item}>2024-03-18 13:51:07</div>
            <div className={styles.ask_table_item}>접수중</div>
          </div>
          <div className={styles.button_wrapper}>
            <button className={styles.button} onClick={() => void router.push("/support/ask/register")}>
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default AskPage
