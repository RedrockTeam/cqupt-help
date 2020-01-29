import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './compus.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import CompusRoute from '../../components/compusRoute/compusRoute'
import iconRun from '../../assets/images/icon-run.png'
import iconRock from '../../assets/images/icon-rock.png'

const Compus: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='校园服务' />
      <View>
        <View className={styles.title}>生活服务</View>
        <CompusRoute
          title='天天护跑'
          icon={iconRun}
          organization='青年志愿者协会'
          url='/pages/run/run'
        />
        <View className={styles.title}>吃喝玩乐</View>
        <CompusRoute
          title='摇一摇'
          icon={iconRock}
          organization='青年志愿者协会'
          url='/pages/rock/rock'
        />
      </View>
    </View>
  )
}

Compus.config = {
  navigationBarTitleText: '校园服务',
  navigationStyle: 'custom',
}

export default Compus
