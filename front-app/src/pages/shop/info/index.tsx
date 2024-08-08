import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
const InfoShopPage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>캐쉬 충전</div>
        <div className={styles.shop_info_row}>
          <div className={styles.shop_info_title}>캐쉬는...</div>
          <div className={styles.shop_info_desc}>
            캐쉬는 현금과 동일하게 사용 할 수 있는 전자상의 돈입니다. 현금을 충전을 통하여 캐쉬로 환전할 수 있으며 게
            임에 유용한 여러 아이템을 구입할 수 있습니다.
          </div>
        </div>
        <div className={styles.shop_info_row}>
          <div className={styles.shop_info_title}>월간 충전 한도액</div>
          <div className={styles.shop_info_desc}>50 만원</div>
        </div>
        <div className={styles.shop_info_row}>
          <div className={styles.shop_info_title}>캐쉬 결제 방법</div>
          <div className={styles.shop_info_desc}>현재는 카드결제와 가상계좌만 가능합니다.</div>
        </div>
        <div className={styles.shop_info_row}>
          <div className={styles.shop_info_title}>결제 단위</div>
          <div className={styles.shop_info_desc}>
            직접입력, 1,000원, 5,000원, 10,000원, 50,000원, 100,000원, 200,000원, 500,000원, 1,000,000원
          </div>
        </div>
        <div className={styles.shop_info_row}>
          <div className={styles.shop_info_title}>환불규정</div>
          <div className={styles.shop_info_desc}>
            잔액이 1,500원 이상 환불 가능/ 전월의 캐쉬충전금액은 환불 불가 / 1주일 이내의 캐쉬충전금액만 환불 가능
            /부가세는 환불 불가
          </div>
        </div>
        <div className={styles.shop_info_row}>
          <div className={styles.shop_info_title}>환불규정</div>
          <div className={styles.shop_info_desc}>
            환불을 원하시는 경우 아래의 내용을 팩스로 보내주시고, 팩스 발신 확인 메일을 보내주셔야 합니다.
          </div>
          <div className={styles.shop_info_desc}>
            환불할 아이디/아이디 소유자 이름/통장 계좌번호, 은행, 예금주 (아이디 실명 소유자의 통장)/연락처/주
            민등록초본 주민등록번호 (아이디 실명 소유자의 주민등록번호)
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default InfoShopPage
