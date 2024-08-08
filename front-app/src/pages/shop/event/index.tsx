import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"

const EventShopPage = () => {
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>이벤트 상품</div>
        <div className={styles.item_info}>
          ※ 아이템 이미지에 마우스를 올려놓으시면, 해당 아이템에 대한 상세 설명이 나타납니다.
        </div>
        <div className={styles.item_wrapper}>
          <div className={styles.item_box}>
            <div className={styles.item_img}>이미지</div>
            <div className={styles.item_title_group}>
              <div className={styles.item_name}>망각의샘물x1</div>
              <div className={styles.item_price}>15,900 캐쉬</div>
            </div>
            <div className={styles.purchase_group}>
              <div className={styles.purcahse_button}>구매</div>
              <div className={styles.present_button}>선물</div>
            </div>
          </div>
          <div className={styles.item_box}>
            <div className={styles.item_img}>이미지</div>
            <div className={styles.item_title_group}>
              <div className={styles.item_name}>망각의샘물x1</div>
              <div className={styles.item_price}>15,900 캐쉬</div>
            </div>
            <div className={styles.purchase_group}>
              <div className={styles.purcahse_button}>구매</div>
              <div className={styles.present_button}>선물</div>
            </div>
          </div>
          <div className={styles.item_box}>
            <div className={styles.item_img}>이미지</div>
            <div className={styles.item_title_group}>
              <div className={styles.item_name}>망각의샘물x1</div>
              <div className={styles.item_price}>15,900 캐쉬</div>
            </div>
            <div className={styles.purchase_group}>
              <div className={styles.purcahse_button}>구매</div>
              <div className={styles.present_button}>선물</div>
            </div>
          </div>
          <div className={styles.item_box}>
            <div className={styles.item_img}>이미지</div>
            <div className={styles.item_title_group}>
              <div className={styles.item_name}>망각의샘물x1</div>
              <div className={styles.item_price}>15,900 캐쉬</div>
            </div>
            <div className={styles.purchase_group}>
              <div className={styles.purcahse_button}>구매</div>
              <div className={styles.present_button}>선물</div>
            </div>
          </div>
          <div className={styles.item_box}>
            <div className={styles.item_img}>이미지</div>
            <div className={styles.item_title_group}>
              <div className={styles.item_name}>망각의샘물x1</div>
              <div className={styles.item_price}>15,900 캐쉬</div>
            </div>
            <div className={styles.purchase_group}>
              <div className={styles.purcahse_button}>구매</div>
              <div className={styles.present_button}>선물</div>
            </div>
          </div>
          <div className={styles.item_box}>
            <div className={styles.item_img}>이미지</div>
            <div className={styles.item_title_group}>
              <div className={styles.item_name}>망각의샘물x1</div>
              <div className={styles.item_price}>15,900 캐쉬</div>
            </div>
            <div className={styles.purchase_group}>
              <div className={styles.purcahse_button}>구매</div>
              <div className={styles.present_button}>선물</div>
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default EventShopPage
