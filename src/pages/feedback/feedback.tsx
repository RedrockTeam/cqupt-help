import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './feedback.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const Feedback: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='反馈中心' />
      <View>反馈中心</View>
    </View>
  )
}

Feedback.config = {
  navigationBarTitleText: '反馈中心',
  navigationStyle: 'custom',
}

export default Feedback
