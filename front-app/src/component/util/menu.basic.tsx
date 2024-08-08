import { Dispatch, SetStateAction } from "react"
import styles from "./menu.basic.module.scss"

export const BasicMenu = (props: Iprops) => {
  return (
    <div className={props.styles ? props.styles.container : styles.container}>
      {props.menuList.map(menu => (
        <div
          className={`${props.styles ? props.styles.menuBox : styles.menuBox} ${props.selectedValue === menu.id ? (props.styles ? props.styles.selected : styles.selected) : ""}`}
          key={menu.id}
          onClick={() => props.setSelectedId(menu.id)}
        >
          {menu.name}
        </div>
      ))}
    </div>
  )
}

interface Iprops {
  menuList: { id: number; name: string }[]
  selectedValue: number | null
  setSelectedId: Dispatch<SetStateAction<number | null>>
  styles?: {
    [key: string]: string
  }
}
