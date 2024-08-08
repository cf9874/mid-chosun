import { Button, Col, Input, Pagination, Row, Select, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { useState } from "react"
import { useAsyncEffect, useInputs } from "hooks"
import { COMMUNITY_BOARD_TYPE, COMMUNITY_SEARCH_TYPE, communitySearchOptions } from "const"
import { CommunityDataType } from "type"
import { CommunityDto } from "apis/dto/community.dto"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { BasicModal } from "component/modal"
import Image from "next/image"

const { Column } = Table

const CommunityScreenshotBoardManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const [page, setPage] = useState(1)
  const searchInput = useInputs({ value: "" })

  const [boardList, setBoardList] = useState<CommunityDataType[]>([])
  const [boardData, setBoardData] = useState<CommunityDto>()
  const [record, setRecord] = useState<CommunityDataType>()
  const [searchType, setSearchType] = useState<COMMUNITY_SEARCH_TYPE>(COMMUNITY_SEARCH_TYPE.TITLE)
  const [boardImageUrl, setBoardImageUrl] = useState("")
  // 번호 제목 작성자 작성일 조회수
  useAsyncEffect(async () => {
    const response = await apiManager.communityApi.getList({
      keyword: "",
      page: page,
      row: 20,
      type: COMMUNITY_BOARD_TYPE.IMG,
      searchType: searchType,
    })
    console.log(338, response)
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setBoardData(response)
    setBoardList(response.list)
  }, [page])

  const onSearch = async () => {
    console.log(4848, searchInput.value)
    const response = await apiManager.communityApi.getList({
      keyword: searchInput.value,
      page: 1,
      row: 20,
      type: COMMUNITY_BOARD_TYPE.IMG,
      searchType: searchType,
    })
    console.log(5656, response)
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setBoardData(response)
    setBoardList(response.list)
  }
  const onDelete = async () => {
    if (!record) return
    const deleteRes = await apiManager.communityApi.deleteBoard({ contentSeq: record.tbc_seq })
    if (apiUtil.isErrorResponse(deleteRes)) {
      alert(deleteRes.message ? deleteRes.message : "서버에 문제가 발생했습니다.")
      return
    }
    const response = await apiManager.communityApi.getList({
      keyword: "",
      page: 1,
      row: 20,
      type: COMMUNITY_BOARD_TYPE.IMG,
      searchType: searchType,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setBoardData(response)
    setBoardList(response.list)
    setIsDeleteModalOpen(false)
  }

  return (
    <LayoutMain>
      <BasicModal
        title="스크린샷 게시판"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        width={600}
      >
        <Row className={styles.modal_row}>제목</Row>
        <Row className={styles.modal_title_row}>{record?.tbc_title}</Row>
        <Row className={styles.modal_row}>작성자 : {record?.tbc_user_id}</Row>
        <Row className={styles.modal_row}>내용</Row>
        <Col>
          <Row justify={"center"} className={styles.modal_row}>
            {boardImageUrl !== "" ? <Image src={boardImageUrl} width={400} height={400} alt="이미지" /> : null}
          </Row>
          <Row>{record?.tbc_content}</Row>
        </Col>
      </BasicModal>
      <BasicModal
        title="게시글 삭제"
        open={isDeleteModalOpen}
        width={500}
        onOk={onDelete}
        onCancel={() => {
          setIsDeleteModalOpen(false)
        }}
      >
        게시글을 삭제하시겠습니까?
      </BasicModal>
      <Col className={styles.container}>
        <Row className={styles.page_title}>스크린샷 게시판</Row>
        <Row className={styles.search_box} justify={"end"}>
          <Select
            options={communitySearchOptions}
            value={searchType}
            onChange={(e: COMMUNITY_SEARCH_TYPE) => {
              setSearchType(e)
            }}
            style={{
              width: 100,
            }}
          />

          <Input
            className={styles.search_input}
            value={searchInput.value}
            onChange={searchInput.onChange}
            style={{
              width: 200,
            }}
          />
          <Button onClick={onSearch}>검색</Button>
        </Row>
        <Col className={styles.table_wrapper}>
          <Table
            dataSource={boardList}
            pagination={false}
            onRow={record => {
              return {
                onClick: () => {
                  setRecord(record)
                  setBoardImageUrl(
                    record?.tbc_file_urls.length < 15
                      ? ""
                      : record?.tbc_file_urls
                          .replaceAll("\\", "")
                          .replaceAll("[", "")
                          .replaceAll("]", "")
                          .replaceAll(`"`, ""),
                  )
                }, // click row
                // onDoubleClick: event => {}, // double click row
                // onContextMenu: event => {}, // right button click row
                // onMouseEnter: event => {}, // mouse enter row
                // onMouseLeave: event => {}, // mouse leave row
              }
            }}
          >
            <Column title="번호" dataIndex="tbc_seq" key="tbc_seq" />
            <Column
              title="제목"
              dataIndex="tbc_title"
              key="tbc_title"
              render={record => {
                return <a onClick={() => setIsModalOpen(true)}>{record}</a>
              }}
            />
            <Column title="작성자" dataIndex="id" key="id" />
            <Column title="작성일" dataIndex="tbc_reg_date" key="tbc_reg_date" />
            <Column title="조회수" dataIndex="tbc_count" key="tbc_count" />

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
            total={boardData?.total}
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
export default AuthHoc(CommunityScreenshotBoardManagementPage)
