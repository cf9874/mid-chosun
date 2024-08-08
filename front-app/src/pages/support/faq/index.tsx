import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import customFaqMenuStyle from "component/util/menu.custom.faq.module.scss"
import { BasicMenu } from "component/util"
import { useState } from "react"
import faqJson from "json/faq.json"
import { FaqList } from "component/faq.item"

const FaqPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1)

  const faq = faqJson.find(json => json.id === selectedId)!.section_list as {
    title: string
    list: {
      question: string
      answer: string
    }[]
  }[]

  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.page_title}>아이템</div>
        <BasicMenu
          menuList={menuList}
          selectedValue={selectedId}
          setSelectedId={setSelectedId}
          styles={customFaqMenuStyle}
        />
        <div className={styles.faq_wrapper}>
          <div>
            {faq?.map((item, index) => {
              return (
                <div key={index} className={styles.faq_box}>
                  <div className={styles.faq_title}>{item.title}</div>
                  {item.list?.map((v, i) => {
                    return <FaqList key={i} item={v} />
                  })}
                </div>
              )
            })}
            {/* {faq?.section_list?.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.faq_title}>{item.title}</div>
                  {item.list.map((item, index) => {
                    return <FaqList key={index} item={item} />
                  })}
                </div>
              )
            })} */}
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default FaqPage

const menuList = [
  { id: 1, name: "시스템 관련" },
  { id: 2, name: "게임 관련" },
  { id: 3, name: "신고 관련" },
  { id: 4, name: "계정 관련" },
]
