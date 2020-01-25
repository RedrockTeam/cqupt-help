import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './selfRoute.module.scss'

interface Prop {
  title: string,
  url: string,
  img: string,
}

const SelfRoute: Taro.FC<Prop> = ({ title, url, img }) => {
  return (
    <View className={styles.container} onClick={() => Taro.navigateTo({ url })}>
      <View className={styles.left} style={{ backgroundImage: `url(${img})` }}>{title}</View>
      <View className={styles.arrow}></View>
    </View>
  )
}

export default SelfRoute
