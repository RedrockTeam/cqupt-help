import Taro, { navigateBack } from '@tarojs/taro'
import { View } from '@tarojs/components'
import NavBar from 'taro-navigationbar'
import styles from './self.module.scss'

const navigateToBack = () => navigateBack()

const Self: Taro.FC = () => {
  return (
    <View className='main-wraper'>
      <NavBar
        title='我的页面'
        background='#fff'
        renderLeft={
          <View
            className={styles.navbar}
            onClick={navigateToBack}
          />
        }
      />
      <View>SELF</View>
    </View>
  )
}

Self.config = {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
}

export default Self
