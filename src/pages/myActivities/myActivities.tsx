import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './myActivities.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

import Developing from '../../components/developing/developing'

const MyActivities: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='我的活动' />
      <Developing />
    </View>
  )
}

MyActivities.config = {
  navigationBarTitleText: '我的活动',
  navigationStyle: 'custom',
}

export default MyActivities
