import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './run.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

import Developing from '../../components/developing/developing'

const Run: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='志愿服务' />
      <Developing />
    </View>
  )
}

Run.config = {
  navigationBarTitleText: '志愿服务',
  navigationStyle: 'custom',
}

export default Run
