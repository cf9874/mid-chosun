import { LayoutLogin } from "component/layout"
import styles from "./index.module.scss"
import { GalleryListItem } from "component/gallery.item"

const GalleryPage = () => {
  return (
    <LayoutLogin>
      <div>
        <div className={styles.gallery_list_contianer}>
          {[
            {
              seq_no: 1,
              title: "여궁수",
              img: "link",
            },
            {
              seq_no: 1,
              title: "남궁수",
              img: "link",
            },
            {
              seq_no: 1,
              title: "월하자객",
              img: "link",
            },
            {
              seq_no: 1,
              title: "여전사",
              img: "link",
            },
          ].map((e, i) => (
            <GalleryListItem key={i} data={e} onClick={() => console.log(e.title)} />
          ))}
        </div>
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
    </LayoutLogin>
  )
}
export default GalleryPage
