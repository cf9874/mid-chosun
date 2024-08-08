export interface NewsDataType {
  seq: number
  title: string
  reg_date: string
  count: number
  content: string
  enable: number
}
export interface AccountDataType {
  num: number
  id: string
  name: string
  level: string
}
export interface MemberDataType {
  seq: number
  id: string
  nick: string
  status: string
  reg_date: string
  jumin: string
  address: string
  phone: string
  mail: string
  cash: number
  name: string
  charName: string
  stop_date: string
}
export interface MemberPayDataType {
  seq: number
  sender_id: string
  receiver_id: string
  itemName: string
  regdate: string
  payType: string
}
export interface OnlineUserDataType {
  seq: number
  name: string
  id: string
  ip: string
  money: number
  bank: number
  lastlogin: string
  guildname: string
  level: number
  rebirth: string
  rebirth_level: number
}
export interface CharacterDataType {
  uid: number
  id: string
  name: string
  job: string
  sex_nm: string
  guildname: string
  money: number
  bank: number
  level: number
  hp: number
  mp: number
  lastlogin: string
}
// UID / 홈페이지아이디 / 캐릭터명 / 직업 / 성별 / 길드 / 머니 / 은행 / 레벨 / 체력 / 도력 / 최근접속일

export interface CashItemHistoryDataType {
  seq: number
  char_name: string
  name: string
  ip: string
  logdate: string
}
//행번/이름/아이템/iP/일자

export interface InGameNoticeDataType {
  num: number
  comment: string
  startdate: string
  enddate: string
  regdate: string
  used: string
  send_cnt: number
}

export interface CsDataType {
  num: number
  id: string
  ip: string
  nick_name: string
  select_type: string
  char_name: string
  input_date: string
  proc: string
  title: string
  content: string
  re_content: string | null
  user_file: string | null
  file_size: number | null
  mail: string
  phone: string
  GM: string | null
  update_date: string | null
  deleted: number
  reg_date: string
}
// 번호 제목 작성자 작성일 조회수
export interface CommunityDataType {
  tbc_seq: number
  tbc_user_id: string
  tbc_ip: string
  tbc_title: string
  tbc_content: string
  tbc_file_urls: string
  tbc_type: string
  tbc_count: number
  tbc_update: string | null
  tbc_enable: number
  tbc_reg_date: string
  tbc_iamges: string | null
  commentCount: number
  nick: string
  id: string
}

export interface CommentDataType {
  c_seq: number
  c_user_id: string
  c_post_seq: number
  c_post_type: string
  c_re_seq: null | number
  c_content: string
  c_ip: string
  c_reported: number
  c_reported_type: string
  c_enable: number
  c_re_enable: number
  c_update: string
  c_reg_date: string
  cr_seq: number
  cr_c_seq: number
  cr_user_id: string
  cr_reported_id: string
  cr_reported_content: string
  cr_reported_type: string
  reg_date: string
}
