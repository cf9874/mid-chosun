import { LayoutFooter } from "."
import styles from "./layout.main.module.scss"

export const LayoutMain = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top_wrapper}>
        <div className={styles.bottom_wrapper}>
          <div className={styles.child_container}>{children}</div>
          <LayoutFooter />
        </div>
      </div>
    </div>
  )
}
