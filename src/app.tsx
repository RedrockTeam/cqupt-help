import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Home from './pages/home/home'

import store from './redux'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {
    Taro.login({
      async success(loginRes) {
        if (loginRes.code) {
          const res = await Taro.request({
            url: `https://wx.redrock.team/magicloop/rushAb?code=${loginRes.code}&b=/`,
            method: 'POST',
            // header: {
            //   'content-type': 'application/x-www-form-urlencoded',
            // },
            // data: {
            //   stuNum: '2018214139',
            //   idNum: '21331X',
            // },
            // token: "eyJjbGFzcyI6IjEzMDAxODA3IiwiY29sbGVnZSI6Iui9r+S7tuW3peeoi+WtpumZoiIsImV4cCI6IjEwMjQ1NDU5Nzk4IiwiaWF0IjoiMTU5MDc0MjkxOCIsIm1ham9yIjoiIiwicmVhbE5hbWUiOiLkvZXluprlnaQiLCJzdHVOdW0iOiIyMDE4MjE0MTM5Iiwic3ViIjoieGJzIn0=.F3QclBdLTKP2iINApV5CghTNB5ZwiUyUkzrXh/Wz7+OzCG6QJtDudGQqgqHkMJsPbF5iEGUpSY9hDNH8GC7SV3OSoeP1e+/efWeO1qFs3XlVaKYZ66RiT79R3jLVglASRxBSFqYeoC/Sx8n+SPQAS/B8sY5vSffe9XwZcauZwF2kRdMfIjsgromV89JwDhVvvk6aQGRejc3EYt+gTUOIDH8Ad49gMQBtyqFBAJIsg23vss8rpPIsyQreWRnpGGgS46NhAK4DJ+LlKdII+fJS0f3GaSIXKRPFZ/nfH19UrZ/v2sF1V9zukb6dNqfEHaRRUDWgwRGTdB2fs4XuY4e6jw=="
          })
          console.log(res)
        }
      }
    })
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
