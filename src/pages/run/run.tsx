import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './run.module.scss'
import NavToBack from '../../components/navToBack/navToBack'
import SaveBag from '../../components/saveBag/saveBag'
import TakeBag from '../../components/takeBag/takeBag'
import { PLATE_A, PLATE_B, PLATE_C } from '../../constants'
import request from '../../utils/request'
import {
  API_RUN_GET_PLATE_A,
  API_RUN_GET_PLATE_B,
  API_RUN_GET_PLATE_C,
  API_RUN_RETURN_PLATE_A,
  API_RUN_RETURN_PLATE_B,
  API_RUN_RETURN_PLATE_C,
} from '../../constants/api'
import { GetPlateResponse, ReturnPlateResponse } from '../../interfaces/run'

const Run: Taro.FC = () => {
  const [plateCode, setPlateCode] = useState<string>('')
  const [hasSave, setHasSave] = useState<boolean>(false)

  const handleScan = async () => {
    try {
      const code = await Taro.scanCode({ onlyFromCamera: true })
      let getPlateUrl: string
      if (code.result === PLATE_A) getPlateUrl = API_RUN_GET_PLATE_A
      else if (code.result === PLATE_B) getPlateUrl = API_RUN_GET_PLATE_B
      else if (code.result === PLATE_C) getPlateUrl = API_RUN_GET_PLATE_C
      else throw Error('qrcode error')

      const res = await request<GetPlateResponse>({ url: getPlateUrl, method: 'POST' })
      if (res && res.flag) {
        setPlateCode(res.plateNum)
        setHasSave(true)
      }
      // if (getPlateUrl) {
      //   console.log(getPlateUrl)
      //   setPlateCode('A20')
      //   setHasSave(true)
      // }
    } catch (e) {
      console.log(e)
      if (e.errMsg === 'scanCode:fail cancel') return
      if (e.message === 'qrcode error') Taro.showToast({ title: '二维码错误' })
      return
    }
  }

  const handleTakeBag = async () => {
    try {
      const locationCode = plateCode[0]
      let returnPlateUrl: string
      if (locationCode === PLATE_A) returnPlateUrl = API_RUN_RETURN_PLATE_A
      else if (locationCode === PLATE_A) returnPlateUrl = API_RUN_RETURN_PLATE_B
      else if (locationCode === PLATE_A) returnPlateUrl = API_RUN_RETURN_PLATE_C
      else throw Error('internal error')

      const res = await request<ReturnPlateResponse>({ url: returnPlateUrl, method: 'POST' })
      if (res && res.flag) {
        Taro.showToast({ title: '取包成功', duration: 2000 })
        setHasSave(false)
      }
      // if (returnPlateUrl) {
      //   console.log(returnPlateUrl)
      //   setHasSave(false)
      // }
    } catch (e) {
      console.log(e)
      if (e.message === 'internal error') Taro.showToast({ title: '内部错误' })
      return
    }
  }

  return (
    <View className={styles.full_screen}>
      <NavToBack title='天天护跑' />
      {hasSave
        ? <TakeBag plateCode={plateCode} onTakeBag={handleTakeBag} />
        : <SaveBag onSaveBag={handleScan} />}
    </View>
  )
}

Run.config = {
  navigationBarTitleText: '天天护跑',
  navigationStyle: 'custom',
}

export default Run
