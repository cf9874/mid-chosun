import { LayoutLogin } from "component/layout"
import { NoticeListHeader } from "component/layout"
// import { BasicTab } from "component/tab.basic"
// import { useState } from "react"
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./index.module.scss"
import { useRouter } from "next/router"

const UpdatePage = () => {
  // const [selectCategory, setSelectCategory] = useState("전체")
  // const onChnageCategory = (category: string) => {
  //   setSelectCategory(category)
  // }
  const router = useRouter()
  const list = [
    {
      seq_no: 1,
      title: "[완료] 2월 21일(수) 정기점검 안내",
      created_at: "24.02.20",
      views: 3172,
      pinned: true,
    },
    {
      seq_no: 2,
      title: "청룡의간식 추가판매 예정 안내",
      created_at: "24.02.20",
      views: 1585,
      pinned: true,
    },
    {
      seq_no: 3,
      title: "혼돈의신전 개선 사전안내 및 유의사항",
      created_at: "24.02.14",
      views: 3417,
      pinned: true,
    },
  ]
  return (
    <LayoutLogin>
      <div>
        <div
          style={{
            border: "5px solid pink",
          }}
        >
          <div className={styles.rolling_bar_container}>
            <Swiper
              id="notice_slider"
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              speed={750}
              effect="slide"
              slidesPerView={1}
              navigation
              height={300}
              style={{
                height: 70,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              direction="vertical"
              grabCursor={true}
              loop
              onSwiper={swiper => console.log(swiper)}
              onSlideChange={e => console.log("slide change", e)}
            >
              {notice.map((e, i) => {
                return (
                  <SwiperSlide key={i} className={styles.slide_vertical} onClick={() => console.log(e)}>
                    <div className={styles.slide_item}>{e.title}</div>
                    <div className={styles.navigation_bg}></div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
        <br />
        <div className={styles.notice_list_contianer}>
          {/* <BasicTab
            category={["전체", "공지", "업데이트", "호외"]}
            currentValue={selectCategory}
            onChnage={onChnageCategory}
          /> */}
          <NoticeListHeader />
          {list.map((e, i) => (
            <div key={i} className={styles.list_item}>
              {e.pinned ? (
                <div className={styles.pinned_item_no}>[ 공지 ]</div>
              ) : (
                <div className={styles.item_no}>{e.seq_no}</div>
              )}
              <div className={styles.item_title} onClick={() => void router.push(`/news/update/detail?id=${e.seq_no}`)}>
                {e.title}
              </div>
              <div className={styles.item_created_at}>{e.created_at}</div>
              <div className={styles.item_views}>{e.views}</div>
            </div>
          ))}

          <div
            style={{
              margin: "10px 0",
              border: "1px solid red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            페이지네이션
          </div>
          <div className={styles.search_box}>
            <input className={styles.search_input} />
            <button className={styles.search_button}>검색</button>
          </div>
        </div>
      </div>
    </LayoutLogin>
  )
}

const notice = [
  {
    seq_no: 1,
    title: "[완료] 2월 21일(수) 정기점검 안내",
    created_at: "24.02.20",
    views: 3172,
    pinned: true,
  },
  {
    seq_no: 2,
    title: "청룡의간식 추가판매 예정 안내",
    created_at: "24.02.20",
    views: 1585,
    pinned: true,
  },
  {
    seq_no: 3,
    title: "혼돈의신전 개선 사전안내 및 유의사항",
    created_at: "24.02.14",
    views: 3417,
    pinned: true,
  },
]
export default UpdatePage
