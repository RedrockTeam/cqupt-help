import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './takeBag.module.scss'

interface Prop {
  code: string,
  location: string,
}

const TakeBag: Taro.FC<Prop> = ({ code, location }) => {
  return (
    <View className={styles.container}>
      <View className={styles.text}>你的存包号码是：</View>
      <View className={styles.main}>{code}</View>
      <View className={styles.text}>你的存包地点是：</View>
      <View className={styles.main}>{location}</View>
      <View className={styles.tip}>请务必在21点30之前取包</View>
      <View className={styles.btn}>取包</View>
    </View>
  )
}

export default TakeBag
