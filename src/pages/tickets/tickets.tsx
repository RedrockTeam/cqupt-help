import Taro, { useState } from '@tarojs/taro'
import { View, Image, WebView } from '@tarojs/components'
import styles from './tickets.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import Ticket from '../../components/ticket/ticket'
import Dialog from '../../components/dialog/dialog'
import IconRobSucceed from '../../assets/images/icon-rob-succeed.png'

import defaultImg from '../../assets/images/movie.png'
import request, { useRequest } from '../../utils/request'
import { GetTicketsResponse, RobTicketResponse } from '../../interfaces/tickets'
import { API_TICKETS_GET_TICKETS, API_TICKETS_ROB_TICKET } from '../../constants/api'

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

type DialogState = { isShow: boolean, robState: 'succeed' | 'fail' | null, info: string }

const Tickets: Taro.FC = () => {
  // const [dialog, setDialog] = useState<DialogState>({ isShow: false, robState: null, info: '' })
  // const { response, loading } = useRequest<GetTicketsResponse>({
  //   url: API_TICKETS_GET_TICKETS,
  //   method: 'POST',
  // })

  // eslint-disable-next-line react/no-multi-comp
  // const renderDialog = () => {
  //   if (!dialog.isShow) return null
  //   if (dialog.robState === 'succeed') return (
  //     <Dialog onClick={() => setDialog({ isShow: false, robState: null, info: '' })}>
  //       <View className={styles.dialog_wrapper}>
  //         <Image src={IconRobSucceed} className={styles.dialog_image} />
  //         <View className={styles.dialog_title}>恭喜您！抢票成功！</View>
  //         <View className={styles.dialog_content}>电影票卡卷已存入“我的奖品”中。赶紧去领电影票吧！</View>
  //       </View>
  //     </Dialog>
  //   )
  //   return (
  //     <Dialog onClick={() => setDialog({ isShow: false, robState: null, info: '' })}>
  //       <View className={styles.dialog_wrapper}>
  //         <Image src={IconRobSucceed} className={styles.dialog_image} />
  //         <View className={styles.dialog_title}>Ops...</View>
  //         <View className={styles.dialog_content}>{dialog.info}</View>
  //       </View>
  //     </Dialog>
  //   )
  // }

  // const renderTickets = () => {
  //   if (loading) return <View>Loading...</View>
  //   if (!response) return null
  //   if (response.status === 200) {
  //     if (response.data === null || response.data.length === 0) return null
  //     return (
  //       <View className={styles.container}>
  //         {response.data.map(e => (
  //           <Ticket
  //             title={e.name}
  //             img='todo'
  //             place='todo'
  //             date='todo'
  //             robTime={e.begin_time}
  //             remain={e.left}
  //             key={e.id}
  //             onRob={() => {
  //               request<RobTicketResponse>({
  //                 url: API_TICKETS_ROB_TICKET,
  //                 method: 'POST',
  //                 data: {
  //                   'product_id': e.id,
  //                 },
  //                 header: {
  //                   'content-type': 'application/x-www-form-urlencoded',
  //                 },
  //               }).then(res => {
  //                 if (res.status === 10000) {
  //                   setDialog({ isShow: true, robState: 'succeed', info: res.info })
  //                 } else {
  //                   setDialog({ isShow: true, robState: 'fail', info: res.info })
  //                 }
  //               })
  //             }}
  //           />
  //         ))}
  //       </View>
  //     )
  //   }
  // }

  return (
    // <View className={styles.full_screen}>
    //   {renderDialog()}
    //   <NavToBack title='线上抢票' backgroundColor='#F4F6FA' />
    //   {renderTickets()}
    // </View>
    <WebView src='https://blog.ahabhgk.top/'></WebView>
  )
}

Tickets.config = {
  navigationBarTitleText: '线上抢票',
  navigationStyle: 'custom',
}

export default Tickets
