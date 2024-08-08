import { Button, Col, Input, Pagination, Row, Select, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { useAsyncEffect, useInputs } from "hooks"
import { apiManager } from "apis/api.manager"
import { useState } from "react"
import { OnlineUsersDto } from "apis/dto/game.dto"
import { OnlineUserDataType } from "type"
import { OnlineUserListTableColumns } from "const/table.const"
import { apiUtil } from "apis/api.util"
import { DATA_SEARCH_TYPE, dataTypeOPtions } from "const"

const DataOnlineManagementPage = () => {
  const [userList, setUserList] = useState<OnlineUserDataType[]>([])
  const [data, setData] = useState<OnlineUsersDto>()
  const [page, setPage] = useState(1)
  const searchInput = useInputs({ value: "" })
  const [searchType, setSearchType] = useState(DATA_SEARCH_TYPE.ID)
  useAsyncEffect(async () => {
    const response = await apiManager.gameApi.getOnlineUsers({
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
    setUserList(
      response.inGameLists.map((user, idx) => {
        return {
          seq: idx + 1 + (page - 1) * 20,
          bank: user.bank,
          guildname: user.guildname,
          id: user.id,
          ip: user.ip,
          lastlogin: user.lastlogin,
          level: user.level,
          money: user.money,
          name: user.name,
          rebirth: user.rebirth,
          rebirth_level: user.rebirth_level,
        }
      }),
    )
  }, [page])

  const onSearch = async () => {
    const response = await apiManager.gameApi.getOnlineUsers({
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
    setUserList(
      response.inGameLists.map((user, idx) => {
        return {
          seq: idx + 1 + (page - 1) * 20,
          bank: user.bank,
          guildname: user.guildname,
          id: user.id,
          ip: user.ip,
          lastlogin: user.lastlogin,
          level: user.level,
          money: user.money,
          name: user.name,
          rebirth: user.rebirth,
          rebirth_level: user.rebirth_level,
        }
      }),
    )
  }
  return (
    <LayoutMain>
      {data && (
        <Col className={styles.container}>
          <Row className={styles.page_title}>게임 접속 유저 ({data.inGameTotal}명)</Row>
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
              columns={OnlineUserListTableColumns}
              dataSource={userList}
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
              total={data.inGameTotal}
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
export default AuthHoc(DataOnlineManagementPage)
