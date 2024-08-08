import { useRouter } from "next/router"
import styles from "./loginbox.module.scss"
import Image from "next/image"
import { imgAsset } from "assets"
import { useState } from "react"
export const LoginBox = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  const login = () => {
    console.log("login")
  }
  const logout = () => {
    console.log("login")
  }
  return (
    <div className={styles.container}>
      <div className={styles.login_wrapper}>
        <div
          className={styles.login_title}
          onClick={() => {
            setIsLogin(state => !state)
          }}
        >
          MEMBER{`'`}S LOGIN
        </div>
        <div className={styles.divider} />
        <div className={styles.login_box}>
          {isLogin ? (
            <div className={styles.login_input_wrapper}>
              <div className={styles.login_input}>유저 아이디</div>
              <div className={styles.login_input}>유저 닉네임</div>
            </div>
          ) : (
            <div className={styles.login_input_wrapper}>
              <input className={styles.login_input} type="id" placeholder="계정명" />
              <input className={styles.login_input} type="password" placeholder="패스워드" />
            </div>
          )}
          <button
            className={styles.login_button}
            onClick={() => {
              if (isLogin) {
                login()
              } else {
                logout()
              }
            }}
          >
            {isLogin ? "로그아웃" : "로그인"}
          </button>
        </div>
        {isLogin ? (
          <div className={styles.member_box_logined}>
            <div className={styles.member_nav} onClick={() => void router.push("/member/signup")}>
              내정보
            </div>
            <div className={styles.member_nav} onClick={() => void router.push("/member/findid")}>
              캐쉬충전
            </div>
            <div className={styles.member_nav} onClick={() => void router.push("/member/findpassword")}>
              이용안내
            </div>
          </div>
        ) : (
          <div className={styles.member_box}>
            <div className={styles.member_nav} onClick={() => void router.push("/member/signup")}>
              회원가입
            </div>
            <div className={styles.member_nav} onClick={() => void router.push("/member/findid")}>
              계정명찾기
            </div>
            <span className={styles.member_nav} onClick={() => void router.push("/member/findpassword")}>
              비밀번호찾기
            </span>
          </div>
        )}
      </div>
      <div className={styles.download_button_wrapper}>
        <button className={styles.download_button} onClick={() => void router.push("/pds/download")}>
          <Image src={imgAsset.downloadClient} width={270} height={97} alt="" />
        </button>
      </div>
    </div>
  )
}
