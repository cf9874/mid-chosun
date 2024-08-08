import { Col, Pagination, Row, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { BasicModal } from "component/modal"
import { useState } from "react"

const CommunityCommentListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  //   const [page, setPage] = useState(1)

  return (
    <LayoutMain>
      <BasicModal
        title="댓글 삭제"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Row>댓글을 삭제하시겠습니까?</Row>
      </BasicModal>
      <Col className={styles.container}>
        <Row className={styles.page_title}>댓글 신고 관리</Row>
        <Col className={styles.table_wrapper}>
          <Table />
          <Pagination
            className={styles.pagination}
            // total={commentData?.total}
            total={10}
            showSizeChanger={false}
            showQuickJumper={false}
            // onChange={e => setPage(e)}
            defaultPageSize={20}
          />
        </Col>
      </Col>
    </LayoutMain>
  )
}
export default AuthHoc(CommunityCommentListPage)
