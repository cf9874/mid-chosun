import styles from "./pagination.module.scss"

interface IPaginationProps {
  page: number
  take: number
  totalPage: number
  setCurrent: (page: number) => void
}

export const Pagination1 = (props: IPaginationProps) => {
  const { page, take, totalPage, setCurrent } = props

  const pageCount = Math.floor(totalPage * 0.1) > Math.floor((page - 1) * 0.1) ? take : totalPage % take
  const startPage = Math.ceil(page / take) * take - take + 1

  const pageArray = Array(pageCount)
    .fill(0)
    .map((e, i) => {
      return startPage + i
    })
  return (
    <div className={styles.pagination_container}>
      <button className={styles.button} onClick={() => setCurrent(1)}>
        {"<<"}
      </button>
      <button
        className={styles.button}
        onClick={() => {
          if (page < 2) return
          props.setCurrent(page - 1)
        }}
      >
        {"<"}
      </button>
      <div className={styles.page_number_box}>
        {pageArray.map((e, i) => (
          <div
            key={i}
            className={e === page ? styles.page_number_selected : styles.page_number}
            onClick={() => setCurrent(i + startPage)}
          >
            {i + startPage}
          </div>
        ))}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          if (totalPage === page) return
          setCurrent(page + 1)
        }}
      >
        {">"}
      </button>
      <button className={styles.button} onClick={() => setCurrent(totalPage)}>
        {">>"}
      </button>
    </div>
  )
}
