import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './run.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import SaveBag from '../../components/saveBag/saveBag'
import TakeBag from '../../components/takeBag/takeBag'

const Run: Taro.FC = () => {
  return (
    <View className={styles.full_screen}>
      <NavToBack title='天天护跑' />
      {/* <TakeBag code='A50' location='风华操场' /> */}
      <SaveBag />
    </View>
  )
}

Run.config = {
  navigationBarTitleText: '天天护跑',
  navigationStyle: 'custom',
}

export default Run
