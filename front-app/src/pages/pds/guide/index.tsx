import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import Image from "next/image"
import { imgAsset } from "assets"

const DownLoadGuidePage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>다운로드</div>
        <div className={styles.content_title}>- 클라이언트 다운로드</div>
        <div className={styles.content_desc}>클라이언트를 다운로드 후에 설치하여야 게임을 즐기실 수 있습니다.</div>
        <div className={styles.image_box}>
          <Image src={imgAsset.downloadGuideImage1} alt="download_guide_01" />
        </div>
        <div className={styles.content_title}>- 프로그램 설치</div>
        <div className={styles.content_desc}>
          프로그램 설치 후 바탕화면의 아이콘을 더블 클릭하시면 게임이 실행됩니다. 버젼이 낮을 경우 자동 패치 프로그램 이
          실행되며 아래의 그림과 같은 런처가 등장합니다. 클라이언트에 따라 접속 할 수 있는 서버가 다릅니다.
        </div>
        <div className={styles.image_box_wrapper}>
          <div className={styles.image_box_wrapper_table}>
            <div className={styles.image_box_wrapper_table_header}>런처화면</div>
            <div className={styles.image_box_wrapper_table_item}>
              <div className={styles.image_box}>
                <Image src={imgAsset.downloadGuideImage2} width={418} height={278} alt="download_guide_02" />
              </div>
            </div>
          </div>
          <div className={styles.image_box}>
            <div className={styles.download_info_text}>
              chosun_setup.exe 실행시 아래와 같은 화면이 나오시면, 빨간부분 <strong>[추가정보]</strong> 를 클릭하시면
              설치하실 수 있습니다.
            </div>
            <Image src={imgAsset.downloadGuideImage3} alt="download_guide_03" />
          </div>
        </div>

        <div className={styles.content_title}>- 서버 선택하기</div>
        <div className={styles.content_desc}>
          서버는 아래와 같이 준비 되어 있습니다. 서버를 선택 후 계정과 비밀번호를 입력하시면 캐릭터 생성 화면으로 이동
          됩니다.
        </div>
        <div className={styles.table}>
          <div className={styles.table_header}>백두대간</div>
          <div className={styles.table_item}>
            <div>12세 이상 누구나 이용할 수 있는 서버 입니다.</div>
            <div>PVP(쌍방 동의 PK)가 가능하며 PK 지역이 매우 한정적 입니다.</div>
          </div>
        </div>
        <div className={styles.content_title}>- 프로그램 설치 후 게임이 안되시면, 아래와 같이 변경해 주세요.</div>
        <div className={styles.content_desc}>
          1. 윈도우 10 하단의 작업표시줄의 오른쪽끝 위쪽화살표 아이콘을 클릭 후 방패모양 아이콘을 클릭하세요. (하 단
          이미지 참고)
        </div>
        <div className={styles.image_box}>
          <Image src={imgAsset.downloadGuideImage4} alt="download_guide_04" />
        </div>
        <div className={styles.content_desc}>
          2. Window 보안 창이 뜨면, 방패모양 아이콘 [바이러스 및 위협 방지]를 클릭하세요. (하단 이미지 참고)
        </div>
        <div className={styles.image_box}>
          <Image src={imgAsset.downloadGuideImage5} alt="download_guide_05" />
        </div>
        <div className={styles.content_desc}>
          3. 바이러스 및 위협 방지 창에서 [바이러스 및 위협 방지 설정]의 [설정관리]를 클릭하세요 (하단 이미지 참고)
        </div>
        <div className={styles.image_box}>
          <Image src={imgAsset.downloadGuideImage6} alt="download_guide_06" />
        </div>
        <div className={styles.content_desc}>
          4. 바이러스 및 위협 방지 설정 창에서 아래쪽으로 내려오면, [제외]에서 [제외 추가 또는 제거]를 클릭하세요. (하단
          이미지 참고)
        </div>
        <div className={styles.image_box}>
          <Image src={imgAsset.downloadGuideImage7} alt="download_guide_07" />
        </div>
        <div className={styles.content_desc}>
          <div>5. 제외 추가 또는 제거에서 [제외 사항 추가]{">>"}[폴더]를 클릭하시고 </div>
          <div>C:\Program Files (x86)\WBornSoft 를 선택후 [폴더 섵택]을 누르세요. (하단 이미지 참고)</div>
        </div>
        <div className={styles.image_box}>
          <Image src={imgAsset.downloadGuideImage8} alt="download_guide_08" />
        </div>
        <div className={styles.content_desc}>
          <div>6. 아래와 같이 +제외사항 추가 하단에 C:\Program Files (x86)₩BornSoft 가 표시되면 됩니다. </div>
          <div>이 후에 홈페이지에서 다운로드 받은 설치파일을 다시 설치해 주시면됩니다. (하단 이미지 참고)</div>
        </div>
        <div className={styles.image_box}>
          <Image src={imgAsset.downloadGuideImage9} alt="download_guide_09" />
        </div>
      </div>
    </LayoutLogin>
  )
}
export default DownLoadGuidePage
