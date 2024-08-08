import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
const InterfaceGuidePage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.sample_screen_img}></div>
        <div className={styles.interface_block}>
          <span className={styles.interface_title}>1. 게임화면 : </span>
          <span className={styles.interface_desc}>
            자신의 캐릭터가 플레이 하는 화면. 착용중인 무기와 옷이 표시되며, 머리 위에 체력과 도력이 표시됩니다.
          </span>
        </div>
        <div className={styles.interface_block}>
          <span className={styles.interface_title}>2. 미니맵 : </span>
          <span className={styles.interface_desc}>
            현재 있는 맵에서의 자신의 위치를 표시 합니다. 협객을 맺고 있는 상태라면 협객의 위치를 표시하기도 합니다.
            CTRL+Q를 미니맵으로 끄고 켤 수 있습니다.
          </span>
        </div>
        <div className={styles.interface_block}>
          <span className={styles.interface_title}>3. 쌈지창 : </span>
          <span className={styles.interface_desc}>
            소모 아이템을 등록하여 빠르게 사용 할 수 있습니다. 아이템에 표 시되는 숫자는 사용 횟수를 뜻합니다. 수명이
            다된 아이템은 자동으로 등록이 해제 됩니다. F9번은 왼쪽 윗줄부 터 사용하며 F10번은 오른쪽 아래줄 부터
            아이템을 사용합니다.
          </span>
        </div>
        <div className={styles.interface_block}>
          <span className={styles.interface_title}>4. 정보창 : </span>
          <span className={styles.interface_desc}>
            행낭(인벤토리)의 여부를 표시하거나 도력이 모자랄 때 메시지를 표시하며 누구에게 PK 당했는지 표시 합니다.
            정보창에 표시하지 못하는 경우 채팅창에 표시하기도 합니다.
          </span>
        </div>
        <div className={styles.interface_block}>
          <span className={styles.interface_title}>5. 채팅창 : </span>
          <span className={styles.interface_desc}>
            기본적으로 채팅 내용을 표시합니다.채팅은 일반대화, 협객대화, 문파대화,귓속말,전음으로 구분됩니다. 간혹
            정보창에 표시하지 못하는 시스템을 표시하기도 하며 특수 명령으로 일반대화의 글자색을 임의로 변경 할 수
            있습니다.
          </span>
        </div>
        <div className={styles.interface_block}>
          <span className={styles.interface_title}>6. 게이지 : </span>
          <span className={styles.interface_desc}>
            체력바 이미지체력을 표시합니다. 0이 되면 캐릭터는 죽게 됩니 다. 도력바 이미지도력을 표시합니다. 0이 되면
            무공이나 도술을 사용 할 수 없습니다. 레벨바 이미지 레벨을 표 시합니다.경험바 이미지-그래프가 가득 차 오르면
            레벨 업 합니다.
          </span>
        </div>
        <div className={styles.interface_block}>
          <span className={styles.interface_title}>7. 부가효과 : </span>
          <span className={styles.interface_desc}>
            캐쉬 이미지 캐쉬아이템의 지속시간과 종류를 표시합니다. 해 골 이미지-PK 가능 지역을 뜻합니다. 싸우자 모드는
            Tab 버튼으로 설정 가능합니다. 해제는 쿨타임 10초 후에 가능합니다.
          </span>
        </div>
        <div className={styles.interface_block}>
          <span className={styles.interface_title}>8. 단축키 : </span>
          <span className={styles.interface_desc}>개인정보 아이콘-개인정보 창을 호출하거나 닫습니다.</span>
          <div className={styles.interface_desc}>
            (Insert) 자신의 능력치를 확인 할 수 있으며 레벨 업으로 얻은 보너스 포인 트를 여기서 올릴 수 있습니다.
            행남아이콘-행남 창을 호출하거나 닫습니다.
          </div>
          <div className={styles.interface_desc}>
            (Home) 장비를 장착하거나 아이템을 사용 할 수 있습니다. 도술무공 아이 콘도술무공 창을 호출하거나 닫습니다.
          </div>
          <div className={styles.interface_desc}>
            (PageUp) 도술을 무르고 F2~8까지 단축키를 사용할 수 있습니다. 사람찾기 아이콘-사람찾기 창을 호출하거나
            닫습니다.
          </div>
          <div className={styles.interface_desc}>
            (Delete) 사람이름을 입력 후 찾기 버튼이나 Enter를 입력하면 대상의 위치를 알 수 있습니다.
          </div>
          <div className={styles.interface_desc}></div>
          <div className={styles.interface_desc}></div>
          <div className={styles.interface_desc}></div>
        </div>
        <div className={styles.interface_info_title}>{"< 신규 유저를 위한 도움말 안내 >"}</div>
        <div className={styles.interface_block}>
          <div className={styles.interface_title}>가. 협객수련장 안내</div>
          <div className={styles.interface_desc}>
            협객수련장에서 수련을 통해 레벨업을 하실 수 있습니다. 수련은 몸에대한 공격으로 이루어지며 몹위에 마우스
            포인트를 올린 후 왼쪽 마우스 버튼을 누르시면 공격을 할 수 있습니다.
          </div>
        </div>
        <div className={styles.interface_block}>
          <div className={styles.interface_title}>나. 단축키 설명</div>
          <div className={styles.interface_desc}>F1 : 무공해제</div>
          <div className={styles.interface_desc}>F2 ~ F8 : 무공선택 사용키</div>
          <div className={styles.interface_desc}>F9~F10 : 도약창에 있는 도약 먹기</div>
          <div className={styles.interface_desc}>F11 : 공격과 이동의 자동/수동 전호나키</div>
          <div className={styles.interface_desc}>F12 : 특수모양 사용창</div>
          <div className={styles.interface_desc}>Insert : 개인정보창</div>
          <div className={styles.interface_desc}>Home : 착용아이템창, 행낭창</div>
          <div className={styles.interface_desc}>Page Up : 무공창</div>
          <div className={styles.interface_desc}>Delete : 사람찾기창</div>
          <div className={styles.interface_desc}>End : 협객맺기창</div>
          <div className={styles.interface_desc}>Ctrl + 마우스 오른쪽 버튼 : 한번에 같은 도약 선택하기</div>
          <div className={styles.interface_desc}>Tab : 대결 모드 전환</div>
          <div className={styles.interface_desc}>Ctrl + S : 체력, 도력 바 열기/단기</div>
          <div className={styles.interface_desc}>Ctrl + Q : 미니맵 열기/닫기</div>
          <div className={styles.interface_desc}>Ctrl + M : 쪽지창 선택</div>
          <div className={styles.interface_desc}>Ctrl + G : 문파 대화창</div>
          <div className={styles.interface_desc}>Ctrl + X : Ctrl + X를 누른 후 귓말 상대 아이디를 적은 후 대화가능</div>
          <div className={styles.interface_desc}>Ctrl + Z : 일반대화로 변경</div>
          <div className={styles.interface_desc}>/고용 : 신기전부대(성주만 가능)</div>
          <div className={styles.interface_desc}>/추방 : 성안에 있는 사람 추방(성주만 가능)</div>
        </div>
        <div className={styles.interface_block}>
          <div className={styles.interface_title}>다. 대장간 기능</div>
          <div className={styles.interface_desc}>
            필요한 협돈을 구하기 위해서는 대장간 맵에서 몹을 공격하는 것과 같은 방법으로 모루 혹은 장작을 두드리시면
            됩니다.
          </div>
        </div>
        <div className={styles.interface_block}>
          <div className={styles.interface_title}>라. 장터 기능</div>
          <div className={styles.interface_desc}>
            게임상에서 필요한 아이템을 사고 팔 수 있습니다. 종류별로 향단이, 주모, 대장장이, 약재상을 통해 아이템의
            거래가 가능합니다.
          </div>
        </div>
        <div className={styles.interface_block}>
          <div className={styles.interface_title}>마. 마을기능</div>
          <div className={styles.interface_desc}>
            할아버지는 다른 맵으로의 이동을 할 수 있는 소환부를 판매합니다. 할머니는 자신의 아이템과 협돈을 맡기거나
            찾는 기능을 수행합니다.
          </div>
        </div>
        <div className={styles.interface_block}>
          <div className={styles.interface_title}>바. 몹사냥과 레벨업</div>
          <div className={styles.interface_desc}>
            몹을 사냥하시면 경험치가 획득되어 레벨을 올리실 수 있습니다. 자신의 레 벨에 맞는 몸의 선택은 [조합소개]를
            참고하시면 됩니다. 또한 몹에 의해 죽을 시에는 착용중인아이템을 떨어뜨리실 수 있으니 조심 하시기 바랍니다.
          </div>
        </div>
        <div className={styles.interface_block}>
          <div className={styles.interface_title}>사. 문파관련</div>
          <div className={styles.interface_desc}>
            레벨이 200 이상이 되어야 가입 할 수 있습니다. 자세한 내용은 홈페이지 를 참고 하시기 바랍니다.
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default InterfaceGuidePage
