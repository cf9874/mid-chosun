import Image from "next/image"
import { RankListItemSummary } from "./rank.summary.item"
import styles from "./rank.summary.module.scss"
import { imgAsset } from "assets"

export const RankSummary = (props: IRankProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.rank_title_box}>
        <div className={styles.rank_title}>랭킹 Top 10</div>
        <div className={styles.more_button}>
          <Image src={imgAsset.plusButton} width={24} height={24} alt="more_button" />
        </div>
      </div>
      <div className={styles.rank_box}>
        <div className={styles.rank_header}>
          <div className={styles.rank_header_item}>순위</div>
          <div className={styles.rank_header_item_divider} />
          <div className={styles.rank_header_item}>캐릭명</div>
          <div className={styles.rank_header_item_divider} />
          <div className={styles.rank_header_item}>직업</div>
        </div>
        {props.rankList.map((item, index) => {
          return <RankListItemSummary key={index} data={item} displayIdx={3} index={index} />
        })}
      </div>
    </div>
  )
}
interface IRankProps {
  rankList: { rank: number; nick: string; class: string }[]
}
