import Taro from '@tarojs/taro'
import request from '../utils/request'
import { API_USER_LOGIN, API_SELF_INFO } from '../constants/api'
import { GetUserInfoResponse } from '../interfaces/self'

// token: "eyJjbGFzcyI6IjEzMDAxODA3IiwiY29sbGVnZSI6Iui9r+S7tuW3peeoi+WtpumZoiIsImV4cCI6IjEwMjQ1NDU5Nzk4IiwiaWF0IjoiMTU5MDc0MjkxOCIsIm1ham9yIjoiIiwicmVhbE5hbWUiOiLkvZXluprlnaQiLCJzdHVOdW0iOiIyMDE4MjE0MTM5Iiwic3ViIjoieGJzIn0=.F3QclBdLTKP2iINApV5CghTNB5ZwiUyUkzrXh/Wz7+OzCG6QJtDudGQqgqHkMJsPbF5iEGUpSY9hDNH8GC7SV3OSoeP1e+/efWeO1qFs3XlVaKYZ66RiT79R3jLVglASRxBSFqYeoC/Sx8n+SPQAS/B8sY5vSffe9XwZcauZwF2kRdMfIjsgromV89JwDhVvvk6aQGRejc3EYt+gTUOIDH8Ad49gMQBtyqFBAJIsg23vss8rpPIsyQreWRnpGGgS46NhAK4DJ+LlKdII+fJS0f3GaSIXKRPFZ/nfH19UrZ/v2sF1V9zukb6dNqfEHaRRUDWgwRGTdB2fs4XuY4e6jw=="
export async function login() {
  try {
    const loginRes = await Taro.login()
    if (loginRes.code) {
      const res = await Taro.request({
        url: `${API_USER_LOGIN}?code=${loginRes.code}&b=/`,
        method: 'POST',
      })
      console.log(res)
      if (res.data.status === 10000) {
        Taro.setStorage({
          key: 'CQUPT_HELP_TOKEN',
          data: res.data.data.token,
        })
      } else {
        Taro.showToast({
          title: res.data.errmessage,
          icon: 'none',
          duration: 2000,
        })
      }
    }
  } catch (e) {
    Taro.showToast({
      title: 'Error',
      icon: 'none',
      duration: 2000,
    })
  }
}

export async function getUserInfo() {
  return await request<GetUserInfoResponse>({
    url: API_SELF_INFO,
  })
}
