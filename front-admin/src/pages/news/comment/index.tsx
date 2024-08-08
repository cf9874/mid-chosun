import { Button, Col, Pagination, Row, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { BasicModal } from "component/modal"
import { useState } from "react"
import { CommentDataType } from "type"
import { CommentDto } from "apis/dto/community.dto"
import { useAsyncEffect } from "hooks"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { REPORTTYPE } from "const"

const { Column } = Table

const NewsCommentManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [page, setPage] = useState(1)

  const [commentList, setCommentList] = useState<CommentDataType[]>([])
  const [commentData, setCommentData] = useState<CommentDto>()
  const [record, setRecord] = useState<CommentDataType>()

  useAsyncEffect(async () => {
    const response = await apiManager.communityApi.getCommentList({
      page: page,
      row: 20,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setCommentData(response)
    setCommentList(
      response.reportCommentList.map(e => {
        return {
          ...e,
          c_reported_type: REPORTTYPE[e.c_reported_type],
          cr_reported_type: REPORTTYPE[e.cr_reported_type],
        }
      }),
    )
  }, [page])

  const onDelete = async () => {
    if (!record) return
    const deleteRes = await apiManager.communityApi.deleteComment({
      commentSeq: record.c_seq,
    })
    console.log(5151, deleteRes)
    if (apiUtil.isErrorResponse(deleteRes)) {
      alert(deleteRes.message ? deleteRes.message : "서버에 문제가 발생했습니다.")
      return
    }
    const response = await apiManager.communityApi.getCommentList({
      page: 1,
      row: 20,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setCommentData(response)
    setCommentList(
      response.reportCommentList.map(e => {
        return {
          ...e,
          c_reported_type: REPORTTYPE[e.c_reported_type],
          cr_reported_type: REPORTTYPE[e.cr_reported_type],
        }
      }),
    )
    setIsDeleteModalOpen(false)
  }
  return (
    <LayoutMain>
      <BasicModal
        title="댓글"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Row>작성자 : {record?.c_user_id}</Row>
        <Row>신고자 : {record?.cr_reported_id}</Row>
        <Row>신고일 : {record?.reg_date}</Row>
        <Row>댓글 내용 : {record?.cr_reported_content}</Row>
        <Row>신고사유 : {REPORTTYPE[(record?.cr_reported_content ?? "") as keyof typeof REPORTTYPE]}</Row>
        <Row></Row>
      </BasicModal>
      <BasicModal
        title="댓글 삭제"
        open={isDeleteModalOpen}
        onOk={onDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      >
        <Row>댓글을 삭제하시겠습니까?</Row>
      </BasicModal>
      <Col className={styles.container}>
        <Row className={styles.page_title}>댓글 신고 관리</Row>
        <Col className={styles.table_wrapper}>
          <Table
            dataSource={commentList}
            pagination={false}
            onRow={record => {
              return {
                onClick: () => {
                  setRecord(record)
                }, // click row
                // onDoubleClick: event => {}, // double click row
                // onContextMenu: event => {}, // right button click row
                // onMouseEnter: event => {}, // mouse enter row
                // onMouseLeave: event => {}, // mouse leave row
              }
            }}
          >
            <Column title="번호" dataIndex="c_seq" key="c_seq" />
            <Column
              title="댓글 내용"
              dataIndex="c_content"
              key="c_content"
              render={record => {
                return <a onClick={() => setIsModalOpen(true)}>{record}</a>
              }}
            />
            <Column title="신고내용" dataIndex="cr_reported_content" key="cr_reported_content" />
            <Column title="신고사유" dataIndex="cr_reported_type" key="cr_reported_type" />
            <Column title="작성자" dataIndex="c_user_id" key="c_user_id" />
            <Column title="신고자" dataIndex="cr_reported_id" key="cr_reported_id" />
            <Column title="날짜" dataIndex="reg_date" key="reg_date" />
            <Column
              title="삭제"
              dataIndex="delete"
              key="delete"
              render={() => {
                return <Button onClick={() => setIsDeleteModalOpen(true)}>삭제</Button>
              }}
            />
          </Table>
          <Pagination
            className={styles.pagination}
            total={commentData?.total}
            showSizeChanger={false}
            showQuickJumper={false}
            onChange={e => setPage(e)}
            defaultPageSize={20}
          />
        </Col>
      </Col>
    </LayoutMain>
  )
}
export default AuthHoc(NewsCommentManagementPage)
