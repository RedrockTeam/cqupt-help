export interface SelfInfo {
  real_name: string,
  stu_num: string,
  college: string,
  major: string,
  class: string,
}

export interface GetUserInfoResponse {
  status: number,
  info: string,
  data: SelfInfo,
}
