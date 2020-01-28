import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import styles from './dialog.module.scss'

interface Prop {
  isShow: boolean,
  onClick?: (event: ITouchEvent) => any,
}

const Dialog: Taro.FC<Prop> = ({ isShow, onClick, children }) => {
  return (
    <View
      className={styles.container}
      style={{ display: isShow ? 'flex' : 'none' }}
      onClick={onClick}
    >
      <View className={styles.box}>
        {children}
      </View>
    </View>
  )
}

export default Dialog
