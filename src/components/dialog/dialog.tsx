import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import styles from './dialog.module.scss'

interface Prop {
  onClick?: (event: ITouchEvent) => any,
}

const Dialog: Taro.FC<Prop> = ({ onClick, children }) => {
  return (
    <View
      className={styles.container}
      onClick={onClick}
    >
      <View className={styles.box} onClick={(e) => e.stopPropagation()}>
        {children}
      </View>
    </View>
  )
}

export default Dialog
