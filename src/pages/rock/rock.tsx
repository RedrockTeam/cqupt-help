import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from './rock.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import RandomShopDialog from '../../components/randomShop/randomShop'
import rockImg from '../../assets/images/rock-img.png'
import { Shop, drinkShopList, foodShopList } from '../../constants/index'

function getRandom(type: 'food' | 'drink'): Shop {
  let list: Shop[]
  if (type === 'food') list = foodShopList
  if (type === 'drink') list = drinkShopList
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return list![Math.round(Math.random() * list!.length)]
}

const initialDialogState = {
  isShow: false,
  shop: {
    name: '',
    location: '',
    img: '',
  },
}

const Rock: Taro.FC = () => {
  const [active, setActive] = useState<'food' | 'drink' | null>(null)
  const [dialog, setDialog] = useState<{
    isShow: boolean,
    shop: Shop
  }>(initialDialogState)

  useEffect(() => {
    const cb: Taro.onAccelerometerChange.Callback = (res) => {
      if (dialog.isShow) return
      if (active === null) return
      if (Math.abs(res.x) > .7) {
        setDialog({ isShow: true, shop: getRandom(active) })
      }
    }

    Taro.onAccelerometerChange(cb)

    return () => {
      Taro.offAccelerometerChange(cb)
    }
  }, [active, dialog.isShow])

  return (
    <View>
      {dialog.isShow && <RandomShopDialog
        {...dialog.shop}
        onClick={() => setDialog(initialDialogState)}
        onRockAgain={() => {
          if (!active) {
            Taro.showToast({ title: '请选择奶茶还是食物', duration: 2000 })
            return
          }
          setDialog({ isShow: true, shop: getRandom(active) })
        }}
      />}
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
