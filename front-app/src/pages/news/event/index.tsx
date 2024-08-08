import { LayoutLogin, NoticeListHeader } from "component/layout"
import styles from "./index.module.scss"
import { useRouter } from "next/router"

const EventPage = () => {
  const router = useRouter()
  const list = [
    {
      seq_no: 1,
      title: "2024 설 이벤트",
      created_at: "24.02.20",
      views: 3172,
      pinned: false,
    },
    {
      seq_no: 2,
      title: "2023 겨울 이벤트",
      created_at: "24.02.20",
      views: 1585,
      pinned: false,
    },
    {
      seq_no: 3,
      title: "2023 환영서버 이벤트",
      created_at: "24.02.14",
      views: 3417,
      pinned: false,
    },
  ]
  return (
    <LayoutLogin>
      <div>
        <div className={styles.notice_list_contianer}>
          <NoticeListHeader />
          {list.map((e, i) => (
            <div key={i} className={styles.list_item}>
              {e.pinned ? (
                <div className={styles.pinned_item_no}>[ 공지 ]</div>
              ) : (
                <div className={styles.item_no}>{e.seq_no}</div>
              )}
              <div className={styles.item_title} onClick={() => void router.push(`/news/notice/detail?id=${e.seq_no}`)}>
                {e.title}
              </div>
              <div className={styles.item_created_at}>{e.created_at}</div>
              <div className={styles.item_views}>{e.views}</div>
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
      </div>
    </LayoutLogin>
  )
}
export default EventPage
