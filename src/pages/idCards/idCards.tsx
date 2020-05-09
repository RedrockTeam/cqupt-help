import Taro, { useState } from '@tarojs/taro'
import { View, Button, Input } from '@tarojs/components'
import styles from './idCards.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import IdCard from '../../components/idCard/idCard'
import Empty from '../../components/empty/empty'
import Dialog from '../../components/dialog/dialog'

const mocks = [
  {
    name: '红小岩',
    major: '软件工程',
    avatar: 'https://avatars0.githubusercontent.com/u/42857895?s=460&v=4',
    organization: '红岩网校工作站',
    date: '2018.10.10',
  },
  {
    name: '红小岩',
    major: '软件工程',
    avatar: 'https://avatar-static.segmentfault.com/404/986/4049860171-5bc0242f940c1_huge256',
    organization: '红岩网校工作站',
    date: '2018.10.10',
  },
  {
    name: '红小岩',
    major: '软件工程',
    avatar: 'https://avatar-static.segmentfault.com/404/986/4049860171-5bc0242f940c1_huge256',
    organization: '红岩网校工作站',
    date: '2018.10.10',
  },
]

const IdCards: Taro.FC = () => {
  const [dialog, setDialog] = useState<boolean>(false)
  const [team, setTeam] = useState<string>('')

  // eslint-disable-next-line react/no-multi-comp
  const renderDialog = (): JSX.Element | null => {
    if (dialog) {
      return (
        <Dialog onClick={() => setDialog(false)} >
          <View className={styles.dialog_wrapper}>
            <View className={styles.dialog_title}>请填写需要申请的社团名称</View>
            <Input className={styles.dialog_input} value={team} onInput={(e) => setTeam(e.detail.value)} />
            <View className={styles.dialog_warn}>注：请保证信息准确性</View>
            <Button
              className={styles.submit}
              onClick={() => {
                // request
                setDialog(false)
              }}
            >完成</Button>
          </View>
        </Dialog>
      )
    }
    return null
  }

  return (
    <View className={styles.full_screen}>
      {renderDialog()}
      <NavToBack title='身份有证' />
      {mocks.length === 0
        ? <Empty content='暂无证件' />
        : (
          <View className={styles.container}>
            {mocks.map(e => (
              <IdCard {...e} key={e.organization} />
            ))}
          </View>
        )
      }
      <Button
        className={styles.apply}
        onClick={() => setDialog(true)}
      >申请新会员证</Button>
    </View>
  )
}

IdCards.config = {
  navigationBarTitleText: '身份有证',
  navigationStyle: 'custom',
}

export default IdCards
