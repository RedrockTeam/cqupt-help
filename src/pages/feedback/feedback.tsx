import Taro, { useState } from '@tarojs/taro'
import { View, Button, Input, Textarea, Text } from '@tarojs/components'
import styles from './feedback.module.scss'
import NavToBack from '../../components/navToBack/navToBack'

const Feedback: Taro.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [reason, setReason] = useState<string>('')

  const onClick = async () => {
    if (title.length === 0) {
      await Taro.showToast({
        title: '你还未输入标题',
        duration: 2000,
        icon: 'none',
        mask: true,
      })
      return
    }

    if (reason.length === 0) {
      await Taro.showToast({
        title: '你还未内容',
        duration: 2000,
        icon: 'none',
        mask: true,
      })
      return
    }

    console.log(title, reason)
    Taro.navigateTo({ url: '/pages/feedbackSucceed/feedbackSucceed' })
  }

  return (
    <View>
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
