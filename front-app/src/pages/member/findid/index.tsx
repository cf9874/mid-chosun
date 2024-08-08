import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { BasicDropDown } from "component/util"
import { useState } from "react"
import customMemberDropdownStyles from "component/util/dropdown.member.module.scss"
import { useRouter } from "next/router"
const FindIdPage = () => {
  const router = useRouter()
  const [dropdownId, setDropdownId] = useState(1)

  const findId = () => {
    // logic
    void router.push("/member/findid/result")
  }
  return (
    <LayoutLogin>
      <div>
        <div className={styles.container}>
          <div className={styles.page_title}>계정명 찾기</div>
          <div className={styles.page_info_title}>- 회원가입시 입력한 내용을 기재하세요.</div>
          <ul className={styles.page_info_list}>
            <li className={styles.page_info_list_item}>본인 인증을 하신 회원님만 이용이 가능합니다.</li>
          </ul>
          <div className={styles.user_info_container}>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>이름</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>생년월일</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} />{" "}
                <span className={styles.question_desc}>6자리 예)810101</span>
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>계정명</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>질문</div>
              <div className={styles.user_info_question_box}>
                <BasicDropDown
                  id={"test1"}
                  menuList={[
                    { id: 1, content: "내가 다닌 초등학교 이름은?" },
                    { id: 2, content: "내가 다닌 초등학교 이름은?" },
                  ]}
                  defaultValue={dropdownId}
                  setSelectedId={setDropdownId}
                  styles={customMemberDropdownStyles}
                />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>답변</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submit_box}>
          <button className={styles.submit_button} onClick={findId}>
            찾기
          </button>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default FindIdPage
