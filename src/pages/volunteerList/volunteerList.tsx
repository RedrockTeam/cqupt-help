/* eslint-disable react/react-in-jsx-scope */
import Taro from '@tarojs/taro'
import { View, Text } from "@tarojs/components"
import NavToBack from "../../components/navToBack/navToBack"
import styles from './volunteerList.module.scss'

const mock =  [
  {
      "id": 1,
      "name": "胡话使者",
      "description": "防止采花吧啦吧啦吧啦",
      "left": 10
  },
  {
      "id": 2,
      "name": "胡话使者",
      "description": "防止采花吧啦吧啦吧啦",
      "left": 9
  }
]

const VolunteerList: Taro.FC = () => {
  return (
    <View className={styles.full_screen}>
      <NavToBack title='志愿活动' backgroundColor='#F4F6FA' />
        {mock.map(e => (
          <View className={styles.container} key={e.id} onClick={() => Taro.navigateTo({ url: `/pages/volunteerInfo/volunteerInfo?id=${e.id}` })}>
            <View className={styles.title} >
              {e.name}
              <Text className={styles.state}>
                剩余 {e.left} 天
              </Text>
            </View>
            <Text className={styles.text}>{e.description}</Text>
          </View>
        ))}
    </View>
  )
}

VolunteerList.config = {
  navigationBarTitleText: '志愿活动',
  navigationStyle: 'custom',
}

export default VolunteerList
