export interface IdCard {
  name: string,
  collage: string,
  team_name: string,
  create_time: string,
}

export interface GetIdCardsResponse {
  flag: 0 | 1,
  data: IdCard[],
}
