import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import styles from './randomShop.module.scss'
import { Shop } from '../../config/index'
import Dialog from '../dialog/dialog'

interface Prop extends Shop {
  onClick?: (event: ITouchEvent) => any,
  onRockAgain?: (event: ITouchEvent) => any,
}

const RandomShop: Taro.FC<Prop> = ({ name, location, img, onClick, onRockAgain }) => {
  return (
    <Dialog onClick={onClick}>
      <View className={styles.dialog_wrapper}>
        <Image src={img} className={styles.dialog_img} />
        <View className={styles.dialog_bottom}>
          <View className={styles.dialog_name}>{name}</View>
          <View className={styles.dialog_location}>{location}</View>
          <View className={styles.dialog_btn} onClick={onRockAgain}>再摇一次</View>
        </View>
      </View>
    </Dialog>
  )
}

export default RandomShop
