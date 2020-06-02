/* eslint-disable react/react-in-jsx-scope */
import Taro, { useRouter, useState } from "@tarojs/taro"
import { View, Button, Image } from "@tarojs/components"
import NavToBack from "../../components/navToBack/navToBack"
import styles from './volunteerInfo.module.scss'
import request, { useRequest } from "../../utils/request"
import { API_VOLUNTEER_INFO, API_VOLUNTEER_APPLY } from '../../constants/api'
import Loading from "../../components/loading/loading"
import Dialog from "../../components/dialog/dialog"
import iconRobSuccess from '../../assets/images/icon-rob-succeed.png'

const VolunteerList: Taro.FC = () => {
  const router = useRouter()
  // const { response, loading } = useRequest({
  //   url: `${API_VOLUNTEER_INFO}/volunteer/activitiey/info`,
  //   method: 'POST',
  //   data: {
  //     id: router.params.id
  //   }
  // })
  const [dialog, setDialog] = useState<boolean>(false)

  // eslint-disable-next-line react/no-multi-comp
  const renderDialog = (): JSX.Element | null => {
    if (dialog) {
      return (
        <Dialog onClick={() => setDialog(false)} >
          <View className={styles.dialog_wrapper}>
            <Image
              src={iconRobSuccess}
              className={styles.dialog_image}
            />
            <View>申请成功</View>
            <View className={styles.dialog_tips}>申请结果将会通过重邮小帮手进行通知！</View>
          </View>
        </Dialog>
      )
    }
    return null
  }

  const [time, setTime] = useState<number>()

  const loading = false
  const response = {
    "name": "前端使者",
    "description": "切图",
    "role": "切图要切的完美",
    "data": 1589601461,
    "hour": "2~3"
  }
  console.log(router)
  return (
    <View className={styles.full_screen}>
      <NavToBack title='志愿服务' />
      {loading ? <Loading /> : (
        <View className={styles.container}>
          <View className={styles.title}>{response.name}</View>
          <View className={styles.formItem}>
            <View className={styles.formItem_title}>活动简介</View>
            <View className={styles.formItem_input}>{response.description}</View>
          </View>
          <View className={styles.formItem}>
            <View className={styles.formItem_title}>活动规则</View>
            <View className={styles.formItem_input}>{response.role}</View>
          </View>
          <View className={styles.formItem}>
            <View className={styles.formItem_title}>志愿时常</View>
            <View className={styles.formItem_input_g}>{response.hour}</View>
          </View>
          <View className={styles.formItem}>
            <View className={styles.formItem_title}>志愿时间</View>
            <View className={styles.formItem_input_g}>{new Date(response.data).toLocaleDateString()}</View>
          </View>
          <View className={styles.timeWrapper}>
            <View className={time === 2 ? styles.time_active : styles.time} onClick={() => setTime(2)}>08:00 - 10:00</View>
            <View className={time === 3 ? styles.time_active : styles.time} onClick={() => setTime(3)}>10:00 - 12:00</View>
            <View className={time === 4 ? styles.time_active : styles.time} onClick={() => setTime(4)}>12:00 - 14:00</View>
            <View className={time === 5 ? styles.time_active : styles.time} onClick={() => setTime(5)}>14:00 - 16:00</View>
            <View className={time === 6 ? styles.time_active : styles.time} onClick={() => setTime(6)}>16:00 - 18:00</View>
          </View>
          <Button
            className={styles.apply}
            onClick={async () => {
              if (time) {
                const res = await request({
                  url: API_VOLUNTEER_APPLY,
                  method: 'POST',
                  data: {
                    id: router.params.id,
                    timePart: time,
                  }
                })
                if (res.status === 10000) {
                  setDialog(true)
                } else {
                  Taro.showToast({
                    title: res.info,
                    icon: 'none',
                    duration: 2000,
                  })
                }
              }
            }}
          >提交申请</Button>
          {renderDialog()}
        </View>
      )}
    </View>
  )
}

VolunteerList.config = {
  navigationBarTitleText: '志愿活动',
  navigationStyle: 'custom',
}

export default VolunteerList
