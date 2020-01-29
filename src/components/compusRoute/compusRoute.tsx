import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './compusRoute.module.scss'

interface Prop {
  icon: string,
  title: string,
  organization: string,
  url: string,
}

const CompusRoute: Taro.FC<Prop> = ({ title, icon, organization, url }) => {
  return (
    <View className={styles.container} onClick={() => Taro.navigateTo({ url })}>
      <View className={styles.left} style={{ backgroundImage: `url(${icon})` }}>
        <View className={styles.title}>{title}</View>
        <View className={styles.organization}>{organization}</View>
      </View>
      <View className={styles.arrow}></View>
    </View>
  )
}

export default CompusRoute
