import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './myActivities.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import MyActivity from '../../components/myActivity/myActivity'

const mock = [
  {
    title: '银杏拍摄大赛',
    organization: '红岩网校',
    joinDate: '2019.10.29',
    time: '2019.11.01 - 2020.02.02',
  },
  {
    title: '银杏拍摄大赛',
    organization: '红岩网校',
    joinDate: '2019.10.29',
    time: '2019.11.01 - 2020.02.02',
  },
  {
    title: '银杏拍摄大赛',
    organization: '红岩网校',
    joinDate: '2019.10.29',
    time: '2019.11.01 - 2020.02.02',
  },
  {
    title: '银杏拍摄大赛',
    organization: '红岩网校',
    joinDate: '2019.10.29',
    time: '2019.11.01 - 2020.02.02',
  },
]

const MyActivities: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='我的活动' backgroundColor='#F6F5FA' />
      <View className={styles.container}>
        <View className={styles.wrapper}>
          {mock.map((e, i) => (
            <MyActivity {...e} isFirst={i === 0} key={e.title} />
          ))}
        </View>
      </View>
    </View>
  )
}

MyActivities.config = {
  navigationBarTitleText: '我的活动',
  navigationStyle: 'custom',
}

export default MyActivities
