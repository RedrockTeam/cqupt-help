import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './volunteer.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import { API_VOLUNTEER_HAS_BIND } from '../../constants/api'
import { useRequest } from '../../utils/request'
import Loading from '../../components/loading/loading'
import VolunteerBind from '../../components/volunteerBind/volunteerBind'

const Volunteer: Taro.FC = () => {
  // const { response, loading } = useRequest({
  //   url: API_VOLUNTEER_HAS_BIND,
  // })
  const loading = false
  const response = { exist: true }

  const renderVolunteerPage = () => {
    if (loading) {
      return <Loading />
    } else {
      if (response.exist) {
        Taro.redirectTo({ url: '/pages/volunteerList/volunteerList' })
        return null
      }
      return <VolunteerBind />
    }
  }
  return (
    <View className={styles.full_screen}>
      <NavToBack title='志愿服务' />
      {
        renderVolunteerPage()
      }
    </View>
  )
}

Volunteer.config = {
  navigationBarTitleText: '志愿服务',
  navigationStyle: 'custom',
}

export default Volunteer
