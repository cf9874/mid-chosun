import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { BasicMenu } from "component/util"
import { useState } from "react"
import customInfoMenuStyle from "component/util/menu.custom.info.module.scss"

const menuList = [
  { id: 1, name: "대장장이" },
  { id: 2, name: "향단이" },
  { id: 3, name: "주모" },
  { id: 4, name: "할아버지" },
  { id: 5, name: "약재상" },
  { id: 6, name: "유니크1" },
  { id: 7, name: "유니크2" },
]
const ItemInfoPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1)
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>아이템</div>
        <BasicMenu
          menuList={menuList}
          selectedValue={selectedId}
          setSelectedId={setSelectedId}
          styles={customInfoMenuStyle}
        />
        <div className={styles.item_info_wrapper}>
          <div className={styles.item_info_title}>초기수련용 무기</div>
          <div className={styles.item_info_table_header}>
            <div className={styles.item_info_table_header_item}>그림</div>
            <div className={styles.item_info_table_header_item}>명칭</div>
            <div className={styles.item_info_table_header_item}>가격</div>
            <div className={styles.item_info_table_header_item}>효과</div>
            <div className={styles.item_info_table_header_item}>필요능력치(힘,민,지,기)</div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>
              <div className={styles.item_img}></div>
            </div>
            <div className={styles.item_info_table_item}>목봉</div>
            <div className={styles.item_info_table_item}>0</div>
            <div className={styles.item_info_table_item}>공격력 5</div>
            <div className={styles.item_info_table_item}>11/11/11/11</div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>
              <div className={styles.item_img}></div>
            </div>
            <div className={styles.item_info_table_item}>나무망치</div>
            <div className={styles.item_info_table_item}>0</div>
            <div className={styles.item_info_table_item}>공격력 14</div>
            <div className={styles.item_info_table_item}>30/30/30/30</div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>
              <div className={styles.item_img}></div>
            </div>
            <div className={styles.item_info_table_item}>지팡이</div>
            <div className={styles.item_info_table_item}>1</div>
            <div className={styles.item_info_table_item}>공격력 24</div>
            <div className={styles.item_info_table_item}>48/48/48/48</div>
          </div>
          <div className={styles.item_info_title}>검객 무기</div>
          <div className={styles.item_info_table_header}>
            <div className={styles.item_info_table_header_item}>그림</div>
            <div className={styles.item_info_table_header_item}>명칭</div>
            <div className={styles.item_info_table_header_item}>가격</div>
            <div className={styles.item_info_table_header_item}>효과</div>
            <div className={styles.item_info_table_header_item}>필요능력치(힘,민,지,기)</div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>
              <div className={styles.item_img}></div>
            </div>
            <div className={styles.item_info_table_item}>비수</div>
            <div className={styles.item_info_table_item}>1</div>
            <div className={styles.item_info_table_item}>공격력 54</div>
            <div className={styles.item_info_table_item}>93/65/37/37</div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default ItemInfoPage
