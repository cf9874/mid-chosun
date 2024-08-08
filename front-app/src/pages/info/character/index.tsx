import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import Image from "next/image"
import { imgAsset } from "assets"
const CharacterInfoPage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>캐릭터</div>
        <div className={styles.character_info_title}> - 협객의 4가지 직업</div>
        <div className={styles.character_info_desc}>
          직업과 함께 성별을 선택 할 수 있습니다. 성별은 능력치에 영향을 주지 않습니다.
        </div>
        <div className={styles.class_table_wrapper}>
          <div className={styles.class_table}>
            <div className={styles.class_table_item_img}>
              <div className={styles.class_img}>
                <Image src={imgAsset.characterImage1} alt="class_1" />
              </div>
            </div>
            <div className={styles.class_table_item}>
              <div className={styles.class_name}>검객</div>
              <div className={styles.class_desc}>
                무공이 가장 높으나 정식력이 낮아 도술은 잘 사용하지 못합니다.
                <br />
                하지만 접근전에서는 매우 강력한 힘을 나타냅니다.
              </div>
            </div>
          </div>
          <div className={styles.class_table}>
            <div className={styles.class_table_item_img}>
              <div className={styles.class_img}>
                <Image src={imgAsset.characterImage2} alt="class_2" />
              </div>
            </div>
            <div className={styles.class_table_item}>
              <div className={styles.class_name}>궁수</div>
              <div className={styles.class_desc}>
                무공이 높아 공격력이 좋고 정식력은 중간정도입니다. 검객만큼 공격력이 강하지는 않으나 다양한 활 기술을
                사용하여 색 다른 전술을 발휘 할 수 있습니다.
                <br />
                하지만 접근전에서는 매우 강력한 힘을 나타냅니다.
              </div>
            </div>
          </div>
          <div className={styles.class_table}>
            <div className={styles.class_table_item_img}>
              <div className={styles.class_img}>
                <Image src={imgAsset.characterImage3} alt="class_3" />
              </div>
            </div>
            <div className={styles.class_table_item}>
              <div className={styles.class_name}>도사</div>
              <div className={styles.class_desc}>
                도술이 뛰어나지만 무공은 매우 약합니다.
                <br />
                비급도술을 익히게 되면 매우 강력한 캐릭터가 됩니다.
              </div>
            </div>
          </div>
          <div className={styles.class_table}>
            <div className={styles.class_table_item_img}>
              <div className={styles.class_img}>
                <Image src={imgAsset.characterImage4} alt="class_4" />
              </div>
            </div>
            <div className={styles.class_table_item}>
              <div className={styles.class_name}>승려</div>
              <div className={styles.class_desc}>
                도사와 마찬가지로 무공은 매우 약하지만 도술이 뛰어납니다.
                <br />
                하지만 치료술이 도사보다 매우 뛰어난 편입니다.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.character_info_title}> - 능력치</div>
        <div className={styles.character_info_desc}>능력치 4가지 구성. [힘,민첩성,지력,기]</div>
        <div className={styles.ability_table_wrapper}>
          <div className={styles.ability_table}>
            <div className={styles.class_table_item_header}>힘</div>
            <div className={styles.class_table_item}>물리 공격력 증가</div>
            <div className={styles.class_table_item_header}>지력</div>
            <div className={styles.class_table_item}>지력공격력증가</div>
            <div className={styles.class_table_item_header}>민첩성</div>
            <div className={styles.class_table_item}>회피률증가</div>
            <div className={styles.class_table_item_header}>기</div>
            <div className={styles.class_table_item}>기공격력증가</div>
          </div>
        </div>
        <div className={styles.character_info_title}> - 캐릭터 생성시 기본 능력치</div>
        <div className={styles.default_ability_table_wrapper}>
          <div className={styles.default_ability_info_table_header}>
            <div className={styles.default_ability_info_table_header_item}>직업</div>
            <div className={styles.default_ability_info_table_header_item}>능력치(힘/민/기/지)</div>
            <div className={styles.default_ability_info_table_header_item}>레벨 업 시 보너스 포인트</div>
            <div className={styles.default_ability_info_table_header_item}>환생 레벨 업 시 보너스 포인트</div>
          </div>
          <div className={styles.default_ability_info_table}>
            <div className={styles.default_ability_info_table_item_header}>검객</div>
            <div className={styles.default_ability_info_table_item}>15/13/11/11</div>
            <div className={styles.default_ability_info_table_item}>3/2/1/1 (+2)</div>
            <div className={styles.default_ability_info_table_item}>3/2/1/1 (+3)</div>
          </div>
          <div className={styles.default_ability_info_table}>
            <div className={styles.default_ability_info_table_item_header}>궁사</div>
            <div className={styles.default_ability_info_table_item}>13/15/11/11</div>
            <div className={styles.default_ability_info_table_item}>2/3/1/1 (+2)</div>
            <div className={styles.default_ability_info_table_item}>2/3/1/1 (+3)</div>
          </div>
          <div className={styles.default_ability_info_table}>
            <div className={styles.default_ability_info_table_item_header}>도사</div>
            <div className={styles.default_ability_info_table_item}>11/11/15/13</div>
            <div className={styles.default_ability_info_table_item}>1/1/3/2 (+2)</div>
            <div className={styles.default_ability_info_table_item}>1/1/3/2 (+3)</div>
          </div>
          <div className={styles.default_ability_info_table}>
            <div className={styles.default_ability_info_table_item_header}>승려</div>
            <div className={styles.default_ability_info_table_item}>11/11/13/15</div>
            <div className={styles.default_ability_info_table_item}>1/1/2/3 (+2)</div>
            <div className={styles.default_ability_info_table_item}>1/1/3/3 (+3)</div>
          </div>
        </div>
        <div className={styles.character_info_title}> - 복합 능력치</div>
        <div className={styles.character_info_desc}>[힘,민첩성,지력,기]에 의해 만들어지는 능력치</div>
        <div className={styles.complex_ability_table_wrapper}>
          <div className={styles.complex_ability_info_table}>
            <div className={styles.complex_ability_info_table_item_header}>물리공격력</div>
            <div className={styles.complex_ability_info_table_item}>직접 타격시 공격력. 민첩성과 힘에 비례 증가</div>
          </div>
          <div className={styles.complex_ability_info_table}>
            <div className={styles.complex_ability_info_table_item_header}>민첩성</div>
            <div className={styles.complex_ability_info_table_item}>직접 타격시 방어력. 지력과 기에 비례 증가</div>
          </div>
          <div className={styles.complex_ability_info_table}>
            <div className={styles.complex_ability_info_table_item_header}>도술공격력</div>
            <div className={styles.complex_ability_info_table_item}>도술을 이용한 공격력. 기 또는 지력에 의해 증가</div>
          </div>
          <div className={styles.complex_ability_info_table}>
            <div className={styles.complex_ability_info_table_item_header}>도향력</div>
            <div className={styles.complex_ability_info_table_item}>
              도술공격을 받을 때의 방어력. 힘,민,지,기에 의해 증가
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default CharacterInfoPage
