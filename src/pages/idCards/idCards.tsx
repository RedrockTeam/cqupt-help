import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import styles from './idCards.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import IdCard from '../../components/idCard/idCard'

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
]

const IdCards: Taro.FC = () => {
  return (
    <View>
      <NavToBack title='身份有证' />
      <View>
        {mocks.map(e => (
          <IdCard {...e} key={e.organization} />
        ))}
      </View>
    </View>
  )
}

IdCards.config = {
  navigationBarTitleText: '身份有证',
  navigationStyle: 'custom',
}

export default IdCards
