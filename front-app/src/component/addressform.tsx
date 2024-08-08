import React, { Dispatch, SetStateAction } from "react"
import DaumPostcode, { Address } from "react-daum-postcode"
import styles from "./addressform.module.scss"

export const AddressForm = ({
  open,
  setOpen,
  setAddress,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setAddress: Dispatch<SetStateAction<Address | undefined>>
}) => {
  const completeHandler = (data: Address) => {
    console.log(data)
    setAddress(data)
    setOpen(false)
  }

  return open ? (
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <span className={styles.modal_title}>주소 검색</span>
        <span className={styles.modal_close} onClick={() => setOpen(false)}>
          X
        </span>
      </div>
      <DaumPostcode
        onComplete={completeHandler}
        className={styles.postmodal}
        style={{
          height: 700,
          width: 500,
        }}
      />
    </div>
  ) : null
}
