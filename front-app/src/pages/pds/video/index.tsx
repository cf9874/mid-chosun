import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import globalStyles from "globals.module.scss"
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useRef, useState } from "react"
import { imgAsset } from "assets"
import Image from "next/image"

// import { useState } from "react"
// import { GallerySlider } from "component/slider.gallery"

const VideoPage = () => {
  const [selectVideo, setSelectVideo] = useState<{
    title: string
    desc: string
    src: string
  }>(data[0])

  const onClickSlide = (e: { title: string; desc: string; src: string }) => {
    setSelectVideo(e)
  }

  const sliderRef = useRef<SwiperRef>(null)

  const prevClickHandler = () => {
    sliderRef.current!.swiper.slidePrev()
  }
  const nextClickHandler = () => {
    sliderRef.current!.swiper.slideNext()
  }

  return (
    <LayoutLogin>
      <div>
        <div className={styles.video_wrapper}>
          <div className={styles.video_slider}>
            {/* <GallerySlider onClick={onClickSlide} data={data} /> */}

            <div className={styles.gallery_slider_container}>
              <button className={styles.prev_button} onClick={prevClickHandler}>
                prev
              </button>
              <Swiper
                id="gallery_slider"
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                speed={1000}
                slidesPerView={4}
                slidesPerGroup={4}
                grabCursor={true}
                loop
                onSwiper={swiper => console.log(swiper)}
                onSlideChange={e => console.log("slide change", e)}
                className={"mySwiper"}
                ref={sliderRef}
                spaceBetween={0}
              >
                {data.map((e, i) => {
                  return (
                    <SwiperSlide key={i} className={globalStyles.slide} onClick={() => onClickSlide(e)}>
                      <Image src={imgAsset.testImage1} alt="123" layout="fill" />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <button className={styles.next_button} onClick={nextClickHandler}>
                next
              </button>
            </div>
          </div>
          <div className={styles.video_player}></div>
          <div className={styles.video_desc_box}>
            <div className={styles.video_title}>{selectVideo.title}</div>
            <div className={styles.video_decs}>{selectVideo.desc}</div>
          </div>
        </div>

        <div>댓글 입력</div>
        <div>댓글 리스트</div>
      </div>
    </LayoutLogin>
  )
}
export default VideoPage

const data = [
  {
    title: "혈전의 장",
    desc: "사북성을 건 혈정의 장, 최강문파에 도전하라! 미르 최후의 몬스터 파천마룡! 도전하라! 새로운 미르의 인도자여!",
    src: "#",
  },
  {
    title: "월하난무! 자객",
    desc: "달빛에 춤추는 푸른 검기! 조용하고 빠른바람! 새로운 흑룡! 자객이 태동한다!",
    src: "#",
  },
  {
    title: "혈전의 장",
    desc: "사북성을 건 혈정의 장, 최강문파에 도전하라! 미르 최후의 몬스터 파천마룡! 도전하라! 새로운 미르의 인도자여!",
    src: "#",
  },
  {
    title: "월하난무! 자객",
    desc: "달빛에 춤추는 푸른 검기! 조용하고 빠른바람! 새로운 흑룡! 자객이 태동한다!",
    src: "#",
  },
]
