import Taro, { useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from './tickets.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import Ticket from '../../components/ticket/ticket'
import Dialog from '../../components/dialog/dialog'
import IconRobSucceed from '../../assets/images/icon-rob-succeed.png'

import defaultImg from '../../assets/images/movie.png'

const mock = [
  {
    title: '我和我的祖国',
    img: defaultImg,
    place: '科技会堂',
    date: '2019.10.23 19:00',
    robTime: '2019.10.20 14:00开抢',
    remain: 100,
  },
  {
    title: '我和我的祖国2',
    img: defaultImg,
    place: '科技会堂',
    date: '2019.10.23 19:00',
    robTime: '2019.10.20 14:00开抢',
    remain: 100,
  },
  {
    title: '我和我的祖国3',
    img: defaultImg,
    place: '科技会堂',
    date: '2019.10.23 19:00',
    robTime: '2019.10.20 14:00开抢',
    remain: 100,
  },
  {
    title: '我和我的祖国4',
    img: defaultImg,
    place: '科技会堂',
    date: '2019.10.23 19:00',
    robTime: '2019.10.20 14:00开抢',
    remain: 100,
  },
]

type DialogState = { isShow: boolean, robState: 'succeed' | 'fail' | null }

const Tickets: Taro.FC = () => {
  const [dialog, setDialog] = useState<DialogState>({ isShow: false, robState: null })

  // eslint-disable-next-line react/no-multi-comp
  const renderDialog = (): JSX.Element | null => {
    if (!dialog.isShow) return null
    if (dialog.robState === 'succeed') return (
      <Dialog onClick={() => setDialog({ isShow: false, robState: null })}>
        <View className={styles.dialog_wrapper}>
          <Image src={IconRobSucceed} className={styles.dialog_image} />
          <View className={styles.dialog_title}>恭喜您！抢票成功！</View>
          <View className={styles.dialog_content}>电影票卡卷已存入“我的奖品”中。赶紧去领电影票吧！</View>
        </View>
      </Dialog>
    )
    return (
      <Dialog onClick={() => setDialog({ isShow: false, robState: null })}>
        <View className={styles.dialog_wrapper}>
          <Image src={IconRobSucceed} className={styles.dialog_image} />
          <View className={styles.dialog_title}>恭喜您！抢票失败！</View>
          <View className={styles.dialog_content}>电影票卡卷已存入“我的奖品”中。赶紧去领电影票吧！</View>
        </View>
      </Dialog>
    )
  }

  return (
    <View className={styles.full_screen}>
      {renderDialog()}
      <NavToBack title='线上抢票' backgroundColor='#F4F6FA' />
      <View className={styles.container}>
        {mock.map(e => (
          <Ticket {...e} key={e.title} onRob={() => setDialog({ isShow: true, robState: 'succeed' })} />
        ))}
      </View>
    </View>
  )
}

Tickets.config = {
  navigationBarTitleText: '线上抢票',
  navigationStyle: 'custom',
}

export default Tickets
