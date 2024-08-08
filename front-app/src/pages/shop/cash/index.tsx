import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { useState } from "react"
import { CASH_AMOUNT } from "const"
import { useRouter } from "next/router"

const CashShopPage = () => {
  const router = useRouter()
  const [chargeAmount, setCahrgeAmount] = useState(0)
  const [chargeMethod, setChargeMethod] = useState(1)
  const [selectedButtonId, setSelectedButtonId] = useState(0)
  const [isSelfAmount, setIsSelfAmount] = useState(false)
  console.log(11, chargeAmount)
  console.log(CASH_AMOUNT)
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>캐쉬 충전</div>
        {/* <div className={styles.cash_charge_notice_wrapper}>
          <div className={styles.cash_charge_notice_text}>
            ※ 캐쉬 아이템은 백두대간 서버에서만 사용하실 수 있습니다.
          </div>
          <div className={styles.cash_charge_notice_text}>
            ※ 월 결제한도는 월2회 변경이 가능합니다.(1일1회 변경가능)
          </div>
          <div className={styles.cash_charge_notice_text}>※ 월 최소한도 55,000원 ~ 최대한도 22,000,000원 입니다.</div>
        </div> */}
        {/* <div className={styles.cash_charge_info}>(단위:원)</div>
        <div className={styles.cash_charge_info}>* 정보를 기입하신 후 결제버튼을 눌러주십시오.</div> */}
        <div className={styles.table_wrapper}>
          <div className={styles.table_row}>
            <div className={styles.table_row_title}>잔여 결제한도</div>
            <div className={styles.table_row_content_box}>
              <div className={styles.amount_highlight_box}>
                <span className={styles.amount_highlight}>55,000</span>원
              </div>
              <div className={styles.amount_highlight_box}>(월 총 결제한도:55,000원)</div>
              <button className={styles.change_limit_button} onClick={() => void router.push("/shop/cash/limit")}>
                월 결제한도 변경하기
              </button>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_row_title}>결제 방법</div>
            <div className={styles.table_row_content_box}>
              <button
                onClick={() => setChargeMethod(1)}
                className={chargeMethod === 1 ? styles.charge_method_active : styles.charge_method}
              >
                카드 결제
              </button>
              <button
                onClick={() => setChargeMethod(2)}
                className={chargeMethod === 2 ? styles.charge_method_active : styles.charge_method}
              >
                가상 계좌
              </button>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_row_title}>충전 금액</div>
            <div className={styles.table_row_content_box}>
              <div className={styles.table_row_content_group}>
                <div className={styles.amount_input_box}>
                  <input
                    className={styles.amount_input}
                    disabled={!isSelfAmount}
                    value={chargeAmount}
                    onChange={e => {
                      if (isNaN(Number(e.target.value))) return
                      setCahrgeAmount(Number(e.target.value))
                    }}
                  />
                  <span className={styles.amount_input_text}>원</span>
                  <input
                    type="checkbox"
                    className={styles.amount_input_checkbox}
                    onClick={() => setIsSelfAmount(state => !state)}
                  />
                  <span className={styles.amount_input_text}>직접입력</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.amount_box}>
                  {CASH_AMOUNT.slice(0, 4).map((amount, index) => {
                    return (
                      <div
                        key={index}
                        className={amount === selectedButtonId ? styles.amount_button_active : styles.amount_button}
                        onClick={() => {
                          // if (amount > 0) {
                          setCahrgeAmount(state => state + amount)
                          setSelectedButtonId(amount)
                          // } else {
                          //   setCahrgeAmount(0)
                          // }
                        }}
                      >
                        +{amount?.toLocaleString()}원
                      </div>
                    )
                  })}
                </div>
                <div className={styles.divider} />
                <div className={styles.amount_box}>
                  {CASH_AMOUNT.slice(4).map((amount, index) => {
                    return (
                      <div
                        key={index}
                        className={amount === selectedButtonId ? styles.amount_button_active : styles.amount_button}
                        onClick={() => {
                          // if (amount > 0) {
                          setCahrgeAmount(state => state + amount)
                          setSelectedButtonId(amount)
                          // } else {
                          //   setCahrgeAmount(0)
                          // }
                        }}
                      >
                        +{amount?.toLocaleString()}원
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_row_title}>결제 금액</div>
            <div className={styles.table_row_content_box}>
              <div className={styles.purchase_amount_group}>
                <div className={styles.purcahge_amount}>
                  <span className={styles.purcahge_amount_highlight}>{(chargeAmount * 1.1).toLocaleString()}</span>원
                </div>
                <div className={styles.purcahge_amount_text}>(부가세 10% 포함)</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.cash_charge_notice_wrapper}>
          <div className={styles.cash_charge_notice_text}>
            ※ e-mail을 입력받는 것은 고객님의 결제성공 내역을 E-MAIL로 알려드리기 위함이오니 반드시 기입하시기 바랍니다.
          </div>
        </div> */}
        <div className={styles.button_wrapper}>
          <button className={styles.button}>결제</button>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default CashShopPage
