import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './myActivities.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const MyActivities: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='我的活动' />
      <View>我的活动</View>
    </View>
  )
}

MyActivities.config = {
  navigationBarTitleText: '我的活动',
  navigationStyle: 'custom',
}

export default MyActivities
