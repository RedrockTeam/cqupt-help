import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './idCards.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const IdCards: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='身份有证' />
      <View>身份有证</View>
    </View>
  )
}

IdCards.config = {
  navigationBarTitleText: '身份有证',
  navigationStyle: 'custom',
}

export default IdCards
