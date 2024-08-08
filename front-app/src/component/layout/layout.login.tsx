import { LayoutFooter } from "."
import styles from "./layout.login.module.scss"
import { useRouter } from "next/router"
import { MenuHeader } from "./menu.header"
import Image from "next/image"
import { imgAsset } from "assets"
import { ReactNode } from "react"
import { LoginBox } from "component/loginbox"
export const LayoutLogin = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.top_wrapper}>
        <div className={styles.bottom_wrapper}>
          <div className={styles.title_menu_box}>
            <div className={styles.logo} onClick={() => void router.push("/")}>
              <Image src={imgAsset.logo} width={300} height={162} alt="logo" />
            </div>
            <div className={styles.menu}>
              <MenuHeader />
            </div>
          </div>
          <div className={styles.content_bg}>
            <div className={styles.contents_wrapper}>
              <div className={styles.content_left}>
                <LoginBox />
              </div>
              <div className={styles.content_right}>
                <div className={styles.children_wrapper}>{children}</div>
              </div>
            </div>
          </div>
          <LayoutFooter />
        </div>
      </div>
    </div>
  )
}
