import { Button, Col, Input, Pagination, Row, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import { useState } from "react"
import { NewsDataType } from "type"
import { BasicModal } from "component/modal"
import AuthHoc from "hoc/AuthHoc"
import { NoticeDto } from "apis/dto/news.dto"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { useAsyncEffect, useInputs } from "hooks"
import CustomEditor from "component/util/editor"

const NewsUpdateManagementPage = () => {
  const { Column } = Table
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const [newsList, setNewsList] = useState<NewsDataType[]>([])
  const [newsData, setNewsData] = useState<NoticeDto>()
  const [record, setRecord] = useState<NewsDataType>()
  const [page, setPage] = useState(1)
  const [toggle, setToggle] = useState(false)
  const titleInput = useInputs({ value: "" })
  const [editTitle, setEditTitle] = useState("")
  const [body, setBody] = useState("")
  const [rowIndex, setRowIndex] = useState(0)
  useAsyncEffect(async () => {
    const response = await apiManager.newsApi.getList({
      page: page,
      row: 20,
      type: "UPDATE",
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setNewsList(
      response.list.map(list => {
        return {
          ...list,
          key: list.seq,
        }
      }),
    )
    setNewsData(response)
  }, [page])

  const registNews = async () => {
    if (!titleInput.value) {
      alert("제목을 입력해주세요.")
      return
    }
    if (!body) {
      alert("내용을 입력해주세요.")
      return
    }
    const registRes = await apiManager.newsApi.registNews({
      type: "UPDATE",
      title: titleInput.value,
      content: body,
    })
    if (apiUtil.isErrorResponse(registRes)) {
      alert(registRes.message ? registRes.message : "서버에 문제가 발생했습니다.")
      return
    }
    const response = await apiManager.newsApi.getList({
      page: 1,
      row: 20,
      type: "UPDATE",
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setNewsList(
      response.list.map(list => {
        return {
          ...list,
          key: list.seq,
        }
      }),
    )
    setNewsData(response)
    titleInput.onClear()
    setBody("")
    setIsPostModalOpen(false)
    setToggle(state => !state)
  }

  const onEdit = async () => {
    if (!record) return
    if (!editTitle) {
      alert("제목을 입력해주세요.")
      return
    }
    if (!body) {
      alert("내용을 입력해주세요.")
      return
    }
    const registRes = await apiManager.newsApi.editNews({
      seq: record.seq,
      type: "UPDATE",
      title: editTitle,
      content: body,
    })

    if (apiUtil.isErrorResponse(registRes)) {
      alert(registRes.message ? registRes.message : "서버에 문제가 발생했습니다.")
      return
    }
    const response = await apiManager.newsApi.getList({
      page: 1,
      row: 20,
      type: "UPDATE",
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setNewsList(
      response.list.map(list => {
        return {
          ...list,
          key: list.seq,
        }
      }),
    )
    setNewsData(response)
    titleInput.onClear()
    setBody("")
    setIsEditModalOpen(false)
    setToggle(state => !state)
  }

  const onDelete = async () => {
    if (!record) return
    const deleteRes = await apiManager.newsApi.deleteNews({ seq: record?.seq })
    if (apiUtil.isErrorResponse(deleteRes)) {
      alert(deleteRes.message ? deleteRes.message : "서버에 문제가 발생했습니다.")
      return
    }
    const response = await apiManager.newsApi.getList({
      page: 1,
      row: 20,
      type: "UPDATE",
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setNewsList(
      response.list.map(list => {
        return {
          ...list,
          key: list.seq,
        }
      }),
    )
    setNewsData(response)
    titleInput.onClear()
    setBody("")
    setIsDeleteModalOpen(false)
    setToggle(state => !state)
  }

  const onSelectRow = (index: number) => {
    setRowIndex(state => (state === index ? 0 : index))
  }

  const onChange = (html: string) => {
    setBody(html)
  }

  return (
    <LayoutMain>
      <BasicModal
        title="업데이트 공지"
        open={isModalOpen}
        width={1000}
        onOk={() => {
          setIsModalOpen(false)
        }}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      >
        <Row>제목 : {record?.title}</Row>
        <Row>내용</Row>
        <Row dangerouslySetInnerHTML={{ __html: record?.content ?? "" }}></Row>
      </BasicModal>
      <BasicModal
        title="업데이트 공지 수정"
        open={isEditModalOpen}
        width={1000}
        onOk={onEdit}
        onCancel={() => {
          setIsEditModalOpen(false)
        }}
      >
        <Row>
          제목
          <Input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
        </Row>
        <Row>내용</Row>
        <CustomEditor onChange={onChange} content={record?.content} toggle={toggle} />
      </BasicModal>
      <BasicModal
        title="업데이트 공지 등록"
        open={isPostModalOpen}
        onOk={registNews}
        onCancel={() => {
          setIsPostModalOpen(false)
          setRecord(undefined)
        }}
      >
        <Row>
          <Col className={styles.modal_title}>제목</Col>
          <Input value={titleInput.value} onChange={titleInput.onChange} />
        </Row>

        <Row className={styles.modal_title}>내용</Row>
        <Row justify={"center"} className={styles.editer_wrapper}>
          <Col className={styles.editer_box}>
            <CustomEditor onChange={onChange} toggle={toggle} />
          </Col>
        </Row>
      </BasicModal>
      <BasicModal
        title="업데이트 공지 삭제"
        open={isDeleteModalOpen}
        width={500}
        onOk={onDelete}
        onCancel={() => {
          setIsDeleteModalOpen(false)
        }}
      >
        공지를 삭제하시겠습니까?
      </BasicModal>
      <Col className={styles.container}>
        <Row className={styles.page_title} align={"middle"}>
          업데이트 관리
        </Row>
        <Col className={styles.table_wrapper}>
          <Table
            dataSource={newsList}
            pagination={false}
            onRow={record => {
              return {
                onClick: () => {
                  onSelectRow(record.seq)
                  if (rowIndex === record.seq) return
                  setRecord(record)
                  setEditTitle(record.title)
                },
              }
            }}
          >
            <Column title="번호" dataIndex="seq" key="seq" />
            <Column
              title="제목"
              dataIndex="title"
              key="title"
              render={record => {
                return <a onClick={() => setIsModalOpen(true)}>{record}</a>
              }}
            />
            <Column title="날짜" dataIndex="reg_date" key="reg_date" />
            <Column title="조회수" dataIndex="count" key="count" />
            <Column
              title="수정"
              dataIndex="edit"
              key="edit"
              render={() => {
                return (
                  <Button
                    onClick={() => {
                      setIsEditModalOpen(true)
                    }}
                  >
                    수정
                  </Button>
                )
              }}
            />
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
            total={newsData?.total}
            showSizeChanger={false}
            showQuickJumper={false}
            onChange={e => setPage(e)}
            defaultPageSize={20}
          />
        </Col>
        <Row justify={"end"} className={styles.button_wrapper}>
          <Button
            onClick={() => {
              setIsPostModalOpen(true)
            }}
          >
            등록
          </Button>
        </Row>
      </Col>
    </LayoutMain>
  )
}
export default AuthHoc(NewsUpdateManagementPage)
