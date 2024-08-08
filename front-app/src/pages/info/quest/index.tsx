import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
const QeustInfoPage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>임무</div>
        <div className={styles.item_info_wrapper}>
          <div className={styles.item_info_title}>
            <div>유저가 일정 레벨에 도달하면 감찰관이나 일부 NPC가 유저에게 임무를 부여 합니다.</div>
            <div>해결 시에는 그에 상응하는 보상이 주어 집니다.</div>
            <div>임무를 통해서만 익힐 수 있는 무공과 도술이 있으며 직업별로 다른 보상이 주어지기도 합니다.</div>
          </div>
          <div className={styles.item_info_table_header}>
            <div className={styles.item_info_table_header_item}>레벨</div>
            <div className={styles.item_info_table_header_item}>임무이름</div>
            <div className={styles.item_info_table_header_item}>내용</div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>100</div>
            <div className={styles.item_info_table_item_quest_name}>일격필살</div>
            <div className={styles.item_info_table_item_desc}>
              이즈하라포구에서 해당 직업의 교관에게 퀘스트를 받아 식칼 10개와 목검 10개를 박달재 주모에게 팔아야 합니다.
            </div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>300</div>
            <div className={styles.item_info_table_item_quest_name}>군마준비</div>
            <div className={styles.item_info_table_item_desc}>
              마을 감찰관이 군마로 사용할 말 100마리를 잡아 달라고 합니다.
            </div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>300</div>
            <div className={styles.item_info_table_item_quest_name}>
              <div>무형검법</div>
              <div>강격</div>
              <div>진금강창</div>
            </div>
            <div className={styles.item_info_table_item_desc}>
              이즈하라포구에서 해당 직업의 교관에게 퀘스트를 받고 호랑이 10마리를 잡 고 직업에 맞는 3강 아이템을
              가져오라고 합니다.
            </div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>10000</div>
            <div className={styles.item_info_table_item_quest_name}>
              <div>청풍쾌검</div>
              <div>심안궁</div>
              <div>파천신공</div>
            </div>
            <div className={styles.item_info_table_item_desc}>
              불곰 10마리를 잡고 월옥 5개를 모아오면 무공으로 보상해 줍니다. 만산령과 토암산에 불곰이 출현합니다.
            </div>
          </div>
          <div className={styles.item_info_table}>
            <div className={styles.item_info_table_item}>10000</div>
            <div className={styles.item_info_table_item_quest_name}>
              <div>태극검법</div>
              <div>연운궁법</div>
              <div>금룡신장</div>
            </div>
            <div className={styles.item_info_table_item_desc}>
              거인병 100명을 쓰러뜨리고 강화 1 용잠을 교관에게 가져가야 합니다.
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default QeustInfoPage
