import { useRouter } from "next/router"
import menuJeson from "json/menu.json"
import styles from "./menu.header.module.scss"
import Image from "next/image"
import { imgAsset } from "assets"
export const MenuHeader = () => {
  const router = useRouter()

  return (
    <div className={styles.menu_container}>
      {menuJeson.map((menu, index) => {
        return (
          <div key={index} className={styles.menu_box}>
            <div className={styles.menu_nav}>
              <Image
                className={styles.menu_icon}
                width={30}
                height={30}
                src={imgAsset.menuIconActive}
                alt="menu_icon"
              ></Image>
              {menu.main_title !== "고객센터" ? (
                <div
                  className={styles.menu_title}
                  onClick={() => router.push(`/${menu.route}/${menu.sub_title[0].eng}`)}
                >
                  {menu.main_title}
                </div>
              ) : (
                <a
                  className={styles.menu_title}
                  // href="https://www.google.com/" target="_blank"
                >
                  {menu.main_title}
                </a>
              )}
            </div>
            {menu.sub_title.map((e, i) => {
              return (
                <div key={e.kor + i} className={styles.sub_menu_group}>
                  <div className={styles.block} />
                  {menu.main_title !== "고객센터" ? (
                    <div className={styles.menu_item} onClick={() => router.push(`/${menu.route}/${e.eng}`)}>
                      {e.kor}
                    </div>
                  ) : (
                    <a
                      className={styles.menu_item}
                      // href="https://www.google.com/" target="_blank"
                    >
                      {e.kor}
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
