import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { EventProps } from '@tarojs/components/types/common'
import styles from './takeBag.module.scss'
import { PLATE_A, PLATE_B, PLATE_C } from '../../constants'

interface Prop {
  plateCode: string,
  onTakeBag: EventProps['onClick']
}

const TakeBag: Taro.FC<Prop> = ({ plateCode, onTakeBag }) => {
  const location = (code: string) => {
    if (!code.length) return
    const locationCode = code[0]
    if (locationCode === PLATE_A) return '太极 A 处'
    if (locationCode === PLATE_B) return '太极 B 处'
    if (locationCode === PLATE_C) return '风华'
  }
  return (
    <View className={styles.container}>
      <View className={styles.text}>你的存包号码是：</View>
      <View className={styles.main}>{plateCode}</View>
      <View className={styles.text}>你的存包地点是：</View>
      <View className={styles.main}>{location(plateCode)}</View>
      <View className={styles.tip}>请务必在21点30之前取包</View>
      <View className={styles.btn} onClick={onTakeBag}>取包</View>
    </View>
  )
}

TakeBag.defaultProps = {
  plateCode: '',
}

export default TakeBag
