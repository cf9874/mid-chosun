import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import Image from "next/image"
import { imgAsset } from "assets"

const NpcInfoPage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>NPC</div>
        <div className={styles.npc_table_wrapper}>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage1} alt="npc_01" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                마을 할아버지
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span>
                기능성 아이템 장사꾼
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span>
                웃말, 진악산마을, 아랫말(기능 없음), 야마구치, 이즈라하포구
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span>
                없음
              </div>
            </div>
          </div>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage2} alt="npc_02" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                감찰관
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span>
                감찰관
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span>
                웃말, 수련장, 동래포구, 비무대 입구, 무던, 도산서원, 동구밖, 진악산마을, 비무대, 이즈하라포구, 아랫말,
                현무당, 황룡당, 무량비무대, 운문비무대, 금산비무대, 야마구치, 수원성(외성), 수원성외성2, 진악산성(외성),
                진악산성(외성2), 이즈하라 외성
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span>
                있음
              </div>
            </div>
          </div>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage3} alt="npc_03" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                할머니
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span>
                물건 보관, 캐쉬아이템 전달, 은행기능
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span>
                웃말, 아랫말(기능 없음),
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span>
                없음
              </div>
            </div>
          </div>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage4} alt="npc_04" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                향단이
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span>
                옷장수
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span>
                장터, 동래포구, 진악산마을, 이즈하라포구, 야마구치
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span>
                없음
              </div>
            </div>
          </div>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage5} alt="npc_05" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                개성상인
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span>
                물건 보관, 캐쉬템 전달, 은행기능
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span>
                진악산마을, 야마구치, 이즈라하포구
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span>
                없음
              </div>
            </div>
          </div>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage1} alt="npc_01" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                주모
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span> 각종 술과 먹거리 등 회복 아이템 판매
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span> 장터, 박달재, 진악산마을, 이즈하라포구, 야마구치
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span> 감찰관을 통한 박달재 주모에게 물건 배달 퀘스트가
                있음
              </div>
            </div>
          </div>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage1} alt="npc_01" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                약재상
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span> 회복력이 뛰어난 약재를 판매
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span> 장터, 진악산마을, 이즈하라포구
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span> 없음
              </div>
            </div>
          </div>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage1} alt="npc_01" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                대장장이
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span> 무기와 방어구를 만들어 판매, 아이템 제조, 강화,
                수리
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span> 장터, 진악산마을, 이즈하라포구, 야마구치
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span> 없음
              </div>
            </div>
          </div>
          <div className={styles.npc_table}>
            <div className={styles.npc_table_item_img}>
              <div className={styles.npc_img}>
                <Image src={imgAsset.npcImage1} alt="npc_01" />
              </div>
            </div>
            <div className={styles.npc_table_item}>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>이름 : </span>
                돌쇠
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>기능 : </span> ??
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>장소 : </span> 도산시전 왼쪽 구석
              </div>
              <div className={styles.npc_desc}>
                <span className={styles.npc_desc_title}>임무 : </span> 없음
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default NpcInfoPage
