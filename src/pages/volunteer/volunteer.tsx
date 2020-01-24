import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './volunteer.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const Volunteer: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='志愿服务' />
      <View>志愿服务</View>
    </View>
  )
}

Volunteer.config = {
  navigationBarTitleText: '志愿服务',
  navigationStyle: 'custom',
}

export default Volunteer
