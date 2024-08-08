import { Button, Col, Input, Pagination, Row, Select, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { useState } from "react"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { useAsyncEffect, useInputs } from "hooks"
import { QnaDto } from "apis/dto/cs.dto"
import { CsDataType } from "type"
import { CsTableColumns } from "const/table.const"
import { BasicModal } from "component/modal"
import { CS_SEARCH_TYPE, CS_STATUS, QnaState } from "const/cs.const"
import { csSearchOPtions, csStatusOPtions, csStatusSearchOPtions } from "const"

const CsQnAManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [page, setPage] = useState(1)
  const [csData, setCsData] = useState<QnaDto>()
  const [csList, setCsList] = useState<CsDataType[]>([])
  const [record, setRecord] = useState<CsDataType>()

  const [csSearchStatus, setSearchCsStatus] = useState(CS_STATUS.ALL)
  const [csStatus, setCsStatus] = useState(CS_STATUS.SUBMIT)
  const [csSearchType, setCsSearchType] = useState(CS_SEARCH_TYPE.ID)
  const searchInput = useInputs({ value: "" })
  const [answer, setAnswer] = useState("")
  useAsyncEffect(async () => {
    const response = await apiManager.csApi.getList({
      keyword: "",
      page: page,
      row: 20,
      searchType: csSearchType,
      status: csSearchStatus,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setCsList(
      response.qnaList.map(qna => {
        return {
          ...qna,
          proc: QnaState[qna.proc],
        }
      }),
    )
    setCsData(response)
  }, [page])

  const onSearch = async () => {
    const response = await apiManager.csApi.getList({
      keyword: searchInput.value,
      page: 1,
      row: 20,
      searchType: csSearchType,
      status: csSearchStatus,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    console.log(6464, response)
    setCsList(
      response.qnaList.map(qna => {
        return {
          ...qna,
          proc: QnaState[qna.proc],
        }
      }),
    )
    setCsData(response)
  }
  console.log(csSearchStatus)
  const onRegistAnswer = async () => {
    if (!record) return
    const registRes = await apiManager.csApi.registAnswer({
      num: Number(record.num),
      proc: csStatus,
      reContent: answer,
    })
    console.log(7676, registRes)
    if (apiUtil.isErrorResponse(registRes)) {
      alert(registRes.message ? registRes.message : "서버에 문제가 발생했습니다.")
      return
    }
    setRecord(undefined)
    setCsList([])
    const response = await apiManager.csApi.getList({
      keyword: "",
      page: page,
      row: 20,
      searchType: "ID",
      status: CS_STATUS.ALL,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setCsList(
      response.qnaList.map(qna => {
        return {
          ...qna,
          proc: QnaState[qna.proc],
        }
      }),
    )
    searchInput.onClear()
    setIsModalOpen(false)
  }

  const downloadLink = ({ url = "/", filename = "file" }) => {
    console.log(url.split(".").at(-1))
    if (url === "") return
    void fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = filename + "." + url.split(".").at(-1)
        document.body.appendChild(link)
        link.click()
      })
  }

  return (
    <LayoutMain>
      <BasicModal
        title="1:1 문의"
        open={isModalOpen}
        width={600}
        onOk={onRegistAnswer}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      >
        <Row className={styles.modal_row}>문의 제목 : {record?.title}</Row>
        <Col className={styles.modal_row}>
          <Row>문의 내용 </Row>
          <Row className={styles.modal_content}>{record?.content}</Row>
        </Col>

        <Col className={styles.modal_row}>
          <Row>답변 작성</Row>
          <Row className={styles.modal_recontent_row}>
            <Input value={answer} onChange={e => setAnswer(e.target.value)} />
          </Row>
        </Col>
        {record?.user_file ? (
          <Col className={styles.modal_row}>
            <Row>첨부파일</Row>
            <Row
              className={styles.modal_attachment_row}
              onClick={() =>
                downloadLink({
                  url: record.user_file ?? "",
                  filename: record.user_file?.replace("https://jio-web-image.s3.amazonaws.com/images/board/", ""),
                })
              }
            >
              {record.user_file}
            </Row>
          </Col>
        ) : null}
        <Row align={"middle"} className={styles.modal_row}>
          <Row>처리상태</Row>
          <Row className={styles.modal_status_select}>
            <Select
              options={csStatusOPtions}
              value={csStatus}
              onChange={(e: CS_STATUS) => {
                setCsStatus(e)
              }}
              style={{
                width: 100,
              }}
            />
          </Row>
        </Row>
      </BasicModal>
      <Col className={styles.container}>
        <Row className={styles.page_title}>고객지원 관리</Row>
        <Row className={styles.search_box} justify={"end"}>
          <Select
            options={csStatusSearchOPtions}
            value={csSearchStatus}
            onChange={(e: CS_STATUS) => {
              console.log(188188, e)
              setSearchCsStatus(e)
            }}
            style={{
              width: 100,
            }}
          />
          <Select
            options={csSearchOPtions}
            value={csSearchType}
            onChange={(e: CS_SEARCH_TYPE) => setCsSearchType(e)}
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
            columns={CsTableColumns}
            dataSource={csList}
            pagination={false}
            onRow={record => {
              return {
                onClick: () => {
                  // onSelectRow(record.seq)
                  setRecord(record)
                  console.log(229, record)
                  // if (rowIndex === record.seq) return
                  setIsModalOpen(true)
                  const proc = Object.entries(QnaState).find(e => e[1] === record.proc)?.[0]
                  setAnswer(record.re_content ?? "")
                  setCsStatus(proc as CS_STATUS)
                },
              }
            }}
          />
          <Pagination
            className={styles.pagination}
            total={csData?.total}
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
export default AuthHoc(CsQnAManagementPage)
