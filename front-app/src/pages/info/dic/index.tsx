import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
const DictionaryPage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.guide_container}>
          <div className={styles.search_wrapper}>
            <div className={styles.search_box}>
              <input className={styles.search_input} placeholder="백과서고 검색하기" />
              <button className={styles.search_button}>검색</button>
            </div>
            <div className={styles.hot_keyword_box}>
              <div className={styles.hot_keyword_icon}>인기</div>
              {["연합문파", "2023 환영서버 이벤트!", "2023 환영서버 신규콘텐츠"].map((e, i) => {
                return (
                  <>
                    {i !== 0 ? <span className={styles.divider}>|</span> : null}
                    <div key={i} className={styles.hot_keyword}>
                      {e}
                    </div>
                  </>
                )
              })}
            </div>
          </div>
          <div className={styles.guide_button_wrapper}>
            <div className={styles.guid_button_box}>
              <div className={styles.guide_img}>이미지</div>
              <div className={styles.huid_main_title}>초보자 안내서</div>
              <div className={styles.huid_sub_title}>미르2가 처음이신가요?</div>
            </div>
            <div className={styles.guid_button_box}>
              <div className={styles.guide_img}>이미지</div>
              <div className={styles.huid_main_title}>귀환고수 안내서</div>
              <div className={styles.huid_sub_title}>귀환을 환영합니다.</div>
            </div>
          </div>
        </div>
        <div className={styles.guide_list_container}>
          <div className={styles.update_list_box}>
            <div className={styles.list_header}>최신 업데이트</div>
            <div className={styles.update_list}>
              {[
                {
                  title: "연합문파",
                  created_at: "23.12.05",
                },
                {
                  title: "연합문파",
                  created_at: "23.12.05",
                },
                {
                  title: "연합문파",
                  created_at: "23.12.05",
                },
                {
                  title: "연합문파",
                  created_at: "23.12.05",
                },
              ].map((e, i) => {
                return (
                  <div key={i} className={styles.update_list_item}>
                    <div className={styles.list_title}>{e.title}</div>
                    <div className={styles.list_date}>{e.created_at}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.main_guide_box}>
            <div className={styles.list_header}>주요 안내</div>

            {[
              {
                title: "연합문파",
                img: "asd",
                desc: "곤륜서버에 새롭게 추가된 연합문파 시스템을 확인해보세요!",
              },
              {
                title: "2023 환영서버 이벤트!",
                img: "asd",
                desc: "높은 경험치와 드롭율의 혜택을 얻고 이벤트 종료 후 각종 ...",
              },
            ].map((e, i) => {
              return (
                <div className={styles.main_guide_box} key={i}>
                  <div className={styles.main_list}>
                    <div className={styles.main_list_image}>{e.img}</div>
                    <div className={styles.main_list_content_group}>
                      <div className={styles.list_title}>{e.title}</div>
                      <div className={styles.list_desc}>{e.desc}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.list_header}>백과서고 목차</div>

        <div className={styles.table_container}>
          <div className={styles.column1}>
            <div className={styles.column_nav}>게임의 시작</div>
            <div className={styles.column_item_list}>
              {[1, 2, 3, 4, 5].map((e, i) => (
                <div key={i} className={styles.column_item}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.column_nav}>아이템</div>
            <div className={styles.column_item_list}>
              {[1, 2, 3, 4, 5].map((e, i) => (
                <div key={i} className={styles.column_item}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column3}>
            <div className={styles.column_nav}>시스템</div>
            <div className={styles.column_item_list}>
              {[1, 2, 3, 4, 5].map((e, i) => (
                <div key={i} className={styles.column_item}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column4}>
            <div className={styles.column_nav}>사냥터와 몬스터</div>
            <div className={styles.column_item_list}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
                <div key={i} className={styles.column_item}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column1_2}>
            <div className={styles.column_nav}>무공</div>
            <div className={styles.column_item_list}>
              {[1, 2, 3, 4, 5].map((e, i) => (
                <div key={i} className={styles.column_item}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column2_2}>
            <div className={styles.column_nav}>퀘스트</div>
            <div className={styles.column_item_list}>
              {[1, 2, 3, 4, 5].map((e, i) => (
                <div key={i} className={styles.column_item}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column3_2}>
            <div className={styles.column_nav}>밀환상점</div>
            <div className={styles.column_item_list}>
              {[1, 2, 3, 4, 5].map((e, i) => (
                <div key={i} className={styles.column_item}>
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default DictionaryPage
