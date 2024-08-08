import { TableProps } from "antd"
import {
  AccountDataType,
  CashItemHistoryDataType,
  CharacterDataType,
  CsDataType,
  MemberDataType,
  MemberPayDataType,
  OnlineUserDataType,
} from "type"

export const AdminTableColumns: TableProps<AccountDataType>["columns"] = [
  {
    title: "번호",
    dataIndex: "num",
    key: "num",
  },
  {
    title: "아이디",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "레벨",
    dataIndex: "level",
    key: "level",
  },
]
export const MemberTableColumns: TableProps<MemberDataType>["columns"] = [
  {
    title: "번호",
    dataIndex: "seq",
    key: "seq",
  },
  {
    title: "아이디",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "캐릭터명",
    dataIndex: "charName",
    key: "charName",
  },
  {
    title: "현재 보유 캐쉬",
    dataIndex: "cash",
    key: "cash",
  },
  {
    title: "생년월일",
    dataIndex: "jumin",
    key: "jumin",
  },
  {
    title: "전화번호",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "메일",
    dataIndex: "mail",
    key: "mail",
  },
  {
    title: "주소",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "상태",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "정지종료일",
    dataIndex: "stop_date",
    key: "stop_date",
  },
  {
    title: "가입일",
    dataIndex: "reg_date",
    key: "reg_date",
  },
]
export const MemberPayHistoryTableColumns: TableProps<MemberPayDataType>["columns"] = [
  {
    title: "번호",
    dataIndex: "seq",
    key: "seq",
  },
  {
    title: "보낸 ID/캐릭터",
    dataIndex: "sender_id",
    key: "sender_id",
  },
  {
    title: "받는 ID/캐릭터",
    dataIndex: "receiver_id",
    key: "receiver_id",
  },
  {
    title: "아이템 이름",
    dataIndex: "itemName",
    key: "itemName",
  },
  {
    title: "결제유형",
    dataIndex: "payType",
    key: "payType",
  },
  {
    title: "날짜",
    dataIndex: "regdate",
    key: "regdate",
  },
]

export const OnlineUserListTableColumns: TableProps<OnlineUserDataType>["columns"] = [
  {
    title: "번호",
    dataIndex: "seq",
    key: "seq",
  },
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "IP",
    dataIndex: "ip",
    key: "ip",
  },
  {
    title: "조협돈",
    dataIndex: "money",
    key: "money",
  },
  {
    title: "은행",
    dataIndex: "bank",
    key: "bank",
  },
  {
    title: "최근 접속일",
    dataIndex: "lastlogin",
    key: "lastlogin",
  },
  {
    title: "길드명",
    dataIndex: "guildname ",
    key: "guildname",
  },
  {
    title: "레벨",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "환생",
    dataIndex: "rebirth",
    key: "rebirth",
  },
  {
    title: "환생레벨",
    dataIndex: "rebirth_level",
    key: "rebirth_level",
  },
]
export const CharacterListTableColumns: TableProps<CharacterDataType>["columns"] = [
  {
    title: "UID",
    dataIndex: "uid",
    key: "uid",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "캐릭터명",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "조협돈",
    dataIndex: "money",
    key: "money",
  },
  {
    title: "은행",
    dataIndex: "bank",
    key: "bank",
  },
  {
    title: "길드명",
    dataIndex: "guildname ",
    key: "guildname",
  },
  {
    title: "레벨",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "체력",
    dataIndex: "hp",
    key: "hp",
  },
  {
    title: "도력",
    dataIndex: "mp",
    key: "mp",
  },
  {
    title: "최근 접속일",
    dataIndex: "lastlogin",
    key: "lastlogin",
  },
]
export const CashItemUseHistoryColums: TableProps<CashItemHistoryDataType>["columns"] = [
  {
    title: "번호",
    dataIndex: "seq",
    key: "seq",
  },
  {
    title: "캐릭터명",
    dataIndex: "char_name",
    key: "char_name",
  },
  {
    title: "아이템 이름",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "IP",
    dataIndex: "ip",
    key: "ip",
  },
  {
    title: "일자",
    dataIndex: "logdate",
    key: "logdate",
  },
]
export const CsTableColumns: TableProps<CsDataType>["columns"] = [
  {
    title: "번호",
    dataIndex: "num",
    key: "num",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "캐릭터명",
    dataIndex: "char_name",
    key: "char_name",
  },
  {
    title: "상태",
    dataIndex: "proc",
    key: "proc",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "일자",
    dataIndex: "reg_date",
    key: "reg_date",
  },
]
