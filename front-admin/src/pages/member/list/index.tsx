import { Button, Col, Input, Pagination, Radio, Row, Select, Table } from "antd"
import { LayoutMain } from "component/layout/layout.main"
import styles from "./index.module.scss"
import AuthHoc from "hoc/AuthHoc"
import { useState } from "react"
import { useAsyncEffect, useInputs } from "hooks"
import { apiManager } from "apis/api.manager"
import { apiUtil } from "apis/api.util"
import { MemberTableColumns } from "const/table.const"
import { MemberDataType } from "type"
import {
  MEMBER_SEARCH_TYPE,
  MEMBER_STATUS,
  MEMBER_STOP_PERIOD,
  MEMBER_TYPE,
  // QNA_LIST,
  memberSearchOptions,
  memberTypeOPtions,
  userStatusOptions,
} from "const"
import {
  // MemberDetailDto,
  MemberDto,
} from "apis/dto"
import { BasicModal } from "component/modal"

const MemberListManagementPage = () => {
  const [userList, setUserList] = useState<MemberDataType[]>([])
  const [userData, setUserData] = useState<MemberDto>()
  const [page, setPage] = useState(1)
  const [memberType, setMemberType] = useState(MEMBER_TYPE.ALL)
  const [memberSearchType, setMemberSearchType] = useState(MEMBER_SEARCH_TYPE.ID)
  const searchInput = useInputs({ value: "" })

  // modal 변수
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isStopModalOpen, setIsStopModalOpen] = useState(false)
  // const [userDetail, setUserDetail] = useState<MemberDetailDto>()
  const [stopPeriod, setStopPeriod] = useState<MEMBER_STOP_PERIOD>(MEMBER_STOP_PERIOD.DAY)
  const [userStatus, setUserStatus] = useState<MEMBER_STATUS>(MEMBER_STATUS.NORMAL)
  const [record, setRecord] = useState<MemberDataType>()

  useAsyncEffect(async () => {
    const response = await apiManager.memberApi.getUserList({
      keyword: searchInput.value,
      page: page,
      row: 20,
      type: memberType,
      searchType: memberSearchType,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    console.log(88, response.data.userLists)

    setUserData(response.data)
    setUserList(
      response.data.userLists.map(user => {
        return {
          key: user.num,
          seq: user.num,
          id: user.id,
          nick: user.nick,
          status: user.status,
          jumin: user.jumin1,
          reg_date: user.reg_date,
          address: user.address,
          phone: user.phone,
          mail: user.mail,
          cash: user.cash,
          name: user.name,
          charName: user.charName,
          stop_date: user.stop_date ?? "-",
        }
      }),
    )
  }, [page])

  const onSearch = async () => {
    const response = await apiManager.memberApi.getUserList({
      keyword: searchInput.value,
      page: 1,
      row: 20,
      type: memberType,
      searchType: memberSearchType,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setUserData(response.data)
    setUserList(
      response.data.userLists.map(user => {
        return {
          key: user.num,
          seq: user.num,
          id: user.id,
          nick: user.nick,
          status: user.status,
          jumin: user.jumin1,
          reg_date: user.reg_date,
          address: user.address,
          phone: user.phone,
          mail: user.mail,
          cash: user.cash,
          name: user.name,
          charName: user.charName,
          stop_date: user.stop_date ?? "-",
        }
      }),
    )
  }

  const stopUser = async () => {
    if (!record) return
    const body = {
      num: record.seq,
      memOut: userStatus,
      stopCount: userStatus === MEMBER_STATUS.STOP ? stopPeriod.toString() : "0",
    }
    console.log(body)
    const stopRes = await apiManager.memberApi.stopUser(body)
    if (apiUtil.isErrorResponse(stopRes)) {
      alert(stopRes.message ? stopRes.message : "서버에 문제가 발생했습니다.")
      return
    }

    const response = await apiManager.memberApi.getUserList({
      keyword: searchInput.value,
      page: 1,
      row: 20,
      type: memberType,
      searchType: memberSearchType,
    })
    if (apiUtil.isErrorResponse(response)) {
      alert(response.message ? response.message : "서버에 문제가 발생했습니다.")
      return
    }
    setUserData(response.data)
    setUserList(
      response.data.userLists.map(user => {
        return {
          key: user.num,
          seq: user.num,
          id: user.id,
          nick: user.nick,
          status: user.status,
          jumin: user.jumin1,
          reg_date: user.reg_date,
          address: user.address,
          phone: user.phone,
          mail: user.mail,
          cash: user.cash,
          name: user.name,
          charName: user.charName,
          stop_date: user.stop_date ?? "-",
        }
      }),
    )
    setStopPeriod(MEMBER_STOP_PERIOD.DAY)
    setUserStatus(MEMBER_STATUS.NORMAL)
    setIsStopModalOpen(false)
  }

  return (
    userData && (
      <LayoutMain>
        <BasicModal
          title="유저 정보"
          open={isModalOpen}
          onOk={() => {
            setIsModalOpen(false)
            setIsStopModalOpen(true)
          }}
          onCancel={() => setIsModalOpen(false)}
          width={600}
        >
          {/* <Row>유저 질문 : {QNA_LIST[Number(userDetail?.userDetail.qna) as keyof typeof QNA_LIST]}</Row>
          <Row>유저 질문답변: {userDetail?.userDetail.qna_value}</Row> */}
          {record && (
            <Col className={styles.modal_container}>
              <Row className={styles.modal_row}>
                <Col className={styles.modal_label}>유저 아이디</Col>
                <Col> {record?.id}</Col>
              </Row>
              <Row className={styles.modal_row}>
                <Col className={styles.modal_label}>유저 번호</Col>
                <Col>{record?.seq}</Col>
              </Row>
              <Row align={"middle"} className={styles.modal_row}>
                <Col className={styles.modal_label}>유저 상태 변경</Col>
                <Col>
                  <Select
                    options={userStatusOptions}
                    value={userStatus}
                    onChange={e => setUserStatus(e)}
                    style={{
                      width: 120,
                    }}
                  />
                </Col>
              </Row>
              <Row className={styles.modal_row}>기간</Row>
              <Row className={styles.modal_row}>
                <Radio.Group
                  onChange={e => setStopPeriod(e.target.value as MEMBER_STOP_PERIOD)}
                  disabled={userStatus === MEMBER_STATUS.NORMAL}
                >
                  <Radio value={MEMBER_STOP_PERIOD.DAY}>1일</Radio>
                  <Radio value={MEMBER_STOP_PERIOD.THREE}>3일</Radio>
                  <Radio value={MEMBER_STOP_PERIOD.FIVE}>5일</Radio>
                  <Radio value={MEMBER_STOP_PERIOD.WEEK}>7일</Radio>
                  <Radio value={MEMBER_STOP_PERIOD.MONTH}>30일</Radio>
                  <Radio value={MEMBER_STOP_PERIOD.TWO_MONTH}>60일</Radio>
                  <Radio value={MEMBER_STOP_PERIOD.THREE_MONTH}>90일</Radio>
                  <Radio value={MEMBER_STOP_PERIOD.BAN}>9999일</Radio>
                </Radio.Group>
              </Row>
            </Col>
          )}
        </BasicModal>
        <BasicModal
          title="유저 상태 변경"
          open={isStopModalOpen}
          onOk={stopUser}
          onCancel={() => setIsStopModalOpen(false)}
          width={600}
        >
          <Col className={styles.modal_container}>
            <Row className={styles.modal_row}>
              <Col className={styles.modal_label}>유저 ID</Col>
              <Col>{record?.id}</Col>
            </Row>
            <Row className={styles.modal_row}>
              <Col className={styles.modal_label}>유저 상태 변경</Col>
              <Col>
                {userStatus !== MEMBER_STATUS.NORMAL ? "일반" : "정지"} →{" "}
                {userStatus === MEMBER_STATUS.NORMAL ? "일반" : "정지"}
              </Col>
            </Row>
            {userStatus !== MEMBER_STATUS.NORMAL ? (
              <Row className={styles.modal_row}>
                <Col className={styles.modal_label}>기간</Col>
                <Col>{stopPeriod} 일</Col>
              </Row>
            ) : null}
            <Row className={styles.modal_row}>회원의 상태를 변경하시겠습니까?</Row>
          </Col>
        </BasicModal>
        <Col className={styles.container}>
          <Row className={styles.page_title}>전체 회원</Row>
          <Row className={styles.search_box} justify={"end"}>
            <Select
              options={memberSearchOptions}
              value={memberType}
              onChange={(e: MEMBER_TYPE) => {
                setMemberType(e)
              }}
              style={{
                width: 100,
              }}
            />
            <Select
              options={memberTypeOPtions}
              value={memberSearchType}
              onChange={(e: MEMBER_SEARCH_TYPE) => setMemberSearchType(e)}
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
              columns={MemberTableColumns}
              dataSource={userList}
              pagination={false}
              onRow={record => {
                return {
                  onClick: () => {
                    console.log(55, record)
                    // const userData = await apiManager.memberApi.getUserDetail(record.seq)
                    // if (apiUtil.isErrorResponse(userData)) {
                    //   alert(userData.message ? userData.message : "서버에 문제가 발생했습니다.")
                    //   return
                    // }
                    // setUserDetail(userData)
                    // if (userData.userDetail.cash !== undefined) {
                    //   setIsModalOpen(true)
                    // }
                    setRecord(record)
                    setIsModalOpen(true)
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
              total={userData.total}
              showSizeChanger={false}
              showQuickJumper={false}
              onChange={e => setPage(e)}
              defaultPageSize={20}
            />
          </Col>
          {/* <Row justify={"end"} className={styles.button_wrapper}>
            <Button
              onClick={() => {
                console.log("등록")
                setIsPostModalOpen(true)
              }}
            >
              등록
            </Button>
          </Row> */}
        </Col>
      </LayoutMain>
    )
  )
}
export default AuthHoc(MemberListManagementPage)
