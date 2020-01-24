import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './self.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const Self: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='我的页面' />
      <View>SELF</View>
    </View>
  )
}

Self.config = {
  navigationBarTitleText: '我的页面',
  navigationStyle: 'custom',
}

export default Self
