// import { BasicTab } from "component/tab.basic"
// import { useState } from "react"
import styles from "./index.module.scss"
import { LayoutLogin } from "component/layout"
import dayjs from "dayjs"
import { RankListHeader } from "component/layout"
import { RankListItemWide } from "component/rank.item"

const RankPage = () => {
  // const [selectCategory, setSelectCategory] = useState("캐릭터")
  // const onChnageCategory = (category: string) => {
  //   setSelectCategory(category)
  // }
  return (
    <LayoutLogin>
      <div>
        {/* <BasicTab category={["캐릭터", "영웅"]} currentValue={selectCategory} onChnage={onChnageCategory} /> */}
        <div className={styles.rank_info_box}>
          <div className={styles.date}>{dayjs().format("YYYY.MM.DD.")}</div>
          <ul className={styles.rank_info}>
            <li className={styles.rank_info_item}>주간 랭킹은 매주 수요일 점검시간 이후 업데이트 됩니다.</li>
            <li className={styles.rank_info_item}>전체 1,000위 까지만 검색됩니다.</li>
          </ul>
        </div>

        <div className={styles.rank_search_container}>
          <div className={styles.rank_search_title}>
            {/* {selectCategory} 랭킹검색*/}
            캐릭터 랭킹검색
          </div>
          <div className={styles.dropdown}>드롭다운</div>
          <div className={styles.dropdown}>드롭다운</div>
          <div className={styles.rank_search_box}>
            <input
              className={styles.rank_search_input}
              // placeholder={`${selectCategory} 입력`}
              placeholder={"캐릭터 입력"}
            />
            <button className={styles.rank_search_button}>검색</button>
          </div>
        </div>
        <div>
          {/* {selectCategory} 랭킹*/}
          캐릭터 랭킹
        </div>
        <div>
          {["전체서버", "현무", "주작"].map((e, i) => (
            <div key={i} className={styles.server}>
              {e}
            </div>
          ))}
        </div>
        <RankListHeader flag="server" />
        <div className={styles.rank_box}>
          {[
            {
              server: "혈룡",
              nick: "대한",
              img: "#",
              class: "벽혈전사",
              level: 116,
              exp: 22,
              rank_server: 1,
              diff_server: 0,
              rank_class: 1,
              diff_class: 0,
              rank_total: 1,
              diff_total: 0,
            },
            {
              server: "혈룡",
              nick: "대한",
              img: "#",
              class: "벽혈전사",
              level: 116,
              exp: 22,
              diff: 0,
              rank_server: 2,
              diff_server: -1,
              rank_class: 2,
              diff_class: -1,
              rank_total: 2,
              diff_total: -1,
            },
          ].map((e, i) => {
            return <RankListItemWide key={i} index={i} data={e} />
          })}
        </div>
      </div>
    </LayoutLogin>
  )
}
export default RankPage
