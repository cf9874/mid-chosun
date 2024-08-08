import { Space, Button, Col, Input, Pagination, Row, Select, Table, TableProps, DatePicker } from "antd"

import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { InGameNoticeDto } from "apis/dto/game.dto"
import { useState } from "react"
import { useAsyncEffect, useInputs } from "hooks"
import { DATA_SEARCH_TYPE, dataTypeOPtions } from "const"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { InGameNoticeDataType } from "type"
import { BasicModal } from "component/modal"
import dayjs from "dayjs"
const { RangePicker } = DatePicker
const DataNoticeManagementPage = () => {
  const [noticeList, setNoticeList] = useState<InGameNoticeDataType[]>([])
  const [data, setData] = useState<InGameNoticeDto>()
  const [page, setPage] = useState(1)
  const searchInput = useInputs({ value: "" })
  const [searchType, setSearchType] = useState(DATA_SEARCH_TYPE.ID)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)
  const [record, setRecord] = useState<InGameNoticeDataType>()
  const commnetInput = useInputs({ value: "" })
  const sendCntInput = useInputs({ value: "" })
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const [comment, setComment] = useState("")
  const [sendCnt, setSendCnt] = useState(0)
  const InGameNoticeListTableColums: TableProps<InGameNoticeDataType>["columns"] = [
    {
      title: "번호",
      dataIndex: "num",
      key: "num",
    },
    {
      title: "제목",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "노출 시작일",
      dataIndex: "startdate",
      key: "startdate",
    },
    {
      title: "노출 종료일",
      dataIndex: "enddate",
      key: "enddate",
    },
    {
      title: "등록일",
      dataIndex: "regdate",
      key: "regdate",
    },
    {
      title: "사용여부",
      dataIndex: "used",
      key: "used",
    },
    {
      title: "호출횟수",
      dataIndex: "send_cnt",
      key: "send_cnt",
    },
    {
      title: "수정",
      dataIndex: "edit",
      key: "edit",
      render(_, record) {
        return (
          <Button
            onClick={() => {
              setRecord(record)
              setIsEditModalOpen(true)
            }}
          >
            수정
          </Button>
        )
      },
    },
    {
      title: "삭제",
      dataIndex: "delete",
      key: "delete",
      render(_, record) {
        return (
          <Button
            onClick={() => {
              setRecord(record)
              setIsDeleteModalOpen(true)
            }}
          >
            삭제
          </Button>
        )
      },
    },
  ]
  useAsyncEffect(async () => {
    const response = await apiManager.gameApi.getNoticeList({
      keyword: searchInput.value,
      page: page,
      row: 20,
      searchType: searchType,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setData(response)
    setNoticeList(
      response.noticeList.map(notice => {
        return {
          key: notice.num,
          num: notice.num,
          comment: notice.comment,
          startdate: notice.startdate,
          enddate: notice.enddate,
          regdate: notice.regdate,
          used: notice.used,
          send_cnt: notice.send_cnt,
        }
      }),
    )
  }, [page])

  const onSearch = async () => {
    const response = await apiManager.gameApi.getNoticeList({
      keyword: searchInput.value,
      page: 1,
      row: 20,
      searchType: searchType,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setData(response)
    setNoticeList(
      response.noticeList.map(notice => {
        return {
          key: notice.num,
          num: notice.num,
          comment: notice.comment,
          startdate: notice.startdate,
          enddate: notice.enddate,
          regdate: notice.regdate,
          used: notice.used,
          send_cnt: notice.send_cnt,
        }
      }),
    )
  }
  const registNotice = async () => {
    if (!commnetInput.value) {
      alert("공지사항 제목을 입력해주세요.")
      return
    }
    if (!sendCntInput.value) {
      alert("호출 횟수를 입력해주세요.")
      return
    }
    if (!startDate) {
      alert("시작 날짜를 입력해주세요.")
      return
    }
    if (!endDate) {
      alert("종료 날짜를 입력해주세요.")
      return
    }

    const response = await apiManager.gameApi.registNotice({
      comment: commnetInput.value,
      sendCnt: Number(sendCntInput.value),
      startDate: startDate,
      endDate: endDate,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      commnetInput.onClear()
      sendCntInput.onClear()
      setStartDate("")
      setEndDate("")
      return
    }
    commnetInput.onClear()
    sendCntInput.onClear()
    setStartDate("")
    setEndDate("")
    await onSearch()
    setIsPostModalOpen(false)
  }
  const editNotice = async () => {
    if (!record) return
    if (comment === "") {
      alert("공지사항 제목을 입력해주세요.")
      return
    }
    if (sendCnt === 0) {
      alert("호출 횟수를 입력해주세요.")
      return
    }
    if (!startDate) {
      alert("시작 날짜를 입력해주세요.")
      return
    }
    if (!endDate) {
      alert("종료 날짜를 입력해주세요.")
      return
    }
    const response = await apiManager.gameApi.editNotice({
      num: record.num,
      comment,
      sendCnt,
      startDate: startDate,
      endDate: endDate,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")

      return
    }

    await onSearch()
    setIsEditModalOpen(false)
  }
  const deleteNotice = async () => {
    if (!record) return
    const response = await apiManager.gameApi.deleteNotice({ num: record.num })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    await onSearch()
    setIsDeleteModalOpen(false)
  }

  return (
    <LayoutMain>
      {data && (
        <Col className={styles.container}>
          <BasicModal
            title="인게임 공지 수정"
            open={isEditModalOpen}
            onOk={editNotice}
            onCancel={() => {
              setIsEditModalOpen(false)
              setComment("")
              setSendCnt(0)
            }}
          >
            <Space direction="vertical" size={15} className={styles.modal_wrapper}>
              <Row>제목</Row>
              <Row>
                <Input value={comment} onChange={e => setComment(e.target.value)} />
              </Row>
              <Row>호출 횟수</Row>
              <Row>
                <Input type="number" value={sendCnt} onChange={e => setSendCnt(Number(e.target.value))} />
              </Row>
              <Row>날짜</Row>
              <Row>
                <RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="YYYY-MM-DD HH:mm"
                  value={[dayjs(startDate), dayjs(endDate)]}
                  onChange={(value, dateString) => {
                    console.log(value)
                    setStartDate(dateString[0])
                    setEndDate(dateString[1])
                  }}
                />
              </Row>
            </Space>
          </BasicModal>
          <BasicModal
            title="인게임 공지 삭제"
            open={isDeleteModalOpen}
            onOk={deleteNotice}
            onCancel={() => {
              setIsDeleteModalOpen(false)
            }}
          >
            <Row>공지를 삭제하시겠습니까?</Row>
          </BasicModal>
          <BasicModal
            title="인게임 공지 등록"
            open={isPostModalOpen}
            onOk={registNotice}
            onCancel={() => {
              setIsPostModalOpen(false)
            }}
          >
            <Space direction="vertical" size={15} className={styles.modal_wrapper}>
              <Row>제목</Row>
              <Row>
                <Input value={commnetInput.value} onChange={commnetInput.onChange} />
              </Row>
              <Row>호출 횟수</Row>
              <Row>
                <Input type="number" value={sendCntInput.value} onChange={sendCntInput.onChange} />
              </Row>
              <Row>날짜</Row>
              <Row>
                <RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={(value, dateString) => {
                    console.log(value)
                    setStartDate(dateString[0])
                    setEndDate(dateString[1])
                  }}
                />
              </Row>
            </Space>
          </BasicModal>
          <Row className={styles.page_title}>인게임 공지</Row>
          <Row className={styles.search_box} justify={"end"}>
            <Select
              options={dataTypeOPtions}
              value={searchType}
              onChange={(e: DATA_SEARCH_TYPE) => setSearchType(e)}
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
              columns={InGameNoticeListTableColums}
              dataSource={noticeList}
              pagination={false}
              onRow={record => {
                return {
                  onClick: () => {
                    setRecord(record)
                    setComment(record.comment)
                    setSendCnt(record.send_cnt)
                    setStartDate(record.startdate)
                    setEndDate(record.enddate)
                  }, // click row
                  // onDoubleClick: event => {}, // double click row
                  // onContextMenu: event => {}, // right button click row
                  // onMouseEnter: event => {}, // mouse enter row
                  // onMouseLeave: event => {}, // mouse leave row
                }
              }}
            />
            <Pagination
              className={styles.pagination}
              total={data.noticeTotal}
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
      )}
    </LayoutMain>
  )
}
export default AuthHoc(DataNoticeManagementPage)
