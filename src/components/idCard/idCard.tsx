import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from './idCard.module.scss'

import defaultAvatar from '../../assets/images/avatar.png'
import downloadImg from '../../assets/images/icon-download-id-card.png'

interface Prop {
  name: string,
  avatar: string,
  major: string,
  organization: string,
  date: string,
}

const IdCard: Taro.FC<Prop> = ({ name, avatar, major, organization, date }) => {
  return (
    <View className={styles.container}>
      <View className={styles.top}>
        <Image className={styles.avatar} src={avatar}></Image>
        <View className={styles.info}>
          <View className={styles.name}>{name}</View>
          <View className={styles.major}>{major}</View>
        </View>
      </View>
      <View className={styles.bottom}>
        <View className={styles.organization}>{organization}</View>
        <View className={styles.date}>{date}</View>
      </View>
      {/* saveFile api */}
      <Image src={downloadImg} className={styles.download} />
    </View>
  )
}

IdCard.defaultProps = {
  avatar: defaultAvatar,
}

export default IdCard
