import { COMMUNITY_BOARD_TYPE, COMMUNITY_SEARCH_TYPE } from "./community.const"
import { CS_SEARCH_TYPE, CS_STATUS } from "./cs.const"
import { ITEM_HISTORY_SEARCH_TYPE, USER_INFO_SEARCH_TYPE } from "./gamedata.const"
import {
  DATA_SEARCH_TYPE,
  MEMBER_PAY_TYPE,
  MEMBER_SEARCH_TYPE,
  MEMBER_SEARCH_TYPE_CASHHISTORY,
  MEMBER_STATUS,
  MEMBER_TYPE,
} from "./member.const"

export const memberSearchOptions = [
  { value: MEMBER_TYPE.ALL, label: "전체" },
  { value: MEMBER_TYPE.NORMAL, label: "일반" },
  { value: MEMBER_TYPE.STOP, label: "정지회원" },
  { value: MEMBER_TYPE.OUT, label: "탈퇴회원" },
]
export const memberTypeOPtions = [
  { value: MEMBER_SEARCH_TYPE.ID, label: "아이디" },
  { value: MEMBER_SEARCH_TYPE.NICK, label: "닉네임" },
]
export const dataTypeOPtions = [
  { value: DATA_SEARCH_TYPE.ID, label: "아이디" },
  { value: DATA_SEARCH_TYPE.NAME, label: "이름" },
]
export const memberPayTypeOptions = [
  { value: MEMBER_PAY_TYPE.ALL, label: "전체" },
  { value: MEMBER_PAY_TYPE.BUY, label: "구매" },
  { value: MEMBER_PAY_TYPE.GIFT, label: "선물" },
]
export const csStatusSearchOPtions = [
  { value: CS_STATUS.ALL, label: "전체" },
  { value: CS_STATUS.SUBMIT, label: "접수" },
  { value: CS_STATUS.TREAT, label: "처리중" },
  { value: CS_STATUS.COMPLETE, label: "처리완료" },
  { value: CS_STATUS.DENY, label: "처리불가" },
]
export const csStatusOPtions = [
  { value: CS_STATUS.SUBMIT, label: "접수" },
  { value: CS_STATUS.TREAT, label: "처리중" },
  { value: CS_STATUS.COMPLETE, label: "처리완료" },
  { value: CS_STATUS.DENY, label: "처리불가" },
]
export const csSearchOPtions = [
  { value: CS_SEARCH_TYPE.ID, label: "아이디" },
  { value: CS_SEARCH_TYPE.NICK, label: "닉네임" },
  { value: CS_SEARCH_TYPE.CONTENT, label: "내용" },
]

export const communitySearchOptions = [
  { value: COMMUNITY_SEARCH_TYPE.TITLE, label: "제목" },
  { value: COMMUNITY_SEARCH_TYPE.WRITER, label: "닉네임" },
  { value: COMMUNITY_SEARCH_TYPE.ID, label: "아이디" },
]
export const communityBoardSearchOptions = [
  { value: COMMUNITY_BOARD_TYPE.FREE, label: "자유게시판" },
  { value: COMMUNITY_BOARD_TYPE.IMG, label: "스크린샷게시판" },
  { value: COMMUNITY_BOARD_TYPE.MUNPA, label: "문파홍보게시판" },
  { value: COMMUNITY_BOARD_TYPE.IDEA, label: "아이디어게시판" },
]
export const cashHistorySearchOptions = [
  { value: ITEM_HISTORY_SEARCH_TYPE.NAME, label: "캐릭터명" },
  { value: ITEM_HISTORY_SEARCH_TYPE.ITEM, label: "아이템 이름" },
]
export const userStatusOptions = [
  { value: MEMBER_STATUS.NORMAL, label: "일반" },
  { value: MEMBER_STATUS.STOP, label: "정지" },
]
export const cashhistorySearchOptions = [
  { value: MEMBER_SEARCH_TYPE_CASHHISTORY.ID, label: "아이디" },
  { value: MEMBER_SEARCH_TYPE_CASHHISTORY.CHAR, label: "캐릭터명" },
]
export const dataUserTypeOPtions = [
  { value: USER_INFO_SEARCH_TYPE.ID, label: "아이디" },
  { value: USER_INFO_SEARCH_TYPE.NAME, label: "캐릭터명" },
]
