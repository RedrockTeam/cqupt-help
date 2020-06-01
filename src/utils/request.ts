import Taro, { useState, useEffect } from '@tarojs/taro'

export default async function request<T = any, U = any>(option: Taro.request.Option<U>) {
  const { url, data, method = 'GET' } = option
  const { data: token } = await Taro.getStorage({ key: 'CQUPT_HELP_TOKEN' })
  console.log(token)
  const header = { authorization: 'Bearer ' + token }
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return Taro.request<T, U>({
    url,
    method,
    data,
    header
  }).then((res) => {
    return res.data
  }).catch((err) => {
    Taro.showToast({
      title: err.errorMsg,
    })

    return Promise.reject(err)
  })
}

export const useRequest = <T = any, U = any>(option: Taro.request.Option<U>) => {
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
