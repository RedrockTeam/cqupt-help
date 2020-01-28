import Taro, { useState } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import styles from './ticket.module.scss'

interface Prop {
  title: string,
  img: string,
  place: string,
  date: string,
  robTime: string,
  remain: number,
  onRob: (event: ITouchEvent) => any,
}

const Ticket: Taro.FC<Prop> = ({ title, img, place, date, robTime, remain, onRob }) => {
  const [ticketState, setTicketState] = useState<string | '立即抢票' | '已抢完' | '已领取'>('立即抢票')

  return (
    <View className={styles.container}>
      <Image className={styles.image} src={img} />
      <View className={styles.right}>
        <View className={styles.title}>
          {title}
          <View className={styles.remain}>剩余 {remain} 张</View>
        </View>
        <View className={styles.text}>
          放映时间：
          <Text className={styles.main_text}>{date}</Text>
        </View>
        <View className={styles.text}>
          放映地点：
          <Text className={styles.main_text}>{place}</Text>
        </View>
        <View className={styles.rob_time}>{robTime}开抢</View>
        <Button
          className={styles.button}
          disabled={ticketState !== '立即抢票'}
          style={{ backgroundColor: ticketState === '立即抢票' ? '#4059FF' : '#7A8299' }}
          onClick={onRob}
        >{ticketState}</Button>
      </View>
    </View>
  )
}

export default Ticket
