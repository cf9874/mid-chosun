import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { BasicMenu } from "component/util"
import { useState } from "react"
import customInfoMenuStyle from "component/util/menu.custom.info.module.scss"

const menuList = [
  { id: 1, name: "수련장" },
  { id: 2, name: "마을" },
  { id: 3, name: "월정사" },
  { id: 4, name: "진악산" },
  { id: 5, name: "일본" },
  { id: 6, name: "동굴" },
  { id: 7, name: "조선" },
]

const MonsterInfoPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1)

  // const data = list.find(e => e.id === selectedId)
  const data = [
    { img: "", name: "침착한왜군보병", level: "365 (265~385)", item: "현철", spot: "암흑굴" },
    { img: "", name: "침착한조총병", level: "365 (265~385)", item: "홍목", spot: "암흑굴" },
  ]
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>몬스터</div>
        <BasicMenu
          menuList={menuList}
          selectedValue={selectedId}
          setSelectedId={setSelectedId}
          styles={customInfoMenuStyle}
        />
        <div className={styles.monster_info_wrapper}>
          <div className={styles.monster_info_table_header}>
            <div className={styles.monster_info_table_header_item}>그림</div>
            <div className={styles.monster_info_table_header_item}>이름</div>
            <div className={styles.monster_info_table_header_item}>레벨(권장레벨)</div>
            <div className={styles.monster_info_table_header_item}>아이템</div>
            <div className={styles.monster_info_table_header_item}>위치</div>
          </div>
          {data.map((item, index) => (
            <div className={styles.monster_info_table} key={index}>
              <div className={styles.monster_info_table_item}>
                <div className={styles.item_img}></div>
              </div>
              <div className={styles.monster_info_table_item}>{item.name}</div>
              <div className={styles.monster_info_table_item}>{item.level}</div>
              <div className={styles.monster_info_table_item}>{item.item}</div>
              <div className={styles.monster_info_table_item}>{item.spot}</div>
            </div>
          ))}
        </div>
      </div>
    </LayoutLogin>
  )
}
export default MonsterInfoPage
