/* eslint-disable react/react-in-jsx-scope */
import { View } from "@tarojs/components"
import NavToBack from "../../components/navToBack/navToBack"
import styles from './volunteerInfo.module.scss'

const VolunteerList: Taro.FC = () => {
  return (
    <View className={styles.full_screen}>
      <NavToBack title='志愿活动' backgroundColor='#F4F6FA' />
      <View className={styles.container}>
        
      </View>
    </View>
  )
}

VolunteerList.config = {
  navigationBarTitleText: '志愿活动',
  navigationStyle: 'custom',
}

export default VolunteerList
