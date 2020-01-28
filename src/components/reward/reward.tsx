import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './reward.module.scss'

interface Prop {
  title: string,
  activity: string,
  place: string,
  date: string,
  isTaken: boolean,
}

const Reward: Taro.FC<Prop> = ({ title, activity, place, date, isTaken }) => {
  return (
    <View className={styles.container}>
      <View className={styles.title} >
        {title}
        <Text className={isTaken ? styles.state : styles.state_active}>
          {isTaken ? '已领取' : '未领取'}
        </Text>
      </View>
      <Text className={styles.text}>{activity}</Text>
      <Text className={styles.text}>{place}</Text>
      <Text className={styles.text}>{date}</Text>
    </View>
  )
}

export default Reward
