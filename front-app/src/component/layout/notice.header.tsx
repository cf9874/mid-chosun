import styles from "./list.header.module.scss"

export const NoticeListHeader = () => {
  return (
    <div className={styles.notice_nav_container}>
      <div>번호</div>
      <div>제목</div>
      <div>날짜</div>
      <div>조회</div>
    </div>
  )
}
