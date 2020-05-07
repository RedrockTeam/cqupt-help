export interface Ticket {
  id: number,
  name: string,
  total: number,
  left: number,
  begin_time: string,
  end_time: string,
  is_sold_out: number,
}

export interface GetTicketsResponse {
  status: number,
  info: string,
  data: Ticket[],
}

export interface RobTicketResponse {
  status: 10000 | 10001 | 10002 | 10003 | 10004 | 10005 | 10006 | 10007 | 10008 | 10009,
  info: string,
}
