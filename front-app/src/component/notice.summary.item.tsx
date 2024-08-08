import styles from "./notice.summary.item.module.scss"

export const NoticeListItemSummary = ({ data }: INoticekListItemSummary) => {
  return (
    <div className={styles.notice_row}>
      <div className={styles.notice_title}>{data.title}</div>
      <div className={styles.notice_date}>{data.date}</div>
    </div>
  )
}
interface INoticekListItemSummary {
  data: {
    title: string
    date: string
  }
}
