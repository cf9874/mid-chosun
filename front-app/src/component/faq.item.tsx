import { useState } from "react"
import styles from "./faq.item.module.scss"
import Image from "next/image"
import { imgAsset } from "assets"
export const FaqList = ({
  item,
}: {
  item: {
    question: string
    answer: string
  }
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.faq_group}>
      <div className={styles.faq_question} onClick={() => setOpen(state => !state)}>
        <div className={styles.question_row}>
          <div className={open ? styles.quetion_title_active : styles.quetion_title}>{item.question}</div>
          <div className={styles.icon}>
            <Image src={imgAsset.arrowDown} width={24} height={24} alt="arrow_up" />
          </div>
        </div>
      </div>
      {open ? (
        <div className={styles.faq_answer}>
          <div className={styles.ask_row}>
            <div className={styles.answer_desc}>{item.answer}</div>
            <div className={styles.icon}>
              <Image src={imgAsset.arrowUp} width={24} height={24} alt="arrow_down" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
