import { Button, Col, Input, Pagination, Row, Select, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { useState } from "react"
import { useAsyncEffect, useInputs } from "hooks"
import { USER_INFO_SEARCH_TYPE, dataUserTypeOPtions } from "const"
import { CharactersDto } from "apis/dto/game.dto"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { CharacterListTableColumns } from "const/table.const"
import { CharacterDataType } from "type"

const DataCharacterManagementPage = () => {
  const [page, setPage] = useState(1)
  const searchInput = useInputs({ value: "" })
  const [searchType, setSearchType] = useState(USER_INFO_SEARCH_TYPE.ID)
  const [data, setData] = useState<CharactersDto>()
  const [charList, setCharList] = useState<CharacterDataType[]>([])
  useAsyncEffect(async () => {
    const response = await apiManager.gameApi.getCharacters({
      keyword: searchInput.value,
      page: page,
      row: 20,
      searchType: searchType,
    })

    console.log(2727, response)
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setData(response)
    setCharList(
      response.characterLists.map(user => {
        return {
          uid: user.uid,
          bank: user.bank,
          guildname: user.guildname,
          id: user.id,
          lastlogin: user.lastlogin,
          level: user.level,
          money: user.money,
          name: user.name,
          hp: user.hp,
          job: user.job,
          mp: user.mp,
          sex_nm: user.sex_nm,
        }
      }),
    )
  }, [page])

  const onSearch = async () => {
    const response = await apiManager.gameApi.getCharacters({
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
    setCharList(
      response.characterLists.map(user => {
        return {
          uid: user.uid,
          bank: user.bank,
          guildname: user.guildname,
          id: user.id,
          lastlogin: user.lastlogin,
          level: user.level,
          money: user.money,
          name: user.name,
          hp: user.hp,
          job: user.job,
          mp: user.mp,
          sex_nm: user.sex_nm,
        }
      }),
    )
  }
  return (
    <LayoutMain>
      {data && (
        <Col className={styles.container}>
          <Row className={styles.page_title}>유저 캐릭터 정보</Row>
          <Row className={styles.search_box} justify={"end"}>
            <Select
              options={dataUserTypeOPtions}
              value={searchType}
              onChange={(e: USER_INFO_SEARCH_TYPE) => setSearchType(e)}
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
              columns={CharacterListTableColumns}
              dataSource={charList}
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
              total={data.characterTotal}
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
export default AuthHoc(DataCharacterManagementPage)
