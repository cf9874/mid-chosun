import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { useRouter } from "next/router"
import Image from "next/image"
import { imgAsset } from "assets"

const DownLoadPage = () => {
  const router = useRouter()
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>다운로드</div>
        <div className={styles.download_title}>- 최소/권장 사양</div>
        <div className={styles.table_wrapper}>
          <div className={styles.table_header}>
            <div className={styles.table_header_item}>구분</div>
            <div className={styles.table_header_item}>최소사양</div>
            <div className={styles.table_header_item}>권장사양</div>
          </div>
          <div className={styles.table_wide}>
            <div className={styles.table_item}>운영체제</div>
            <div className={styles.table_item}>Windows 10 이상</div>
          </div>
          <div className={styles.table}>
            <div className={styles.table_item}>CPU</div>
            <div className={styles.table_item}>펜티엄4 이상</div>
            <div className={styles.table_item}>듀얼코어 이상</div>
          </div>
          <div className={styles.table}>
            <div className={styles.table_item}>그래픽카드</div>
            <div className={styles.table_item}>VRAM 512MByte 이상의 그래픽카드</div>
            <div className={styles.table_item}>VRAM 1GByte 이상의 그래픽카드</div>
          </div>
          <div className={styles.table}>
            <div className={styles.table_item}>메모리</div>
            <div className={styles.table_item}>2GB 이상</div>
            <div className={styles.table_item}>4GB 이상</div>
          </div>
          <div className={styles.table}>
            <div className={styles.table_item}>하드디스크</div>
            <div className={styles.table_item}>HDD 10GB 이상의 여유 공간</div>
            <div className={styles.table_item}>SSD 10GB 이상의 여유 공간</div>
          </div>
        </div>
        <div className={styles.download_info}>
          <div className={styles.download_guide}>
            <div className={styles.download_guide_info_title}>
              조선협객전 클라이언트를 다운로드 후에 설치하여야 게임을 즐기실 수 있습니다.
            </div>
            <div className={styles.download_guide_info_desc}>
              다운로드 ①과 다운로드② 중 빠른 곳에서 다운로드 하세요.
            </div>
            <button className={styles.download_guide_button} onClick={() => void router.push("/pds/guide")}>
              <div className={styles.guide_button_text}>설치가이드 바로가기</div>
              <div className={styles.guide_button_icon}>
                <Image src={imgAsset.arrowRightCircle} width={28} height={28} alt="arrow_right" />
              </div>
            </button>
          </div>

          <div className={styles.download_button_group}>
            <button className={styles.download_button1}>
              <div className={styles.download_button_text_box}>
                <div className={styles.download_button_text}>게임 다운로드①</div>
                <div className={styles.download_button_text_sub}>(홈페이지 에서 받기)</div>
              </div>

              <div className={styles.download_icon}>
                <Image src={imgAsset.downloadCircle} width={42} height={42} alt="download_icon" />
              </div>
            </button>
            <button className={styles.download_button2}>
              <div className={styles.download_button_text_box}>
                <div className={styles.download_button_text}>게임 다운로드②</div>
                <div className={styles.download_button_text_sub}>(구글 웹하드 에서 받기)</div>
              </div>
              <div className={styles.download_icon}>
                <Image src={imgAsset.downloadCircle} width={42} height={42} alt="download_icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default DownLoadPage
