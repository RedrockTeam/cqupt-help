import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import NavBar from 'taro-navigationbar'
import styles from './home.module.scss'
import RecentActivity from '../../components/activity/activity'

const navigateToSelf = () => Taro.navigateTo({
  url: '/pages/self/self'
})

const mockRecentData = [
  {
    title: '社团达人秀',
    organization: '社团联合会',
    date: '2019.11.03 - 2019.12.09',
  },
  {
    title: '社团达人秀',
    organization: '社团联合会',
    date: '2019.11.03 - 2019.12.09',
  },
  {
    title: '社团达人秀',
    organization: '社团联合会',
    date: '2019.11.03 - 2019.12.09',
  }
]

const Home: Taro.FC = () => {
  return (
    <View>
      <NavBar
        title='重邮帮'
        background='#fff'
        renderLeft={
          <View
            className={styles.navbar}
            onClick={navigateToSelf}
          ></View>
        }
      />
      <View className={styles.date}>
        2019年10月28日 第11周 - 周四
      </View>

      {/* 校园服务、线上抢票、志愿服务 */}
      <View className={styles.banner_top}>
        <View
          className={styles.banner_top__compus}
          onClick={() => Taro.navigateTo({ url: '/pages/compus/compus' })}
        ></View>
        <View
          className={styles.banner_top__tickets}
          onClick={() => Taro.navigateTo({ url: '/pages/tickets/tickets' })}
        ></View>
        <View
          className={styles.banner_top__volunteer}
          onClick={() => Taro.navigateTo({ url: '/pages/volunteer/volunteer' })}
        ></View>
      </View>

      {/* 我的活动、我的奖品 */}
      <View className={styles.banner_bottom}>
        <View
          className={styles.my_activities}
          onClick={() => Taro.navigateTo({ url: '/pages/myActivities/myActivities' })}
        >
          <Text className={styles.my_activities__title}>我的活动</Text>
          <View>
            <Text className={styles.my_activities__text}>本月参与活动</Text>
            <Text className={styles.my_activities__done}>0项</Text>
          </View>
        </View>
        <View
          className={styles.my_rewards}
          onClick={() => Taro.navigateTo({ url: '/pages/myRewards/myRewards' })}
        >
          <Text className={styles.my_rewards__title}>我的奖品</Text>
          <View>
            <Text className={styles.my_rewards__text}>待领取奖品</Text>
            <Text className={styles.my_rewards__done}>0项</Text>
          </View>
        </View>
      </View>

      {/* 近期活动 */}
      <View>
        {mockRecentData.map((e) => (
          <RecentActivity
            key={e.title}
            title={e.title}
            organization={e.organization}
            date={e.date}
          ></RecentActivity>
        ))}
      </View>
    </View>
  )
}

Home.config = {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
}

export default Home
