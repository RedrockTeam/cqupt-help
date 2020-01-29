import Taro, { useState, useDidShow } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from './rock.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import rockImg from '../../assets/images/rock-img.png'
import config, { Shop } from '../../config/index'

function getRandom(type: 'food' | 'drink'): Shop {
  let list: Shop[]
  if (type === 'food') list = config.foodShopList
  if (type === 'drink') list = config.drinkShopList
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return list![Math.round(Math.random() * list!.length)]
}

const Rock: Taro.FC = () => {
  const [active, setActive] = useState<'food' | 'drink' | null>(null)

  useDidShow(() => {
    Taro.onAccelerometerChange(res => {
      console.log(res.x)
      console.log(res.y)
      console.log(res.z)
      if (active === null) return
      if (res.x > 1 && res.y > 1) {
        const item: Shop = getRandom(active)
      }
    })
  })

  return (
    <View>
      <NavToBack title='摇一摇' />
      <View className={styles.container}>
        <Image className={styles.img} src={rockImg} />
        <View className={styles.text}>摇一摇看今天光顾哪家店！</View>
        <View className={styles.selector}>
          <View
            className={styles.food}
            onClick={() => setActive('food')}
          >
            <View
              className={active === 'food' ? styles.food_icon_active : styles.food_icon}
            ></View>
            美食
          </View>
          <View
            className={styles.drink}
            onClick={() => setActive('drink')}
          >
            <View
              className={active === 'drink' ? styles.drink_icon_active : styles.drink_icon}
            ></View>
            奶茶
          </View>
        </View>
      </View>
    </View>
  )
}

Rock.config = {
  navigationBarTitleText: '摇一摇',
  navigationStyle: 'custom',
}

export default Rock
