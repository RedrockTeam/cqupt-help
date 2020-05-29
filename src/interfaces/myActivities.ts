export interface Reword {
  activity_name: string,
  name: string,
  level: number,
  location: string,
  time_begin: number,
  time_end: number,
}

export interface GetMyRewordsResponse {
  flag: 0 | 1,
  data: Reword[],
}
