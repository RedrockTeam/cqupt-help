export interface GetPlateResponse {
  flag: 0 | 1,
  plateNum: string,
}

export type ReturnPlateResponse = GetPlateResponse

export interface Record {
  ID: 2,
  SaveTime: string,
  TakeTime: string,
  Location: number,
  StuNum: number,
  StuName: string,
  SportTime: number,
}

export interface GetRecordsResponse {
  flag: 0 | 1,
  records: Record[],
}
