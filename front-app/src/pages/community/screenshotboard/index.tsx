import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { BoardListItem } from "component/board.item"
const ScreenshotboardPage = () => {
  return (
    <LayoutLogin>
      <div>
        <div className={styles.notice_list_contianer}>
          {[
            {
              seq_no: 1,
              title: "스샷 게시물 1",
              writer: "abc123",
              created_at: "24.02.20",
              img: "link",
              server: "혈룡",
            },
            {
              seq_no: 1,
              title: "스샷 게시물 1",
              writer: "abc456",
              created_at: "24.02.20",
              img: "link",

              server: "청룡",
            },
            {
              seq_no: 1,
              title: "스샷 게시물 1",
              writer: "abc789",
              created_at: "24.02.20",
              img: "link",

              server: "백호",
            },
            {
              seq_no: 1,
              title: "스샷 게시물 1",
              writer: "test99",
              created_at: "24.02.20",
              img: "link",

              server: "혈룡",
            },
          ].map((e, i) => (
            <BoardListItem key={i} data={e} />
          ))}
        </div>
        <div
          style={{
            margin: "10px 0",
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          페이지네이션
        </div>
        <div className={styles.search_box}>
          <input className={styles.search_input} />
          <button className={styles.search_button}>검색</button>
        </div>
      </div>
    </LayoutLogin>
  )
}

export default ScreenshotboardPage
