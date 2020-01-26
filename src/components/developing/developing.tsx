import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Img from '../../assets/images/developing.jpg'

const Developing: Taro.FC = () => {
  return (
    <View>
      <Image src={Img} />
      <View>暂未上线......</View>
    </View>
  )
}

export default Developing
