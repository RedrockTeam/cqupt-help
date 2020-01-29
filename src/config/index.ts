import img from '../assets/images/movie.png'
import chabaidaoImg from '../assets/images/img-chabaidao.png'

export interface Shop {
  img: string,
  name: string,
  location: string,
}

interface Config {
  qqGroup: string,
  foodShopList: Shop[],
  drinkShopList: Shop[],
}

const config: Config = {
  qqGroup: '12345',
  foodShopList: [
    {
      name: '鸡公煲1',
      location: '门口',
      img,
    },
    {
      name: '鸡公煲2',
      location: '门口',
      img,
    },
    {
      name: '鸡公煲3',
      location: '门口',
      img,
    },
  ],
  drinkShopList: [
    {
      name: '一盒糖1',
      location: '南岸区崇文路1号1层附31号',
      img: chabaidaoImg,
    },
    {
      name: '一盒糖2',
      location: '南岸区崇文路1号1层附31号',
      img: chabaidaoImg,
    },
    {
      name: '一盒糖3',
      location: '南岸区崇文路1号1层附31号',
      img: chabaidaoImg,
    },
  ],
}

export default config
