import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import styles from './empty.module.scss'
import icon from '../../assets/images/icon-empty.png'

interface Prop {
  content: string,
}

const Activity: Taro.FC<Prop> = ({ content }) => {
  return (
    <View className={styles.container}>
      <Image src={icon} className={styles.image} />
      <Text className={styles.content}>{content}</Text>
    </View>
  )
}

export default Activity
