import { imgAsset } from "assets"
import styles from "./layout.footer.module.scss"
import Image from "next/image"

export const LayoutFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents_wrapper}>
        <div className={styles.footer_section}>
          <div className={styles.footer_section_title}>Useful Links</div>
          <div className={styles.footer_link}>
            <span>{">"}</span> Home
          </div>
          <div className={styles.footer_link}>
            <span>{">"}</span> 이용약관
          </div>
          <div className={styles.footer_link}>
            <span>{">"}</span> 운영정책
          </div>
        </div>
        <div className={styles.footer_section}>
          <div className={styles.footer_section_title}>Our Services</div>
          <div className={styles.footer_link}>
            <span>{">"} </span>회원가입
          </div>
          <div className={styles.footer_link}>
            <span>{">"} </span>다운로드
          </div>
        </div>
        <div className={styles.footer_section}>
          <div className={styles.footer_section_title}>Contact Us</div>
          <div className={styles.footer_content}>경기도 남양주시 별내3로 322, 4층 403호</div>
          <div className={styles.footer_content}>사업자등록번호 : 854-88-02887</div>
          <div className={styles.footer_content}>회사명 : 지오소프트, 대표자 : 구광혜</div>
          <div className={styles.footer_content}>통신판매번호 : 2024-별내-0216</div>
          <div className={styles.footer_content}>고객센터: 임시운영중단</div>
          <div className={styles.footer_content}>Email : aaa@aaa.com</div>
        </div>
        <div className={styles.footer_section}>
          <div className={styles.footer_section_title}>About</div>
          <div className={styles.footer_content}>
            <span className={styles.footer_content_highlight}>등급분류번호</span> : OL-070905-006
          </div>
          <div className={styles.footer_content}>
            <span className={styles.footer_content_highlight}>등급분류일자</span> : 2007.09.05
          </div>
          <div className={styles.footer_content}>
            <span className={styles.footer_content_highlight}>제작업자신고번호</span> : 제2016-000051호
          </div>
          <div className={styles.footer_content}>
            <div className={styles.social_img}>
              <Image src={imgAsset.iconTwitter} alt="icon_twitter" />
            </div>
            <div className={styles.social_img}>
              <Image src={imgAsset.iconFacebook} alt="icon_facebook" />
            </div>
            <div className={styles.social_img}>
              <Image src={imgAsset.iconInsta} alt="icon_instagram" />
            </div>
            <div className={styles.social_img}>
              <Image src={imgAsset.iconIn} alt="icon_in" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_wrapper}>
        <div>© Copyright All Right Reserved</div>
      </div>
    </div>
  )
}
