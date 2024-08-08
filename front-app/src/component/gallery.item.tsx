import styles from "./gallery.item.module.scss"

interface IGalleryListItem {
  data: {
    seq_no: number
    title: string
    img: string
  }
  onClick?: () => void
}

export const GalleryListItem = ({ data, onClick }: IGalleryListItem) => {
  return (
    <div className={styles.list_item} onClick={onClick}>
      <div className={styles.item_main}>
        <div className={styles.item_image}>{data.img}</div>
        <div className={styles.item_title}>{data.title}</div>
      </div>
    </div>
  )
}
