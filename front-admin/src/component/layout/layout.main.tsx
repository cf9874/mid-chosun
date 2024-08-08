import { Col, Row, Button } from "antd"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import styles from "./layout.main.module.scss"
import menuJson from "json/menu.json"
import { SideMenu } from "./sidemenu"
import Image from "next/image"
import { imgAsset } from "assets"
import { apiUtil } from "apis/api.util"

export const LayoutMain = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const [menu, setMenu] = useState<{
    title: string
    route: string
    submenu: {
      title: string
      route: string
    }[]
  }>()
  useEffect(() => {
    const path = router.pathname.split("/")[1]
    const menu = menuJson.find(menu => menu.route === "/" + path)
    setMenu(menu)
  }, [router.pathname])

  const logout = () => {
    apiUtil.removeUserData()
    void router.push("/")
  }

  return (
    menu && (
      <Col className={styles.container}>
        <Row className={styles.header}>
          <Col className={styles.logo_box}>
            <Image src={imgAsset.logo} height={80} width={200} alt="logo" />
          </Col>
          <Row className={styles.top_menu_wrapper} align={"bottom"}>
            {menuJson.map((data, index) => {
              return (
                <Col
                  key={index}
                  className={"/" + router.pathname.split("/")[1] === data.route ? styles.menu_active : styles.menu}
                  onClick={() => void router.push(data.route + "/" + data.submenu[0].route)}
                >
                  {data.title}
                </Col>
              )
            })}
            <Col className={styles.logout_box}>
              <Button onClick={logout}>로그아웃</Button>
            </Col>
          </Row>
        </Row>
        <Row className={styles.main_container}>
          <Col className={styles.side_menu_box}>
            <SideMenu menu={menu} />
          </Col>
          <Col className={styles.children}>{children}</Col>
        </Row>
      </Col>
    )
  )
}
