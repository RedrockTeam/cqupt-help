import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from './loading.module.scss'
import icon from '../../assets/images/loading.png'

type Props = {
  className?: string,
}

const Loading: Taro.FC<Props> = ({ className }) => {
  return (
    <View className={`${styles.wrapper} ${className}`}>
      <Image src={icon} className={styles.loading} />
    </View>
  )
}

export default Loading
