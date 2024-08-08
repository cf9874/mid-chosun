import styles from "./rank.summary.item.module.scss"

export const RankListItemSummary = ({ index, data, displayIdx = 3 }: IRankListItemSummary) => {
  return (
    <div className={styles.list_container}>
      <div className={index < displayIdx ? styles.rank_top : styles.rank}>{index + 1}</div>
      <div className={index < displayIdx ? styles.content_top : styles.content}>{data.nick}</div>
      <div className={index < displayIdx ? styles.content_top : styles.content}>{data.class}</div>
    </div>
  )
}

interface IRankListItemSummary {
  index: number
  data: {
    nick: string
    class: string
  }
  displayIdx?: number
}
