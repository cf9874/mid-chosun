import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
// import { useState } from "react"
import { useRouter } from "next/router"

const SignupPage = () => {
  // const [termsChecked, setTermsChecked] = useState(false)
  const router = useRouter()
  return (
    <LayoutLogin>
      <div>
        <div className={styles.container}>
          <div className={styles.page_title}>회원가입</div>
          <div className={styles.page_info_title}>안녕하세요? [ 조선협객전 ] 회원가입을 환영합니다.</div>
          <div className={styles.page_info_desc}>
            회원가입을 하려면 먼저 회원에 가입하면 어떤 권리와 책임이 따르는지 아래 의 {"서비스 이용약관"}을 잘
            읽어보시고 [동의] 버튼을 눌러주십시오. 게임 이용중 발생하는 모든 문제는 서비스이용약 관에 의거하여
            처리됩니다.
          </div>
          <div className={styles.terms_wrapper}>
            <div className={styles.terms_header}>개인정보 및 청소년 보호 방침</div>
            <div className={styles.terms_box}>
              ■ 조선협객전 서비스 이용자 개인정보 및 청소년 보호
              <br />
              <br />
              <br /> 1. 총칙 <br />1 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 이름,
              주민등록번호 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수
              없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다)를 말합니 다. 조선협객전이 보유하는
              개인정보와 관련하여 누구든지 자신의 의 사에 반하여 자신의 개인정보가 위법하게 침해되거나 공개되지 않을
              권리 및 개인정보를 자율적으로 통제할 권리를 갖습니다.
            </div>
          </div>
          <div className={styles.terms_wrapper}>
            <div className={styles.terms_header}>서비스 이용약관</div>
            <div className={styles.terms_box}>
              제1장 총칙
              <br />
              <br /> 제1조 (목적)
              <br />이 약관은 조선협객전(이하 회사)가 제공하는 인터넷 기반 MMORPG (Massively Multiplayer Online Role
              Playing Game: C 중 이용자 온라인 롤플레잉 게임)인 조선협객전 게임 서비스(이하 서비스)를 이용하는
              조선협객전 게임 이용자(이하 이용자)와 회사간에 서비스의 이용에 관한 기본적인 사항을 규정하는 것을 목적으로
              합니다.
              <br />
              <br />
              제2조 (약관의 효력과 변경)
            </div>
          </div>
          {/* <div className={styles.terms_agree_box}>
            <input
              type="checkbox"
              className={styles.terms_checkbox}
              checked={termsChecked}
              onChange={() => setTermsChecked(state => !state)}
            />
            <span className={styles.terms_agree_text}>
              조선협객전 개인정보 및 청소년 보호정책과 서비스 이용약관에
              <span className={styles.terms_agree_text_highlight}> 모두 동의합니다.</span>
            </span>
          </div> */}
        </div>
        <div className={styles.auth_box}>
          <button
            className={styles.auth_button}
            onClick={() => {
              // if (termsChecked) {
              void router.push("/member/signup/join")
              // } else {
              //   return
              // }
            }}
          >
            12세 이상 회원가입 및 인증
          </button>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default SignupPage
