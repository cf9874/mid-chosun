import styles from "./board.item.module.scss"

interface IBoardListItem {
  data: {
    seq_no: number
    title: string
    img: string
    writer?: string
    created_at?: string
    server?: string
  }
  onClick?: () => void
}

export const BoardListItem = ({ data, onClick }: IBoardListItem) => {
  return (
    <div className={styles.list_item} onClick={onClick}>
      <div className={styles.item_main}>
        <div className={styles.item_image}>{data.img}</div>
        <div className={styles.item_title}>{data.title}</div>
      </div>
      <div className={styles.item_writer_box}>
        {data.writer ? (
          <>
            <div className={styles.item_writer}>
              <div className={styles.server}>{data.server} /</div>
              <div className={styles.nick}>{data.writer} </div>
            </div>
            <div className={styles.date}>{data.created_at}</div>
          </>
        ) : null}
      </div>
    </div>
  )
}
