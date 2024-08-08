import Image from "next/image"
import { imgAsset } from "assets"
import styles from "./notice.summary.module.scss"
import { NoticeListItemSummary } from "./notice.summary.item"
export const NoticeSummary = (props: INoticeProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.notice_header}>
        <div className={styles.notice_title}>공지사항</div>
        <div className={styles.notice_nav_button}>
          <Image src={imgAsset.plusButton} width={24} height={24} alt="more_button" />
        </div>
      </div>
      <div>
        {props.noticeList.map((item, index) => {
          return <NoticeListItemSummary key={index} data={item} />
        })}
      </div>
    </div>
  )
}
interface INoticeProps {
  noticeList: { title: string; date: string }[]
}
