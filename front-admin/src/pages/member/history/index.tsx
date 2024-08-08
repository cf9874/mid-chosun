import { Button, Col, Input, Pagination, Row, Select, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { useState } from "react"
import { MemberPayDto } from "apis/dto"
import { useAsyncEffect, useInputs } from "hooks"
import { apiManager } from "apis/api.manager"
import { MEMBER_PAY_TYPE, MEMBER_SEARCH_TYPE_CASHHISTORY, cashhistorySearchOptions, memberPayTypeOptions } from "const"
import { apiUtil } from "apis/api.util"
import { MemberPayHistoryTableColumns } from "const/table.const"
import { MemberPayDataType } from "type"
const MemberHistoryManagementPage = () => {
  const [page, setPage] = useState(1)
  const [memberPayType, setMemberPayType] = useState(MEMBER_PAY_TYPE.ALL)
  const [memberSearchType, setMemberSearchType] = useState(MEMBER_SEARCH_TYPE_CASHHISTORY.ID)
  const [payHistory, setPayHistory] = useState<MemberPayDto>()
  const [payHistoryList, setPayHistoryList] = useState<MemberPayDataType[]>([])
  const searchInput = useInputs({ value: "" })

  useAsyncEffect(async () => {
    const response = await apiManager.memberApi.getUserPayHistory({
      keyword: searchInput.value,
      page: page,
      row: 20,
      type: memberPayType,
      searchType: memberSearchType,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setPayHistory(response.data)
    setPayHistoryList(
      response.data.userPayLists.map((e, i) => {
        return {
          seq: i + 1 + (page - 1) * 20,
          itemName: e.itemName,
          payType: e.payType,
          receiver_id: e.receiver_id,
          regdate: e.regdate,
          sender_id: e.sender_id,
        }
      }),
    )
  }, [page])
  const onSearch = async () => {
    const response = await apiManager.memberApi.getUserPayHistory({
      keyword: searchInput.value,
      page: 1,
      row: 20,
      type: memberPayType,
      searchType: memberSearchType,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setPayHistory(response.data)
    setPayHistoryList(
      response.data.userPayLists.map((e, i) => {
        return {
          seq: i + 1 + (page - 1) * 20,
          itemName: e.itemName,
          payType: e.payType,
          receiver_id: e.receiver_id,
          regdate: e.regdate,
          sender_id: e.sender_id,
        }
      }),
    )
  }

  return (
    payHistory && (
      <LayoutMain>
        <Col className={styles.container}>
          <Row className={styles.page_title}>캐쉬아이템 결제정보</Row>
          <Row className={styles.search_box} justify={"end"}>
            <Select
              options={memberPayTypeOptions}
              value={memberPayType}
              onChange={(e: MEMBER_PAY_TYPE) => setMemberPayType(e)}
              style={{
                width: 100,
              }}
            />
            <Select
              options={cashhistorySearchOptions}
              value={memberSearchType}
              onChange={(e: MEMBER_SEARCH_TYPE_CASHHISTORY) => setMemberSearchType(e)}
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
              columns={MemberPayHistoryTableColumns}
              dataSource={payHistoryList}
              pagination={false}
              onRow={record => {
                return {
                  onClick: event => {
                    console.log(55, record)
                    console.log(56, event)
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
              total={payHistory.userpayTotal}
              showSizeChanger={false}
              showQuickJumper={false}
              onChange={e => setPage(e)}
              defaultPageSize={20}
            />
          </Col>
        </Col>
      </LayoutMain>
    )
  )
}
export default AuthHoc(MemberHistoryManagementPage)
