import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { BoardListHeader } from "component/layout/board.header"

const FreeboardPage = () => {
  return (
    <LayoutLogin>
      <div className={styles.notice_list_contianer}>
        <BoardListHeader />
        {[
          {
            seq_no: 1,
            title: "[완료] 2월 21일(수) 정기점검 안내",
            writer: "admin",
            created_at: "24.02.20",
            views: 3172,
            pinned: true,
            up: 0,
          },
          {
            seq_no: 2,
            title: "청룡의간식 추가판매 예정 안내",
            writer: "admin",
            created_at: "24.02.20",
            views: 1585,
            pinned: true,
            up: 0,
          },
          {
            seq_no: 3,
            title: "혼돈의신전 개선 사전안내 및 유의사항",
            writer: "admin",
            created_at: "24.02.14",
            views: 3417,
            pinned: true,
            up: 0,
          },
          {
            seq_no: 4,
            title: "자유게시판 게시물",
            writer: "abc123",
            created_at: "24.02.14",
            views: 3417,
            pinned: false,
            up: 5,
          },
        ].map((e, i) => (
          <div key={i} className={styles.list_item}>
            {e.pinned ? (
              <div className={styles.pinned_item_no}>[ 공지 ]</div>
            ) : (
              <div className={styles.item_no}>{e.seq_no}</div>
            )}
            <div className={styles.item_title}>{e.title}</div>
            <div className={styles.item_writer}>{e.writer}</div>
            <div className={styles.item_created_at}>{e.created_at}</div>
            <div className={styles.item_views}>{e.views}</div>
            <div className={styles.item_up}>{e.up}</div>
          </div>
        ))}

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

export default FreeboardPage
