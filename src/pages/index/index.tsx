import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux'
import { RootState } from '../../redux'
import { add, minus, asyncAdd } from '../../redux/modules/counter'

import './index.scss'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

interface Selected {
  num: number,
}

const Index: Taro.FC = () => {
  const counter = useSelector<RootState, Selected>(state => state.counter)
  const dispatch = useDispatch()
  return (
    <View className='index'>
      <Button className='add_btn' onClick={() => dispatch(add())}>+</Button>
      <Button className='dec_btn' onClick={() => dispatch(minus())}>-</Button>
      <Button className='dec_btn' onClick={() => dispatch(asyncAdd())}>async</Button>
      <View><Text>{counter.num}</Text></View>
      <View><Text>Hello, World</Text></View>
    </View>
  )
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index
