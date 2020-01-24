import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './tickets.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const Tickets: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='线上抢票' />
      <View>线上抢票</View>
    </View>
  )
}

Tickets.config = {
  navigationBarTitleText: '线上抢票',
  navigationStyle: 'custom',
}

export default Tickets
