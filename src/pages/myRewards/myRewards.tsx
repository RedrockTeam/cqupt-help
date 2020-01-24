import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './myRewards.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const MyRewards: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='我的奖品' />
      <View>我的奖品</View>
    </View>
  )
}

MyRewards.config = {
  navigationBarTitleText: '我的奖品',
  navigationStyle: 'custom',
}

export default MyRewards
