import Taro from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components'
import styles from './feedbackSucceed.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import icon from '../../assets/images/icon-feedback-succeed.png'
import { qqGroup } from '../../constants/index'

const goBack = () => Taro.navigateBack({ delta: 2 })

const FeedbackSucceed: Taro.FC = () => {
  const copy = async () => {
    try {
      await Taro.setClipboardData({ data: qqGroup })
      await Taro.showToast({
        title: '已添加到剪贴板中！',
        duration: 2000,
        icon: 'none',
      })
    } catch (e) {
      console.log(e)
      Taro.showToast({
        title: '添加剪贴板失败...',
        duration: 2000,
        icon: 'none',
      })
    }
  }

  return (
    <View>
      <NavToBack title='反馈中心' backgroundColor='#F6F5FA' />
      <View className={styles.container}>
        <Image src={icon} className={styles.icon} />
        <Text className={styles.title}>反馈成功</Text>
        <View className={styles.info}>
          了解更多反馈情况可加 QQ 群：{qqGroup} <View className={styles.copy} onClick={copy}>复制</View>
        </View>
        <Button className={styles.confirm} onClick={goBack}>确定</Button>
      </View>
    </View>
  )
}

FeedbackSucceed.config = {
  navigationBarTitleText: '反馈问题',
  navigationStyle: 'custom',
}

export default FeedbackSucceed
