import styles from "./list.header.module.scss"

export const RankListHeader = ({ flag = "server" }: { flag: "server" | "class" }) => {
  return (
    <div className={styles.rank_nav_container}>
      <div className={styles.item_rank}>랭킹</div>
      <div className={styles.item_server}>서버</div>
      <div className={styles.item_title}>{flag === "server" ? "캐릭터명" : "영웅/주인"}</div>
      <div className={styles.item_level}>레벨</div>
      <div className={styles.item_exp}>경험치</div>
      <div className={styles.item_class}>직업</div>
      <div className={styles.item_diff}>등락폭</div>
    </div>
  )
}
