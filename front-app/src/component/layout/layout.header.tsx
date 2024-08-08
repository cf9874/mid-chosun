import styles from "./layout.header.module.scss"

export const LayoutHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header_left}>
          {["미르의전설2", "미르의전설3"].map((e, i) => (
            <div key={i}>
              <span>|</span>
              {e}
            </div>
          ))}
        </div>
        <div className={styles.header_right}>
          {["선물하기", "충전하기", "고객센터"].map((e, i) => (
            <div key={i}>
              {i !== 0 ? <span>|</span> : null}
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
