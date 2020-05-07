import Taro, { useState, useEffect } from '@tarojs/taro'

type RequestOption<T> = Taro.request.Option<T> & {
  showToast?: boolean,
  autoLogin?: boolean,
}

export default async function request<T = any, U = any>(option: RequestOption<U>) {
  const { url, data, method = 'GET', showToast = true, autoLogin = true } = option
  // const token = await getStorage('token')
  const header = {}
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return Taro.request<T, U>({
    url,
    method,
    data,
    header
  }).then(async (res) => {
    // if (code !== CODE_SUCCESS) {
    //   if (code === CODE_AUTH_EXPIRED) {
    //     await updateStorage({})
    //   }
    //   return Promise.reject(res.data)
    // }

    // if (url === API_USER_LOGIN) {
    //   await updateStorage(data)
    // }

    // // XXX 用户信息需展示 uid，但是 uid 是登录接口就返回的，比较蛋疼，暂时糅合在 fetch 中解决
    // if (url === API_USER) {
    //   const uid = await getStorage('uid')
    //   return { ...data, uid }
    // }

    return res.data
  }).catch((err) => {
    // const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
    // if (showToast) {
    //   Taro.showToast({
    //     title: err && err.errorMsg || defaultMsg,
    //     icon: 'none'
    //   })
    // }

    // if (err.code === CODE_AUTH_EXPIRED && autoLogin) {
    //   Taro.navigateTo({
    //     url: '/pages/user-login/user-login'
    //   })
    // }
    if (showToast) {
      Taro.showToast({
        title: err.errorMsg,
      })
    }

    return Promise.reject(err)
  })
}

export const useRequest = <T = any, U = any>(option: RequestOption<U>) => {
  const [response, setResponse] = useState<T>()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    request(option)
      .then(res => {
        setResponse(res)
        setLoading(false)
      })
  }, [])
  return { response, setResponse, loading, setLoading }
}
