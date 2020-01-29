import Taro, { useState } from '@tarojs/taro'
import { View, Button, Input, Textarea, Text, Image } from '@tarojs/components'
import styles from './feedback.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import Dialog from '../../components/dialog/dialog'
import iconWithoutTitle from '../../assets/images/icon-without-title.png'
import iconWithoutReason from '../../assets/images/icon-without-reason.png'

const Feedback: Taro.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [reason, setReason] = useState<string>('')
  const [dialog, setDialog] = useState<boolean>(false)

  // eslint-disable-next-line react/no-multi-comp
  const renderDialog = (): JSX.Element | null => {
    if (dialog) {
      return (
        <Dialog onClick={() => setDialog(false)} >
          <View className={styles.dialog_wrapper}>
            <Image
              src={title.length === 0 ? iconWithoutTitle : iconWithoutReason}
              className={styles.dialog_image}
            />
            <View>你还未输入{title.length === 0 ? '标题' : '内容'}</View>
          </View>
        </Dialog>
      )
    }
    return null
  }

  const onClick = () => {
    if (title.length === 0 || reason.length === 0) {
      setDialog(true)
      return
    }
    console.log(title, reason)
    Taro.navigateTo({ url: '/pages/feedbackSucceed/feedbackSucceed' })
  }

  return (
    <View className={styles.full_screen}>
      {renderDialog()}
      <NavToBack title='反馈中心' backgroundColor='#F6F5FA' />
      <View className={styles.container}>
        <View className={styles.title}>故障标题</View>
        <Input
          value={title}
          className={styles.title_input}
          type='text'
          placeholder='请输入标题（不超过 10 个字）'
          maxLength={10}
          onInput={(e) => setTitle(e.detail.value)}
        />
        <View className={styles.reason}>
          <Text>故障描述</Text>
          <Text>{reason.length} / 150</Text>
        </View>
        <Textarea
          value={reason}
          className={styles.reason_input}
          placeholder='请输入文字（不超过 150 个字）'
          maxlength={150}
          onInput={(e) => setReason(e.detail.value)}
        />
        <Button
          className={styles.submit}
          onClick={onClick}
        >提交</Button>
      </View>
    </View>
  )
}

Feedback.config = {
  navigationBarTitleText: '反馈中心',
  navigationStyle: 'custom',
}

export default Feedback
