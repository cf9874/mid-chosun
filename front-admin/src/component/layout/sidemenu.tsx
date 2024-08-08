import { Menu, MenuProps, Row } from "antd"
import { useRouter } from "next/router"
import { getMenuItem } from "utils"

export const SideMenu = ({
  menu,
}: {
  menu: {
    title: string
    route: string
    submenu: {
      title: string
      route: string
    }[]
  }
}) => {
  const router = useRouter()
  const items: MenuProps["items"] = menu.submenu.map(item => getMenuItem(item.title, item.route))

  const onClick: MenuProps["onClick"] = e => {
    void router.push(`${menu.route}/${e.key}`)
  }
  return (
    <>
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          height: 50,
          fontSize: 20,
          borderRight: "1px solid #f0f0f0",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        {menu.title}
      </Row>
      <Menu onClick={onClick} style={{ width: 250, height: "100%" }} mode="inline" items={items} />
    </>
  )
}
