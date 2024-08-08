// import { userApi } from "apis"
import { LayoutMain, MenuHeader } from "component/layout"
import styles from "./index.module.scss"
import Image from "next/image"
import { imgAsset } from "assets"
import { useRouter } from "next/router"
import { RankSummary } from "component/rank.summary"
import { LoginBox } from "component/loginbox"
import { NoticeSummary } from "component/notice.summary"

export default function Home() {
  const router = useRouter()

  return (
    <LayoutMain>
      <div className={styles.container}>
        <div className={styles.title_menu_box}>
          <div className={styles.logo} onClick={() => void router.push("/")}>
            <Image src={imgAsset.logo} width={308} height={162} alt="logo" />
          </div>
          <div className={styles.menu}>
            <MenuHeader />
          </div>
        </div>
        <div className={styles.main_box}>
          <div className={styles.login_wrapper}>
            <LoginBox />
          </div>
          <div className={styles.main_wrapper}>
            <div className={styles.guide_image_main}>
              <Image src={imgAsset.guideImageMain} width={950} height={326} alt="main guide image" />
            </div>
            <div className={styles.guide_nav_group}>
              <div className={styles.guide_image} onClick={() => void router.push("/info/character")}>
                <Image src={imgAsset.guideImageCharacter} width={300} height={108} alt="cahracter guide navigation" />
              </div>
              <div className={styles.guide_image} onClick={() => void router.push("/info/skill")}>
                <Image src={imgAsset.guideImageSkill} width={300} height={108} alt="cahracter guide navigation" />
              </div>
              <div className={styles.guide_image} onClick={() => void router.push("/info/quest")}>
                <Image src={imgAsset.guideImageQuest} width={300} height={108} alt="cahracter guide navigation" />
              </div>
            </div>
            <div className={styles.contents_group}>
              <div className={styles.nav}>
                <div className={styles.content_left}>
                  <NoticeSummary noticeList={noticeList} />
                  {/* <div className={styles.notice_header}>
                    <div className={styles.notice_header_title}>공지사항</div>
                    <div className={styles.notice_nav_buttom}>+</div>
                  </div>
                  <div className={styles.notice_row}>
                    <div className={styles.notice_title}>개인정보 처리방침 계정 사전 안내</div>
                    <div className={styles.notice_date}>2024.03.28</div>
                  </div>
                  <div className={styles.notice_row}>
                    <div className={styles.notice_title}>개인정보 처리방침 계정 사전 안내</div>
                    <div className={styles.notice_date}>2024.03.28</div>
                  </div> */}
                </div>
              </div>
              <div className={styles.content_right}>
                <RankSummary rankList={rankList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  )
}

const rankList = [
  { rank: 1, nick: "장민", class: "궁수" },
  { rank: 2, nick: "가람검객", class: "검객" },
  { rank: 3, nick: "야차", class: "승려" },
  { rank: 4, nick: "악당", class: "궁수" },
  { rank: 5, nick: "악당", class: "궁수" },
  { rank: 6, nick: "악당", class: "궁수" },
  { rank: 7, nick: "악당", class: "궁수" },
  { rank: 8, nick: "악당", class: "궁수" },
  { rank: 9, nick: "악당", class: "궁수" },
  { rank: 10, nick: "악당", class: "궁수" },
]
const noticeList = [
  { rank: 1, title: "개인정보 처리방침 계정 사전 안내", date: "2023.03.28" },
  { rank: 2, title: "개인정보 처리방침 계정 사전 안내", date: "2023.03.28" },
  { rank: 3, title: "개인정보 처리방침 계정 사전 안내", date: "2023.03.28" },
  { rank: 4, title: "개인정보 처리방침 계정 사전 안내", date: "2023.03.28" },
  { rank: 5, title: "개인정보 처리방침 계정 사전 안내", date: "2023.03.28" },
]
