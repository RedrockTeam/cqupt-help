import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './myActivity.module.scss'

interface Prop {
  isFirst: boolean,
  title: string,
  organization: string,
  joinDate: string,
  time: string,
}

type ActivityState = '已结束' | '进行中'

const Activity: Taro.FC<Prop> = ({ isFirst, title, organization, joinDate, time }) => {
  const [activityState, setActivityState] = useState<ActivityState>('进行中')

  return (
    <View className={styles.container} style={{ marginTop: isFirst ? 0 : '12px' }}>
      <View className={styles.header}>{joinDate}</View>
      <View className={styles.wrapper}>
        <View className={styles.title}>
          {title}
          <Text className={styles.state}>{activityState}</Text>
        </View>
        <View className={styles.organization}>活动组织：{organization}</View>
        <View className={styles.time}>活动时间：{time}</View>
      </View>
    </View>
  )
}

export default Activity
