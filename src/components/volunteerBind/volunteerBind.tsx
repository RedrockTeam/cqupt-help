import Taro, { useState } from '@tarojs/taro'
import { View, Input, Button, Image } from '@tarojs/components'
import styles from './volunteerBind.module.scss'
import Dialog from '../dialog/dialog'
import iconWithoutTitle from '../../assets/images/icon-without-title.png'
import request from '../../utils/request'
import { API_VOLUNTEER_BIND } from '../../constants/api'

type Props = {
  
}

const VolunteerBind: Taro.FC<Props> = () => {
  const [dialog, setDialog] = useState<boolean>(false)
  const [phoneNum, setPhoneNum] = useState<string>('')
  const [idNum, setIdNum] = useState<string>('')
  const [volunteerNum, setVolunteerNum] = useState<string>('')

  // eslint-disable-next-line react/no-multi-comp
  const renderDialog = (): JSX.Element | null => {
    if (dialog) {
      return (
        <Dialog onClick={() => setDialog(false)} >
          <View className={styles.dialog_wrapper}>
            <Image
              src={iconWithoutTitle}
              className={styles.dialog_image}
            />
            <View>信息未填写完整！</View>
          </View>
        </Dialog>
      )
    }
    return null
  }

  return (
    <View className={styles.container}>
      <View className={styles.title}>欢迎使用志愿报名系统</View>
      <View className={styles.formItem}>
        <View className={styles.formItem_title}>电话号码</View>
        <Input
          className={styles.formItem_input}
          placeholder='请输入学号'
          value={phoneNum}
          onInput={e => {
            setPhoneNum(e.detail.value)
          }}
        />
      </View>
      <View className={styles.formItem}>
        <View className={styles.formItem_title}>身份证号</View>
        <Input
          className={styles.formItem_input}
          placeholder='请输入身份证后六位'
          value={idNum}
          onInput={e => {
            setIdNum(e.detail.value)
          }}
        />
      </View>
      <View className={styles.formItem}>
        <View className={styles.formItem_title}>志愿者账号</View>
        <Input
          className={styles.formItem_input}
          placeholder='请输入身份证后六位'
          value={volunteerNum}
          onInput={e => {
            setVolunteerNum(e.detail.value)
          }}
        />
      </View>
      <View className={styles.tips}>注意：请仔细输入信息，该信息将影响志愿时长的统计！</View>
      <Button
        className={styles.submit}
        onClick={async () => {
          if (!phoneNum.length || !idNum.length || !volunteerNum.length) {
            setDialog(true)
          } else {
            const res = await request<{ status: number, info: string }>({
              url: API_VOLUNTEER_BIND,
              method: 'POST',
              data: {
                phone: phoneNum,
                idCardNum: idNum,
                volunteerNum,
              }
            })
            if (res.status === 10000) {
              Taro.showToast({
                title: '绑定成功',
                icon: 'none',
                duration: 2000,
              })
            } else {
              Taro.showToast({
                title: 'Error',
                icon: 'none',
                duration: 2000,
              })
            }
          }
        }}
      >下一步</Button>
      {renderDialog()}
    </View>
  )
}

export default VolunteerBind
