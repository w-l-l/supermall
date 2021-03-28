// 模拟商品分类数据
export function getGoodsCategory() {
  const subcategories = (src, title) => ({src, title})
  const categoryDetail = {
    pop: Array(20).fill({
      id: 1,
      src: 'https://s3.mogucdn.com/mlcdn/c45406/170901_0f2ej9bfcd1a2hla3934lh81j8792_468x702.jpg_280x374.v1cAC.40.webp',
      title: 'the SAEM得鲜按压口红，用多少拧多少',
      price: 69,
      cfav: 9
    }),
    new: Array(20).fill({
      id: 2,
      src: 'https://s2.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg_360x480.v1cAC.40.webp',
      title: '秋装新款韩版背心针织毛衣马甲长袖衬衫打底裤三件套省心套装',
      price: 75.72,
      cfav: 88
    }),
    sell: Array(20).fill({
      id: 3,
      src: 'https://s2.mogucdn.com/mlcdn/c45406/200325_456h2llfif520a1354ce2dea8i3ic_640x960.jpg_360x480.v1cAC.40.webp',
      title: '限定21色眼影高光盘显色修容哑光珠光',
      price: 32,
      cfav: 999
    })
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          title: '正在流行',
          subcategories: Array(20).fill(subcategories('https://img12.360buyimg.com/ceco/s300x300_jfs/t1/119430/19/3585/133796/5eb12fe7E1a4ee264/392d83858bb8cd52.jpg!q70.jpg.webp', '浮雕C纹 男包')),
          categoryDetail
        },
        {
          title: '上衣',
          subcategories: Array(20).fill(subcategories('https://img12.360buyimg.com/ceco/s300x300_jfs/t1/95968/36/13935/185871/5e60e8e4E046c2490/47dcb4e6ad6c9f36.jpg!q70.jpg.webp', '酱香茅台')),
          categoryDetail
        },
        {
          title: '裤子',
          subcategories: Array(20).fill(subcategories('https://img20.360buyimg.com/ceco/s300x300_jfs/t1/100438/11/19473/247131/5e9e65f4E952d743e/43170be149785b37.jpg!q70.jpg.webp', '威士忌')),
          categoryDetail
        },
        {
          title: '裙子',
          subcategories: Array(20).fill(subcategories('https://img10.360buyimg.com/ceco/s300x300_jfs/t1/154195/37/18775/65653/603463b2E1f70791f/05d8ad979c24be2f.jpg!q70.jpg.webp', '华为手机')),
          categoryDetail
        },
        {
          title: '内衣',
          subcategories: Array(20).fill(subcategories('https://img10.360buyimg.com/ceco/s300x300_jfs/t1/144339/2/3458/49804/5f17b924Ea2540e77/dfc523838a686232.jpg!q70.jpg.webp', '富士 拍立得')),
          categoryDetail
        },
        {
          title: '女鞋',
          subcategories: Array(20).fill(subcategories('https://img13.360buyimg.com/mobilecms/s300x300_jfs/t1/85861/12/1062/265787/5db85a80E9439c1f8/06edb8d7690a2baf.png.webp', '机械男表')),
          categoryDetail
        },
        {
          title: '男友',
          subcategories: Array(20).fill(subcategories('https://img14.360buyimg.com/mobilecms/s300x300_jfs/t1/54861/7/2441/228718/5d0495b3E1a5d7c0f/5220cb2abf5b2dea.png.webp', '跑步鞋')),
          categoryDetail
        },
        {
          title: '包包',
          subcategories: Array(20).fill(subcategories('https://img20.360buyimg.com/ceco/s300x300_jfs/t1/153702/29/15780/81514/601663b6E0eb5908f/3cb05e84fe495b03.jpg!q70.jpg.webp', '小牛电动')),
          categoryDetail
        },
        {
          title: '运动',
          subcategories: Array(20).fill(subcategories('https://img12.360buyimg.com/img/s300x300_jfs/t1/138281/39/18580/158854/5fd892fbEf69f4365/62351c19000770d1.jpg!cc_150x150.webp', '极光星河')),
          categoryDetail
        },
        {
          title: '配饰',
          subcategories: Array(20).fill(subcategories('https://img20.360buyimg.com/jdcms/s300x300_jfs/t1/142719/12/444/104550/5ee1988cEd952bf51/74860b136a001168.jpg.webp', '小米手环5')),
          categoryDetail
        },
        {
          title: '美妆',
          subcategories: Array(20).fill(subcategories('https://img12.360buyimg.com/jdcms/s300x300_jfs/t1/102579/12/8602/267382/5e05d7a2E40d15e4a/fc222549083be151.jpg.webp', '新款超柔水洗棉冬被')),
          categoryDetail
        },
        {
          title: '个护',
          subcategories: Array(20).fill(subcategories('https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/171293/20/14830/273530/605cc1fdE558c4a33/339bd71ab1b63b30.jpg.webp', '德国进口手表')),
          categoryDetail
        }
      ])
    }, Math.ceil(Math.random() * 2) * 1000)
  })
}
