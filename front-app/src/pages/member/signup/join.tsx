import { LayoutLogin } from "component/layout"
import styles from "./join.module.scss"
import { BasicDropDown } from "component/util"
import { useState } from "react"
import customMemberDropdownStyles from "component/util/dropdown.member.module.scss"
import { AddressForm } from "component/addressform"
import { Address } from "react-daum-postcode"
import { useInputs } from "hooks"
import questionJson from "json/signup_question.json"
import { useRouter } from "next/router"
import { userApi } from "apis"
import { apiUtils } from "utils"

const SignupJoinPage = () => {
  const router = useRouter()
  const [dropdownId, setDropdownId] = useState(1)
  const [openPost, setOpenPost] = useState(false)
  const [address, setAddress] = useState<Address>()
  const nameInput = useInputs({ value: "" })
  const birthInput = useInputs({ value: "" })
  const idInput = useInputs({ value: "" })
  const nickInput = useInputs({ value: "" })
  const passwordInput = useInputs({ value: "" })
  const passwordConfirmInput = useInputs({ value: "" })
  const emailInput = useInputs({ value: "" })
  const answerInput = useInputs({ value: "" })
  const addressInput = useInputs({ value: "" })

  const signup = async () => {
    if (
      !idInput.value ||
      !passwordInput.value ||
      !nameInput.value ||
      !nickInput.value ||
      !birthInput.value ||
      !emailInput.value ||
      !address ||
      !addressInput.value ||
      !answerInput.value ||
      !(passwordInput.value === passwordConfirmInput.value)
    ) {
      alert("입력값들을 확인해주세요.")
      return
    }
    const data = {
      id: idInput.value,
      pass: passwordInput.value,
      name: nameInput.value,
      nick: nickInput.value,
      jumin1: birthInput.value,
      jumin2: "2111112",
      mail: emailInput.value,
      pcs1: "010",
      pcs2: "0000",
      pcs3: "0000",
      zip1: address?.zonecode,
      addr1: address?.roadAddress,
      addr2: addressInput.value,
      qna: dropdownId.toString(),
      qna_value: answerInput.value,
    }
    const response = await userApi.signup(data)
    if (apiUtils.isErrorResponse(response)) {
      alert(response.message)
      return
    }
    void router.push("/")
  }

  return (
    <LayoutLogin>
      <div>
        <div className={styles.container}>
          <div className={styles.page_title}>회원가입</div>
          <div className={styles.page_info_title}>모든 신상정보는 정확하게 입력하셔야 합니다.</div>
          <ul className={styles.page_info_list}>
            <li className={styles.page_info_list_item}>
              허위로 작성되었을 경우 조선협객전 서비스 사용권한이 취소될 수 있으며, 타인의 신상정보를 도용한 경우 법에
              의해 처벌을 받으실 수 있습니다. *로 표기된 항목은 반드시 기재해 주시기 바랍니다.
            </li>
          </ul>
          <div className={styles.user_info_container}>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>이름</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} value={nameInput.value} onChange={nameInput.onChange} />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>생년월일</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} value={birthInput.value} onChange={birthInput.onChange} />
                <span className={styles.question_desc}>6자리 예)810101</span>
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>아이디</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} value={idInput.value} onChange={idInput.onChange} />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>닉네임</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} value={nickInput.value} onChange={nickInput.onChange} />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>비밀번호</div>
              <div className={styles.user_info_input_box}>
                <input
                  type="password"
                  className={styles.user_info_input}
                  value={passwordInput.value}
                  onChange={passwordInput.onChange}
                />
                <span className={styles.question_desc}>최소 8자 이상~최대 16자</span>
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>비밀번호 확인</div>
              <div className={styles.user_info_input_box}>
                <input
                  type="password"
                  className={styles.user_info_input}
                  value={passwordConfirmInput.value}
                  onChange={passwordConfirmInput.onChange}
                />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>이메일</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} value={emailInput.value} onChange={emailInput.onChange} />
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>질문</div>
              <div className={styles.user_info_question_box}>
                <BasicDropDown
                  id={"test1"}
                  menuList={questionJson}
                  defaultValue={dropdownId}
                  setSelectedId={setDropdownId}
                  styles={customMemberDropdownStyles}
                />
                <div className={styles.question_desc}>
                  ※ 비밀번호분실 혹은 회원탈퇴 시 질문에 정확한 대답을 할수있어야 처리가 가능합니다.
                </div>
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>답변</div>
              <div className={styles.user_info_input_box}>
                <input className={styles.user_info_input} value={answerInput.value} onChange={answerInput.onChange} />
                <span className={styles.question_desc}>(한글 2자 이상, 영문 4자 이상)</span>
              </div>
            </div>
            <div className={styles.user_info_row}>
              <div className={styles.user_info_title}>주소</div>
              <div className={styles.input_group}>
                <div className={styles.user_info_input_box}>
                  <input className={styles.address_input} value={address?.zonecode} />
                  <button className={styles.address_button} onClick={() => setOpenPost(state => !state)}>
                    검색하기
                  </button>
                </div>
                <div className={styles.user_info_input_box}>
                  <input className={styles.user_info_input} value={address?.roadAddress} />
                </div>
                <div className={styles.user_info_input_box}>
                  <input
                    className={styles.user_info_input}
                    value={addressInput.value}
                    onChange={addressInput.onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submit_box}>
          <button className={styles.submit_button} onClick={() => signup()}>
            확인
          </button>
        </div>
        <AddressForm open={openPost} setAddress={setAddress} setOpen={setOpenPost} />
      </div>
    </LayoutLogin>
  )
}
export default SignupJoinPage
