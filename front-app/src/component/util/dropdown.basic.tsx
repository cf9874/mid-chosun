import { Dispatch, SetStateAction } from "react"
import styles from "./dropdown.basic.module.scss"
import { setDropdownOpen } from "store/redux/config"
import { useAppSelector, useAppDispatch } from "hooks"
import { shallowEqual } from "react-redux"

export const BasicDropDown = (props: IProps) => {
  const defaultMenu = props.menuList.find(menu => menu.id === props.defaultValue)

  const { dropdown } = useAppSelector(state => state.configReducer, shallowEqual)

  const dropDownOpenDispatch = useAppDispatch(setDropdownOpen)

  console.log(dropdown)

  // const [selected, setSelected] = useState(false)
  const selected = dropdown.find(v => v.id === props.id)?.isOpen

  if (!defaultMenu) {
    throw new Error("메뉴리스트에 id가 없음")
  }

  return (
    <div
      className={`${props.styles ? props.styles.container : styles.container} ${selected ? (props.styles ? props.styles.selected : styles.selected) : ""}`}
    >
      <div
        onClick={() => {
          // if (!selected) {
          //   console.log(!selected)

          // }
          dropDownOpenDispatch({ id: props.id, isOpen: !selected })

          // setSelected(toggle => !toggle)
        }}
      >
        {defaultMenu?.content}
      </div>
      <div className={props.styles ? props.styles.content : styles.content}>
        {props.menuList.map(menu => (
          <div
            key={menu.id}
            id={`${menu.id}`}
            onClick={() => {
              props.setSelectedId(menu.id)
              dropDownOpenDispatch({ id: props.id, isOpen: false })
            }}
          >
            {menu.content}
          </div>
        ))}
      </div>
    </div>
  )
}

interface IProps {
  id: string
  defaultValue: number
  menuList: { id: number; content: string }[]
  setSelectedId: Dispatch<SetStateAction<number>>
  styles?: {
    [key: string]: string
  }
}
