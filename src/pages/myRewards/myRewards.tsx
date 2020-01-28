import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './myRewards.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import Reward from '../../components/reward/reward'

const mock = [
  {
    title: '一等奖：兔子闹钟*2',
    activity: '红岩网校 - 伟大成就拼拼看',
    place: '领取地点：红岩网校工作站b区',
    date: '领取时间：2019.10.05',
    isTaken: true,
  },
  {
    title: '一等奖：兔子闹钟*2',
    activity: '红岩网校 - 伟大成就拼拼看',
    place: '领取地点：红岩网校工作站b区',
    date: '领取时间：2019.10.05',
    isTaken: false,
  },
  {
    title: '一等奖：兔子闹钟*2',
    activity: '红岩网校 - 伟大成就拼拼看',
    place: '领取地点：红岩网校工作站b区',
    date: '领取时间：2019.10.05',
    isTaken: true,
  },
  {
    title: '一等奖：兔子闹钟*2',
    activity: '红岩网校 - 伟大成就拼拼看',
    place: '领取地点：红岩网校工作站b区',
    date: '领取时间：2019.10.05',
    isTaken: true,
  },
  {
    title: '一等奖：兔子闹钟*2',
    activity: '红岩网校 - 伟大成就拼拼看',
    place: '领取地点：红岩网校工作站b区',
    date: '领取时间：2019.10.05',
    isTaken: false,
  },
  {
    title: '一等奖：兔子闹钟*2',
    activity: '红岩网校 - 伟大成就拼拼看',
    place: '领取地点：红岩网校工作站b区',
    date: '领取时间：2019.10.05',
    isTaken: true,
  },
]

const MyRewards: Taro.FC = () => {
  return (
    <View className={styles.full_screen}>
      <NavToBack title='我的奖品' backgroundColor='#F4F6FA' />
      <View className={styles.container}>
        {mock.map(e => (
          <Reward {...e} key={e.title + e.activity} />
        ))}
      </View>
    </View>
  )
}

MyRewards.config = {
  navigationBarTitleText: '我的奖品',
  navigationStyle: 'custom',
}

export default MyRewards
