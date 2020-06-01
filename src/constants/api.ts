/* eslint-disable no-undef */
// @ts-nocheck
export const api = API
// @ts-nocheck
export const apiLogin = API_LOGIN

// run
export const API_RUN_GET_PLATE_A = `${api}/guardian/getPlateA`
export const API_RUN_GET_PLATE_B = `${api}/guardian/getPlateB`
export const API_RUN_GET_PLATE_C = `${api}/guardian/getPlateC`

export const API_RUN_RETURN_PLATE_A = `${api}/guardian/returnPlateA`
export const API_RUN_RETURN_PLATE_B = `${api}/guardian/returnPlateB`
export const API_RUN_RETURN_PLATE_C = `${api}/guardian/returnPlateC`

export const API_RUN_GET_RECORDS = `${api}/guardian/getRecords`

// tickets
export const API_TICKETS_GET_TICKETS = `${api}/secKillInfo`
export const API_TICKETS_ROB_TICKET = `${api}/secKill`

// self
export const API_USER_LOGIN = apiLogin
export const API_SELF_INFO = `${api}/user/info`