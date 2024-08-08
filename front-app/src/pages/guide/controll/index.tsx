import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import Image from "next/image"
import { imgAsset } from "assets"
const ControllGuidePage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>조작법</div>
        <div className={styles.controll_block}>
          <div className={styles.controll_title}>- 키보드</div>
          <div className={styles.keyboard_img_wrapper}>
            <Image src={imgAsset.ctrlGuideImageKeyboard1} width={751} height={286} alt="keyboard_01" />
          </div>
          <div className={styles.keyboard_controll_table_wrapper}>
            <div className={styles.keyboard_controll_table}>
              <div className={styles.keyboard_controll_table_header}>
                <div className={styles.keyboard_part_img_wrapper}>
                  <Image src={imgAsset.ctrlGuideImageKeyboard2} width={144} height={90} alt="keyboard_02" />
                </div>
              </div>
              <div className={styles.keyboard_controll_table_item}>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>F1 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>도술/무공 지정 및 사용</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>F2-F8 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>도술/무공 지정 및 사용</span>
                </div>
              </div>
            </div>
            <div className={styles.keyboard_controll_table}>
              <div className={styles.keyboard_controll_table_header}>
                <div className={styles.keyboard_part_img_wrapper}>
                  <Image src={imgAsset.ctrlGuideImageKeyboard3} width={109} height={127} alt="keyboard_03" />
                </div>
              </div>
              <div className={styles.keyboard_controll_table_item}>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>PrintScreen - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>스크린샷</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>Home - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>행남 창 호출</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>PageUp - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>도술 무공 창호출</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>End - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>협객창 호출</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>Page Down - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>옵션 창 호출</span>
                </div>
              </div>
            </div>
            <div className={styles.keyboard_controll_table}>
              <div className={styles.keyboard_controll_table_header}>
                <div className={styles.keyboard_part_img_wrapper}>
                  <Image src={imgAsset.ctrlGuideImageKeyboard4} width={74} height={41} alt="keyboard_04" />
                </div>
              </div>
              <div className={styles.keyboard_controll_table_item}>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>F9 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>
                    소모단축창 아이템 왼쪽 상단부터 사용
                  </span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>F10 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>
                    소모단축 창 아이템 오른쪽 하단부터 사용
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.keyboard_controll_table}>
              <div className={styles.keyboard_controll_table_header}>
                <div className={styles.keyboard_part_img_wrapper}>
                  <Image src={imgAsset.ctrlGuideImageKeyboard5} width={107} height={41} alt="keyboard_05" />
                </div>
              </div>
              <div className={styles.keyboard_controll_table_item}>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>ESC - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>모든 창닫기</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>F11 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>자동연타 호출</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>F12 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>자동무공 호출</span>
                </div>
              </div>
            </div>
            <div className={styles.keyboard_controll_table}>
              <div className={styles.keyboard_controll_table_header}>
                <div className={styles.keyboard_part_img_wrapper}>
                  <Image src={imgAsset.ctrlGuideImageKeyboard6} width={157} height={145} alt="keyboard_06" />
                </div>
              </div>
              <div className={styles.keyboard_controll_table_item}>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>귓속말 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>
                    /w 캐릭터이름 [enter] 또는 Ctrl+X
                  </span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>일반대화 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>Ctrl+Z</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>맵on/off - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>Ctrl+Q</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>대화차단 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>/차단 캐릭터이름</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>차단해제 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>/풀림 캐릭터이름</span>
                </div>
              </div>
            </div>
            <div className={styles.keyboard_controll_table}>
              <div className={styles.keyboard_controll_table_header}>
                <div className={styles.keyboard_part_img_wrapper}>
                  <Image src={imgAsset.ctrlGuideImageKeyboard7} width={179} height={71} alt="keyboard_07" />
                </div>
              </div>
              <div className={styles.keyboard_controll_table_item}>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>
                    아래 내용은 테 스트 서버 클라 이언트 전용입니다.
                  </span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>귓속말 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>/w(ᄌ) 캐릭터이름</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>귓속말답신 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>(귓속말을 받은 후) /r(ㄱ) ENTER</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>협객말 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>(협객단원인 경우)/p(ㅔ) ENTER</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>문파말 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>(문원인 경우)/g(ᄒ) ENTER</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>전음 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}> (전음부 필요)/a(ᄆ)서 ENTER</span>
                </div>
                <div className={styles.keyboard_controll_table_item_row}>
                  <span className={styles.keyboard_controll_table_item_row_title}>일반말변환 - </span>
                  <span className={styles.keyboard_controll_table_item_row_desc}>
                    (아무것도 입력하지 않은상태에서)/ ←(BACK SAPCE)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.controll_title}>- 마우스</div>
          <div className={styles.mouse_controll_table}>
            <div className={styles.mouse_controll_table_section}>
              <div className={styles.mouse_controll_table_item}>
                <Image src={imgAsset.ctrlGuideImageMouse1} width={195} height={282} alt="mouse_01" />
              </div>
            </div>
            <div className={styles.mouse_controll_table_section}>
              <div className={styles.mouse_controll_table_header}>
                <Image src={imgAsset.ctrlGuideImageMouse2} width={90} height={90} alt="mouse_01" />
              </div>
              <div className={styles.mouse_controll_table_item}>
                <div className={styles.mouse_controll_table_item_row}>
                  <div className={styles.mouse_controll_table_item_row_title}>캐릭터 이동</div>
                  <div className={styles.mouse_controll_table_item_row_desc}>좌 버튼 한번 클릭</div>
                </div>
                <div className={styles.mouse_controll_table_item_row}>
                  <div className={styles.mouse_controll_table_item_row_title}>몬스터 공격</div>
                  <div className={styles.mouse_controll_table_item_row_desc}>몬스터에 마우스 얹은 상태에서 좌클릭</div>
                </div>
                <div className={styles.mouse_controll_table_item_row}>
                  <div className={styles.mouse_controll_table_item_row_title}>연속 공격</div>
                  <div className={styles.mouse_controll_table_item_row_desc}>좌 버튼 더블 클릭</div>
                </div>
                <div className={styles.mouse_controll_table_item_row}>
                  <div className={styles.mouse_controll_table_item_row_title}>싸우기 모드 </div>
                  <div className={styles.mouse_controll_table_item_row_desc}>
                    Tap 버튼을 눌러 해골 마크가 뜨면 켜진 상태이며, 한번 더 누르면 해제가 되나 10초 동안 해제가 불가능
                    하다.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mouse_controll_table_section}>
              <div className={styles.mouse_controll_table_header}>
                <Image src={imgAsset.ctrlGuideImageMouse3} width={90} height={90} alt="mouse_01" />
              </div>
              <div className={styles.mouse_controll_table_item}>
                <div className={styles.mouse_controll_table_item_row}>
                  <div className={styles.mouse_controll_table_item_row_title}>정보보기 </div>
                  <div className={styles.mouse_controll_table_item_row_desc}>
                    사람에 마우스 얹은 상태에서 우클릭후 눈모양 아이콘 클릭
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default ControllGuidePage
