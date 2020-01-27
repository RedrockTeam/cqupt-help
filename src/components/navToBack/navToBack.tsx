import Taro, { navigateBack } from '@tarojs/taro'
import { View } from '@tarojs/components'
import NavBar from 'taro-navigationbar'
import styles from './navToBack.module.scss'

const navigateToBack = () => navigateBack()

const NavToBack: Taro.FC<{ title: string, backgroundColor?: string }> = ({ title, backgroundColor = '#fff' }) => {
  return (
    <NavBar
      title={title}
      background={backgroundColor}
      renderLeft={
        <View
          className={styles.navbar}
          onClick={navigateToBack}
        />
      }
    />
  )
}

export default NavToBack
