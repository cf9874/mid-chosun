import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { BasicMenu } from "component/util"
import { useState } from "react"
import customShopHistoryMenuStyle from "component/util/menu.custom.shophistory.module.scss"

const menuList = [
  { id: 1, name: "캐쉬결제" },
  { id: 2, name: "구매내역" },
]

const ShopHistoryPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1)

  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>결제/구매내역</div>
        <BasicMenu
          menuList={menuList}
          selectedValue={selectedId}
          setSelectedId={setSelectedId}
          styles={customShopHistoryMenuStyle}
        />
        {selectedId === 1 ? (
          <div className={styles.cash_wrapper}>
            <div className={styles.cash_table_header}>
              <div className={styles.cash_table_header_item}>번호</div>
              <div className={styles.cash_table_header_item}>날짜</div>
              <div className={styles.cash_table_header_item}>결제수단</div>
              <div className={styles.cash_table_header_item}>결제계정</div>
              <div className={styles.cash_table_header_item}>입금자명</div>
              <div className={styles.cash_table_header_item}>결제금액</div>
              <div className={styles.cash_table_header_item}>현금영수증</div>
              <div className={styles.cash_table_header_item}>결과</div>
            </div>
            <div className={styles.cash_table}>
              <div className={styles.cash_table_item}>-</div>
              <div className={styles.cash_table_item}>-</div>
              <div className={styles.cash_table_item}>-</div>
              <div className={styles.cash_table_item}>-</div>
              <div className={styles.cash_table_item}>-</div>
              <div className={styles.cash_table_item}>-</div>
              <div className={styles.cash_table_item}>-</div>
              <div className={styles.cash_table_item}>-</div>
            </div>
          </div>
        ) : (
          <div className={styles.purshace_wrapper}>
            <div className={styles.purchase_table_header}>
              <div className={styles.purchase_table_header_item}>번호</div>
              <div className={styles.purchase_table_header_item}>받은아이디</div>
              <div className={styles.purchase_table_header_item}>받은캐릭터</div>
              <div className={styles.purchase_table_header_item}>아이템</div>
              <div className={styles.purchase_table_header_item}>개수</div>
              <div className={styles.purchase_table_header_item}>날짜</div>
              <div className={styles.purchase_table_header_item}>적립</div>
            </div>
            <div className={styles.purchase_table}>
              <div className={styles.purchase_table_item}>-</div>
              <div className={styles.purchase_table_item}>-</div>
              <div className={styles.purchase_table_item}>-</div>
              <div className={styles.purchase_table_item}>-</div>
              <div className={styles.purchase_table_item}>-</div>
              <div className={styles.purchase_table_item}>-</div>
              <div className={styles.purchase_table_item}>-</div>
            </div>
          </div>
        )}
      </div>
    </LayoutLogin>
  )
}
export default ShopHistoryPage
