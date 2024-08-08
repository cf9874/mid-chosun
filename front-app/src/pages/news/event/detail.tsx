import { LayoutLogin } from "component/layout"
import styles from "./detail.module.scss"
import { useRouter } from "next/router"
const EventDetailPage = () => {
  const router = useRouter()
  const { query } = router

  const data = {
    title: "문파생성 및 명령어",
    writer: "조선협객전",
    veiwer: "5561",
    contents: `
    -문파도움: 문파도움말을 본다.
    -문파생성 : 문파명으로 문파를 생생한다. 
        (ex-문파생성 문파명")
    -문파해체: 문주가 자신의 문파를 해체한다.
    -가입신청: 해당 문파에 가입을 신청한다. 
        (ex -문파가입 문파명")
    -가입승인:가입신청한자에 한하여 가입을 승인한다.
    -문파탈퇴: 가입한 문파에서 탈퇴한다.
    -강제탈퇴: 강제로 문원을 탈퇴시킨다.
    -문파기부 : 문파은행에 만냥을 기부한다.
    -문파분배 : 문파은행에서 접속중인 문원에게 십만냥씩 분배한다.
    -문파소유 : 문파소유 맵을 보여 줍니다.
    -문원정보: 전체 문원과 접속한 문원 상태를 본다.
        ex)-문원정보 페이지번호
    -신청정보: 가입 대기중인 유저의 정보를 본다.
    -공지사항: 문파원에게 공지사항을 기록한다.
    -문원출두 동일맵에 있는 문원에게 출두한다.
    -전쟁신청: 전쟁을 신청한 문파를 보거나 전쟁신청을 한다.
        ex)-전쟁신청, 전쟁신청 문파명
    -전쟁취소: 신청한 전쟁을 취소한다.
    -전쟁수락: 해당 문파와 전쟁을 수락한다.
    -전쟁거부 : 해당 문파와 전쟁을 거부한다.
    -전쟁참여: 문파전쟁시 협객수련장에서 전쟁에 참여한다.
    -전쟁항복: 문파전쟁에서 항복한다.
    -전쟁상태: 전쟁맵에 있는 인원을 확인한다.
    -문주전음: 문주가 문파금을 소모하여 전음을 사용한다.`,
  }
  return (
    <LayoutLogin>
      <div className={styles.container}>
        <div className={styles.content_header_wrapper}>
          <div className={styles.content_header_title}>{data.title}</div>
          <div className={styles.content_header_sub_box}>
            <div className={styles.content_writer_group}>
              <div className={styles.content_writer}>작성자</div>
              <div className={styles.content_writer}>{data.writer}</div>
            </div>
            <div className={styles.viewr}>👁‍🗨 {data.veiwer}</div>
          </div>
        </div>

        {/* <div className={styles.content_box}>{data.contents}</div> */}
        <div className={styles.content_box} dangerouslySetInnerHTML={{ __html: data.contents }} />
        <div className={styles.page_navigation_box}>
          <div className={styles.next_navigator}>
            <span
              className={styles.page_navigator_text}
              onClick={() => void router.push(`/news/event/detail?id=${Number(query.id) + 1}`)}
            >
              ▲ 다음글
            </span>
          </div>
          {Number(query.id) > 2 ? (
            <div className={styles.prev_navigator}>
              <span
                className={styles.page_navigator_text}
                onClick={() => void router.push(`/news/event/detail?id=${Number(query.id) - 1}`)}
              >
                ▼ 이전글
              </span>
            </div>
          ) : null}
        </div>
        <div className={styles.list_navigation_box}>
          <button className={styles.list_navigator} onClick={() => void router.push("/news/event")}>
            목록
          </button>
        </div>
      </div>
    </LayoutLogin>
  )
}
export default EventDetailPage
