import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './compus.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const Compus: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='校园服务' />
      <View>校园服务</View>
    </View>
  )
}

Compus.config = {
  navigationBarTitleText: '校园服务',
  navigationStyle: 'custom',
}

export default Compus
