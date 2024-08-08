import styles from "./navigaition.item.module.scss"

interface INavListItem {
  index: number
  title: string
}

export const NavListItem = ({ index, title }: INavListItem) => {
  return (
    <div className={index === 0 ? styles.list_container_top : styles.list_container}>
      <div className={styles.list_item} onClick={() => console.log(title)}>
        <div className={styles.list_title}>{title}</div>
        <div className={styles.list_arrow}>〉</div>
      </div>
    </div>
  )
}
