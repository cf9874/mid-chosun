import { BasicComment } from "component/util"
import { useState } from "react"

const Test = () => {
  const [comments, setComments] = useState(comentsJson)
  const [content, setContent] = useState("")
  const [commentId, setCommentId] = useState("")

  const onSelect = (id: string) => {
    if (commentId === id) {
      setCommentId("")
      return
    }

    setCommentId(id)
  }

  // const onAdd = () => {
  //   setComments(list => [
  //     ...list,
  //     {
  //       id: "tester1" + Math.random(),
  //       content,
  //       user: "익명",
  //       date: new Date().toISOString(),
  //       replies: [],
  //     },
  //   ])
  //   setContent("")
  // }

  const onAdd = () => {
    if (!content) return

    const newComment = {
      id: `comment:${Math.random()}`,
      content,
      user: "익명",
      date: new Date().toISOString(),
      replies: [],
    }

    setComments(prevList => {
      if (commentId) {
        const commentIndex = prevList.findIndex(comment => comment.id === commentId)

        if (commentIndex !== -1) {
          const newList = [...prevList]
          newList[commentIndex].replies.push({
            id: `reply:${Math.random().toString()}`,
            content,
            user: "익명",
            date: new Date().toISOString(),
          })
          return newList
        }
      }

      return [...prevList, newComment]
    })

    setContent("")
  }

  return (
    <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#dfdfdf" }}>
      {comments.map(comment => {
        return <BasicComment key={comment.id} comment={comment} onSelect={() => onSelect(comment.id)} />
      })}

      <div>
        <div>test2</div>
        <input
          type="text"
          style={{ width: "500px", padding: "5px", border: "1px solid #ddd" }}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder={commentId === "" ? "댓글입력" : "대댓글입력"}
        />
        <button
          onClick={onAdd}
          style={{ padding: "5px 10px", backgroundColor: "#000", color: "#fff", marginLeft: "13px" }}
        >
          댓글 추가
        </button>
      </div>
    </div>
  )
}

export default Test

const comentsJson = [
  {
    id: "54321",
    content: "첫 번째 댓글 내용",
    user: "댓글 작성자1",
    date: "2024-03-04T12:30:45",
    replies: [
      {
        id: "98765",
        content: "첫 번째 댓글에 대한 대댓글 내용",
        user: "대댓글 작성자1",
        date: "2024-03-04T12:35:20",
      },
      {
        id: "87654",
        content: "첫 번째 댓글에 대한 또 다른 대댓글 내용",
        user: "대댓글 작성자2",
        date: "2024-03-04T12:40:10",
      },
    ],
  },
  {
    id: "67890",
    content: "두 번째 댓글 내용",
    date: "2024-03-04T13:15:30",
    user: "댓글 작성자2",
    replies: [],
  },
]
