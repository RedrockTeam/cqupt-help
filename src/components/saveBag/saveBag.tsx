import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './saveBag.module.scss'

const SaveBag: Taro.FC = () => {
  return (
    <View className={styles.container}>
      <View className={styles.top}>
        <View className={styles.history}>历史记录</View>
        <View className={styles.qrcode}></View>
        <View className={styles.btn}>扫一扫</View>
        <View className={styles.tip}>扫一扫，快速取号存包</View>
      </View>
      <View className={styles.text}>
        <View className={styles.title}>存包规则</View>
        <View className={styles.rules}>1. 贵重物品还请自行妥善保管。</View>
        <View className={styles.rules}>2. 护跑时间从晚上8点到10点，请在9点45之前根据自身情况来将存包拿走。</View>
        <View className={styles.rules}>3. 我们将在10点之前离开护跑点，每个点会留有一位志愿者看管未取走的包裹直到晚上10点15。若逾期仍未取包并出现包丢失的情况，青协将不承担任何责任，望大家理解。</View>
      </View>
    </View>
  )
}

export default SaveBag
