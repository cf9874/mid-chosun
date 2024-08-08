import styles from "./comment.basic.module.scss"

export const BasicComment = (props: Iprops) => {
  return (
    <div className={styles.container} onClick={props.onSelect}>
      <div>
        <p className={styles.user}>{props.comment.user}</p> {props.comment.content} - {props.comment.date}
      </div>
      {props.comment.replies && props.comment.replies.length > 0 && (
        <div className={styles.replyContainer}>
          {props.comment.replies.map(reply => {
            return <BasicComment key={reply.id} comment={reply} onSelect={props.onSelect} />
          })}
        </div>
      )}
    </div>
  )
}

interface Iprops {
  comment: { id: string; content: string; user: string; date: string; replies?: IReply[] }
  onSelect: () => void
}

interface IReply {
  id: string
  content: string
  user: string
  date: string
}
