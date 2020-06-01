import Taro from '@tarojs/taro'
import { View, Text, OpenData } from '@tarojs/components'
import styles from './self.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import SelfRoute from '../../components/selfRoute/selfRoute'
import defaultAvatar from '../../assets/images/avatar.png'
import idCardsImg from '../../assets/images/icon-idCards.png'
import feedbackImg from '../../assets/images/icon-feedback.png'

const entries = [
  {
    title: '身份有证',
    url: '/pages/idCards/idCards',
    img: idCardsImg,
  },
  {
    title: '反馈中心',
    url: '/pages/feedback/feedback',
    img: feedbackImg,
  },
]

const Self: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='我的页面' />
      {/* 顶部个人信息 */}
      <View className={styles.self_info}>
        <View className={styles.self_info__left}>
          <Text className={styles.self_info__left__name}>红小岩</Text>
          <Text className={styles.self_info__left__info}>学号：2018233333</Text>
          <Text className={styles.self_info__left__info}>专业：软件工程</Text>
        </View>
        <OpenData
          className={styles.self_info__avatar}
          type='userAvatarUrl'
          defaultAvatar={defaultAvatar}
        ></OpenData>
      </View>

      {/* 下面入口 */}
      {entries.map(e => (
        <SelfRoute title={e.title} url={e.url} img={e.img} key={e.title} />
      ))}

      {/* 退出登录 */}
      <View className={styles.logout}>退出登录</View>
    </View>
  )
}

Self.config = {
  navigationBarTitleText: '我的页面',
  navigationStyle: 'custom',
}

export default Self
