import Taro from '@tarojs/taro'
import { View, Image, Canvas } from '@tarojs/components'
import styles from './idCard.module.scss'

import idCardBg from '../../assets/images/id-card-bg.png'
import downloadImg from '../../assets/images/icon-download-id-card.png'

interface Prop {
  name: string,
  avatar: string,
  major: string,
  organization: string,
  date: string,
}

class IdCard extends Taro.Component<Prop, { isHidden: boolean }> {

  downloadIdCard = async () => {
    try {
      // 处理授权
      // const modal = await Taro.showModal({
      //   title: '授权提示',
      //   content: '打开保存图片权限',
      // })
      // if (!modal.confirm) return
      // const setting = await Taro.openSetting()
      // if (!setting.authSetting["scope.writePhotosAlbum"]) {
      //   Taro.showToast({ title: '授权失败' })
      //   return
      // }

      // 处理画布
      // this.setState({ isHidden: false })
      Taro.showLoading({ title: '正在处理中...', mask: true })

      const avatarInfo = await Taro.getImageInfo({ src: this.props.avatar })
      const ctx = Taro.createCanvasContext(`${this.props.organization}-canvas`, this)

      ctx.setFillStyle('#fff')

      // 描述背景
      ctx.drawImage(idCardBg, 0, 0, 345, 195)
      ctx.save() // 保存上下文

      // 描述头像
      ctx.beginPath()
      ctx.arc(60 / 2 + 24, 60 / 2 + 24, 60 / 2, 0, 2 * Math.PI)
      ctx.clip()
      ctx.drawImage(avatarInfo.path, 24, 24, 60, 60)
      ctx.restore() // 恢复上下文

      // 描述文字
      ctx.font = 'normal bold 21rpx PingFang SC'
      ctx.fillStyle = '#474F66'
      ctx.fillText(this.props.name, 100, 50)

      ctx.font = 'normal bold 17rpx PingFang SC'
      ctx.fillStyle = '#474F66'
      ctx.fillText(this.props.organization, 24, 136)

      ctx.font = 'normal bold 14rpx PingFang SC'
      ctx.fillStyle = '#7A8299'
      ctx.fillText(this.props.major, 100, 76)

      ctx.font = 'normal bold 13rpx PingFang SC'
      ctx.fillStyle = '#7A8299'
      ctx.fillText(`入会时间：${this.props.date}`, 24, 162)

      // 绘制
      ctx.draw(true, () => {
        // 保存到手机
        Taro.canvasToTempFilePath({
          canvasId: `${this.props.organization}-canvas`,
          success: function (res) {
            Taro.hideLoading()
            Taro.previewImage({ //将图片预览出来
              urls: [res.tempFilePath]
            })
          }
        }, this.$scope)
      })
    } catch (e) {
      console.log(e)
      Taro.showToast({ title: '失败', icon: 'none' })
    }
  }

  render() {
    return (
      <View className={styles.container}>
        <View className={styles.top}>
          <Image className={styles.avatar} src={this.props.avatar}></Image>
          <View className={styles.info}>
            <View className={styles.name}>{this.props.name}</View>
            <View className={styles.major}>{this.props.major}</View>
          </View>
        </View>
        <View className={styles.bottom}>
          <View className={styles.organization}>{this.props.organization}</View>
          <View className={styles.date}>{this.props.date}</View>
        </View>
        {/* 下载 idCard */}
        <Image src={downloadImg} className={styles.download} onClick={this.downloadIdCard} />
        <Canvas
          style='width: 690rpx; height: 390rpx; position: absolute; top: 0; right: -1000rpx; z-index=-1;'
          canvasId={`${this.props.organization}-canvas`}
        />
      </View>
    )
  }
}

export default IdCard
