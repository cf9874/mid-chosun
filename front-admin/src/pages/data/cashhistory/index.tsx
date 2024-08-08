import { Button, Col, Input, Pagination, Row, Select, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { CashItemHistoryDto } from "apis/dto/game.dto"
import { useState } from "react"
import { useAsyncEffect, useInputs } from "hooks"
import { ITEM_HISTORY_SEARCH_TYPE, cashHistorySearchOptions } from "const"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { CashItemHistoryDataType } from "type"
import { CashItemUseHistoryColums } from "const/table.const"
import { DatePicker } from "antd"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(customParseFormat)

const DataCashHistoryManagementPage = () => {
  const [logList, setLogList] = useState<CashItemHistoryDataType[]>([])
  const [data, setData] = useState<CashItemHistoryDto>()
  const [page, setPage] = useState(1)
  const searchInput = useInputs({ value: "" })
  const [searchType, setSearchType] = useState(ITEM_HISTORY_SEARCH_TYPE.NAME)
  const [date, setDate] = useState(dayjs().format("YYYYMM"))
  const monthFormat = "YYYY/MM"

  useAsyncEffect(async () => {
    const response = await apiManager.gameApi.getCashItemHistory({
      keyword: searchInput.value,
      page: page,
      row: 20,
      searchType: searchType,
      date,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setData(response)
    setLogList(
      response.shopItemUseLogs.map((log, idx) => {
        return {
          seq: idx + 1 + (page - 1) * 20,
          name: log.name,
          logdate: log.logdate,
          char_name: log.char_name,
          ip: log.ip,
        }
      }),
    )
  }, [page])

  const onSearch = async () => {
    const response = await apiManager.gameApi.getCashItemHistory({
      keyword: searchInput.value,
      page: 1,
      row: 20,
      searchType: searchType,
      date,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setData(response)
    setLogList(
      response.shopItemUseLogs.map((log, idx) => {
        return {
          seq: idx + 1 + (page - 1) * 20,
          name: log.name,
          logdate: log.logdate,
          char_name: log.char_name,
          ip: log.ip,
        }
      }),
    )
  }

  return (
    <LayoutMain>
      {data && (
        <Col className={styles.container}>
          <Row className={styles.page_title}>캐쉬아이템 사용조회</Row>
          <Row className={styles.search_box} justify={"end"}>
            <DatePicker
              defaultValue={dayjs("2024/05", monthFormat)}
              format={monthFormat}
              picker="month"
              onChange={e => setDate(e.format("YYYYMM"))}
            />
            <Select
              options={cashHistorySearchOptions}
              value={searchType}
              onChange={(e: ITEM_HISTORY_SEARCH_TYPE) => setSearchType(e)}
              style={{
                width: 120,
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
              columns={CashItemUseHistoryColums}
              dataSource={logList}
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
              total={data.total}
              showSizeChanger={false}
              showQuickJumper={false}
              onChange={e => setPage(e)}
              defaultPageSize={20}
            />
          </Col>
        </Col>
      )}
    </LayoutMain>
  )
}
export default AuthHoc(DataCashHistoryManagementPage)
