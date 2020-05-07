import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './runHistory.module.scss'

interface Prop {
  SaveTime: string,
  TakeTime: string,
  Location: number,
  StuNum: number,
  StuName: string,
  SportTime: number,
}

const RunHistory: Taro.FC<Prop> = ({ SaveTime, TakeTime, Location, StuNum, StuName, SportTime }) => {
  return (
    <View className={styles.container}>
      <View className={styles.title} >
        {SaveTime} - {TakeTime}
      </View>
      <Text className={styles.text}>{Location}</Text>
      <Text className={styles.text}>{StuNum}</Text>
      <Text className={styles.text}>{StuName}</Text>
    </View>
  )
}

export default RunHistory
