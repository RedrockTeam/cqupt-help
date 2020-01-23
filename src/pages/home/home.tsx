import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import NavBar from 'taro-navigationbar'
import styles from './home.module.scss'

const navigateToSelf = () => Taro.navigateTo({
  url: '/pages/self/self'
})

const Home: Taro.FC = () => {
  return (
    <View>
      <NavBar
        title='重邮帮'
        background='#fff'
        renderLeft={
          <View
            className={styles.navbar}
            onClick={navigateToSelf}
          ></View>
        }
      />
      <View>HOME</View>
    </View>
  )
}

Home.config = {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
}

export default Home
