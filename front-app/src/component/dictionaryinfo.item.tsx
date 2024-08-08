import Image from "next/image"
import styles from "./dictionaryinfo.item.module.scss"

interface IDictionaryInfoListItem {
  data: { title?: string; img: string; desc?: string; created_at?: string }
  width?: number
  height?: number
}

export const DictionaryInfoListItem = ({ data, width = 150, height = 90 }: IDictionaryInfoListItem) => {
  return (
    <div className={styles.list_container}>
      <div>
        <Image className={styles.list_image} src={data.img} width={width} height={height} alt={data.title} />
      </div>
      <div className={styles.item_wrapper}>
        <div className={styles.item_title}>{data.title ? data.title : ""}</div>
        <div className={styles.item_desc}>{data.desc ? data.desc : ""}</div>
        <div className={styles.item_created}>{data.created_at ? data.created_at : ""}</div>
      </div>
    </div>
  )
}
