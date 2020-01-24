import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './activity.module.scss'

interface Prop {
  title: string,
  organization: string,
  date: string,
}

const Activity: Taro.FC<Prop> = ({ title, organization, date }) => {
  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.doing_active}>进行中</Text>
      </View>
      <Text className={styles.content}>活动组织：{organization}</Text>
      <Text className={styles.content}>活动时间：{date}</Text>
    </View>
  )
}

export default Activity
