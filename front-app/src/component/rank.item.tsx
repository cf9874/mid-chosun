import { useState } from "react"
import styles from "./rank.item.module.scss"

interface IRankItem {
  index: number
  data: {
    server: string
    nick: string
    img: string
    class: string
    level: number
    exp: number
    rank_server: number
    diff_server: number
    rank_class: number
    diff_class: number
    rank_total: number
    diff_total: number
  }
  displayIdx?: number
}

export const RankListItemWide = ({ index, data, displayIdx = 3 }: IRankItem) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={styles.list_container_wide}>
      {isHover ? (
        <div className={styles.floating_wrapper}>
          <div className={styles.profile_box}>
            <div className={styles.profile_image}></div>
            <div className={styles.profile_nick}>{data.nick}</div>
          </div>
          <div className={styles.rank_box}>
            <div className={styles.rank_box_nav}>
              <div />
              <div className={styles.nav_text}>랭킹</div>
              <div className={styles.nav_text}>등락폭</div>
            </div>

            <div className={styles.rank_box_item}>
              <div className={styles.item_title}>서버내</div>
              <div className={styles.item_rank_text}>{data.rank_server}</div>
              <div className={styles.item_rank_text}>
                {data.diff_server === 0 ? (
                  "-"
                ) : data.diff_server > 0 ? (
                  <span>
                    <span className={styles.diff_up}>▲</span> {data.diff_server}
                  </span>
                ) : (
                  <span>
                    <span className={styles.diff_down}>▼</span> {Math.abs(data.diff_server)}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.rank_box_item}>
              <div className={styles.item_title}>직업별</div>
              <div className={styles.item_rank_text}>{data.rank_server}</div>
              <div className={styles.item_rank_text}>
                {data.diff_class === 0 ? (
                  "-"
                ) : data.diff_class > 0 ? (
                  <span>
                    <span className={styles.diff_up}>▲</span> {data.diff_class}
                  </span>
                ) : (
                  <span>
                    <span className={styles.diff_down}>▼</span> {Math.abs(data.diff_class)}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.rank_box_item}>
              <div className={styles.item_title}>서버&직업별</div>
              <div className={styles.item_rank_text}>{data.rank_total}</div>
              <div className={styles.item_rank_text}>
                {data.diff_total === 0 ? (
                  "-"
                ) : data.diff_total > 0 ? (
                  <span>
                    <span className={styles.diff_up}>▲</span> {data.diff_total}
                  </span>
                ) : (
                  <span>
                    <span className={styles.diff_down}>▼</span> {Math.abs(data.diff_total)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className={styles.rank_box}>
        <span className={index < displayIdx ? styles.rank_top : styles.rank}>{index + 1}</span>
      </div>

      <div className={index < displayIdx ? styles.item_server_top : styles.item_server}>[ {data.server} ] </div>
      <div
        className={styles.item_nick_box}
        onMouseEnter={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className={styles.item_image}></div>
        <div className={styles.item_nick}>{data.nick}</div>
      </div>
      <div className={styles.item_level}>{data.level}</div>
      <div className={styles.item_dxp}>({data.exp}%)</div>
      <div className={styles.item_class}>{data.class}</div>
      <div className={styles.item_diff}>
        {" "}
        {data.diff_total === 0 ? (
          "-"
        ) : data.diff_total > 0 ? (
          <span>
            <span className={styles.diff_up}>▲</span> {data.diff_total}
          </span>
        ) : (
          <span>
            <span className={styles.diff_down}>▼</span> {Math.abs(data.diff_total)}
          </span>
        )}
      </div>
    </div>
  )
}
