import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import { login, getUserInfo } from './api/self'

import Home from './pages/home/home'

import store from './redux'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  async componentDidMount() {
    const token: string = Taro.getStorageSync('CQUPT_HELP_TOKEN')
    if (!token) {  
      await login()
    }
    const userInfo = await getUserInfo()
    console.log(userInfo)
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/home',
        'pages/self/self',
          'pages/idCards/idCards',
          'pages/feedback/feedback',
            'pages/feedbackSucceed/feedbackSucceed',
        'pages/compus/compus',
          'pages/run/run',
            'pages/run/history',
          'pages/rock/rock',
        'pages/tickets/tickets',
        'pages/volunteer/volunteer',
          'pages/volunteerList/volunteerList',
            'pages/volunteerInfo/volunteerInfo',
        'pages/myActivities/myActivities',
        'pages/myRewards/myRewards',

      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '重邮帮',
      navigationBarTextStyle: 'black',
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
