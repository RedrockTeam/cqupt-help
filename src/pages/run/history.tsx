import Taro, { useReachBottom, useRef } from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './run.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import RunHistory from '../../components/runHistory/runHistory'
import Empty from '../../components/empty/empty'
import request, { useRequest } from '../../utils/request'
import { API_RUN_GET_RECORDS } from '../../constants/api'
import { GetRecordsResponse } from '../../interfaces/run'

// const response = undefined
// {
//   flag: 1,
//   records: [
//   {
//       "ID": 2,
//       "SaveTime": "2020-03-11T12:53:04+08:00",
//       "TakeTime": "2020-03-11T12:53:04+08:00",
//       "Location": 2,
//       "StuNum": 2018214924,
//       "StuName": "chenzhilin",
//       "SportTime": 21
//   },
//   {
//       "ID": 4,
//       "SaveTime": "2020-03-11T12:58:34+08:00",
//       "TakeTime": "2020-03-11T12:58:34+08:00",
//       "Location": 1,
//       "StuNum": 2018214924,
//       "StuName": "chenzhilin",
//       "SportTime": 23
//   },
//   {
//       "ID": 5,
//       "SaveTime": "2020-03-12T01:12:44+08:00",
//       "TakeTime": "2020-03-12T01:12:44+08:00",
//       "Location": 2,
//       "StuNum": 2018214924,
//       "StuName": "chenzhilin",
//       "SportTime": 24
//   },
//   {
//       "ID": 6,
//       "SaveTime": "2020-03-12T02:20:21+08:00",
//       "TakeTime": "2020-03-12T02:20:21+08:00",
//       "Location": 3,
//       "StuNum": 2018214924,
//       "StuName": "chenzhilin",
//       "SportTime": 20
//   },
//   {
//       "ID": 7,
//       "SaveTime": "2020-03-12T02:20:27+08:00",
//       "TakeTime": "2020-03-12T02:20:27+08:00",
//       "Location": 1,
//       "StuNum": 2018214924,
//       "StuName": "chenzhilin",
//       "SportTime": 20
//   },
//   {
//       "ID": 8,
//       "SaveTime": "2020-03-12T02:20:31+08:00",
//       "TakeTime": "2020-03-12T02:20:31+08:00",
//       "Location": 2,
//       "StuNum": 2018214924,
//       "StuName": "chenzhilin",
//       "SportTime": 20
//   }
// ],
// }

// 等部署了再说
const RunHistories: Taro.FC = () => {
  const reachPage = useRef<number>(1)
  const { response, setResponse, loading, setLoading } = useRequest<GetRecordsResponse>({
    url: API_RUN_GET_RECORDS,
    method: 'POST',
    data: { reachPage: reachPage.current },
  })
  useReachBottom(() => {
    reachPage.current += 1
    setLoading(true)
    request<GetRecordsResponse>({
      url: API_RUN_GET_RECORDS,
      method: 'POST',
      data: { reachPage: reachPage.current },
    }).then(res => {
      setResponse(old => {
        if (!old) return
        return { flag: res.flag, records: old.records && old.records.concat(res.records || []) }
      })
      setLoading(false)
    })
  })

  // eslint-disable-next-line react/no-multi-comp
  const renderContent = () => {
    if (loading) return <View>Loading...</View>
    if (!response) return null // request 获取失败，会有 showToast 提示
    if (response.records === null || response.records.length === 0) {
      return <Empty content='还没有存取过包!' />
    }
    return (
      <View className={styles.container}>
        {response.records.map((e) => <RunHistory {...e} key={e.ID} />)}
      </View>
    )
  }
  return (
    <View className={styles.full_screen}>
      <NavToBack title='历史记录' backgroundColor='#F4F6FA' />
      {renderContent()}
    </View>
  )
}

RunHistories.config = {
  navigationBarTitleText: '历史记录',
  navigationStyle: 'custom',
}

export default RunHistories
