import styles from "./list.header.module.scss"

export const BoardListHeader = () => {
  return (
    <div className={styles.board_nav_container}>
      <div className={styles.item_no}>번호</div>
      <div className={styles.item_title}>제목</div>
      <div className={styles.item_writer}>작성자</div>
      <div className={styles.item_created_at}>날짜</div>
      <div className={styles.item_views}>조회</div>
      <div className={styles.item_up}>추천</div>
    </div>
  )
}
