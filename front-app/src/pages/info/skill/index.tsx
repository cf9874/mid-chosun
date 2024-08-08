import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { BasicMenu } from "component/util"
import { useState } from "react"
import customInfoMenuStyle from "component/util/menu.custom.info.module.scss"
const menuList = [
  { id: 1, name: "도술" },
  { id: 2, name: "무공" },
]

const SkillInfoPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1)

  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>무공/도술</div>
        <BasicMenu
          menuList={menuList}
          selectedValue={selectedId}
          setSelectedId={setSelectedId}
          styles={customInfoMenuStyle}
        />
        {/* 도술 */}
        {selectedId === 1 ? (
          <div className={styles.skill_wrapper}>
            <div className={styles.skill_table_header}>
              <div className={styles.skill_table_header_item}>그림</div>
              <div className={styles.skill_table_header_item}>명칭</div>
              <div className={styles.skill_table_header_item}>사정거리</div>
              <div className={styles.skill_table_header_item}>MP</div>
              <div className={styles.skill_table_header_item}>설명</div>
              <div className={styles.skill_table_header_item}>필요능력치(힘,민,지,기)</div>
            </div>
            <div className={styles.skill_table}>
              <div className={styles.skill_table_item}>
                <div className={styles.skill_img}></div>
              </div>
              <div className={styles.skill_table_item}>독장</div>
              <div className={styles.skill_table_item}>3</div>
              <div className={styles.skill_table_item}>4</div>
              <div className={styles.skill_table_item}>독연기로 공격</div>
              <div className={styles.skill_table_item}>20,20,30,30</div>
            </div>
          </div>
        ) : null}
        {/* 무공 */}
        {selectedId === 2 ? (
          <div className={styles.technique_wrapper}>
            <div className={styles.technique_table_header}>
              <div className={styles.technique_table_header_item}>그림</div>
              <div className={styles.technique_table_header_item}>명칭</div>
              <div className={styles.technique_table_header_item}>레벨제한</div>
              <div className={styles.technique_table_header_item}>효과</div>
            </div>
            <div className={styles.technique_table}>
              <div className={styles.technique_table_item}>
                <div className={styles.technique_img}></div>
              </div>
              <div className={styles.technique_table_item}>일격필살</div>
              <div className={styles.technique_table_item}>100</div>
              <div className={styles.technique_table_item}>일반 공격 도중 강력한 공격력을 상대에게 발휘한다.</div>
            </div>
          </div>
        ) : null}
      </div>
    </LayoutLogin>
  )
}
export default SkillInfoPage
