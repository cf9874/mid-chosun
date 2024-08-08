import { LayoutLogin } from "component/layout"
// import { BasicTab } from "component/tab.basic"
// import { useState } from "react"
import styles from "./index.module.scss"
const StoryPage = () => {
  // const [selectCategory, setSelectCategory] = useState("미르의 전설")
  // const onChnageCategory = (category: string) => {
  //   setSelectCategory(category)
  // }
  return (
    <LayoutLogin>
      <div>
        {/* <BasicTab
          category={["미르의 전설", "게임배경", "캐릭터", "곤륜이야기"]}
          currentValue={selectCategory}
          onChnage={onChnageCategory}
        /> */}
        <div className={styles.page_title}>
          {/* {selectCategory} */}
          미르의 전설
        </div>
        <div>
          <div style={{}}>contents</div>
          <div className={styles.contents_box}></div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default StoryPage
