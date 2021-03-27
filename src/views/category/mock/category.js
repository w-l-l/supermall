// 模拟商品分类数据
export function getGoodsCategory() {
  const subcategories = (src, title) => ({src, title})
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          title: '正在流行',
          subcategories: Array(20).fill(subcategories('https://img12.360buyimg.com/ceco/s300x300_jfs/t1/119430/19/3585/133796/5eb12fe7E1a4ee264/392d83858bb8cd52.jpg!q70.jpg.webp', '浮雕C纹 男包'))
        },
        {
          title: '上衣',
          subcategories: Array(20).fill(subcategories('https://img12.360buyimg.com/ceco/s300x300_jfs/t1/95968/36/13935/185871/5e60e8e4E046c2490/47dcb4e6ad6c9f36.jpg!q70.jpg.webp', '酱香茅台'))
        },
        {
          title: '裤子',
          subcategories: Array(20).fill(subcategories('https://img20.360buyimg.com/ceco/s300x300_jfs/t1/100438/11/19473/247131/5e9e65f4E952d743e/43170be149785b37.jpg!q70.jpg.webp', '威士忌'))
        },
        {
          title: '裙子',
          subcategories: Array(20).fill(subcategories('https://img10.360buyimg.com/ceco/s300x300_jfs/t1/154195/37/18775/65653/603463b2E1f70791f/05d8ad979c24be2f.jpg!q70.jpg.webp', '华为手机'))
        },
        {
          title: '内衣',
          subcategories: Array(20).fill(subcategories('https://img10.360buyimg.com/ceco/s300x300_jfs/t1/144339/2/3458/49804/5f17b924Ea2540e77/dfc523838a686232.jpg!q70.jpg.webp', '富士 拍立得'))
        },
        {
          title: '女鞋',
          subcategories: Array(20).fill(subcategories('https://img13.360buyimg.com/mobilecms/s300x300_jfs/t1/85861/12/1062/265787/5db85a80E9439c1f8/06edb8d7690a2baf.png.webp', '机械男表'))
        },
        {
          title: '男友',
          subcategories: Array(20).fill(subcategories('https://img14.360buyimg.com/mobilecms/s300x300_jfs/t1/54861/7/2441/228718/5d0495b3E1a5d7c0f/5220cb2abf5b2dea.png.webp', '跑步鞋'))
        },
        {
          title: '包包',
          subcategories: Array(20).fill(subcategories('https://img20.360buyimg.com/ceco/s300x300_jfs/t1/153702/29/15780/81514/601663b6E0eb5908f/3cb05e84fe495b03.jpg!q70.jpg.webp', '小牛电动'))
        },
        {
          title: '运动',
          subcategories: Array(20).fill(subcategories('https://img12.360buyimg.com/img/s300x300_jfs/t1/138281/39/18580/158854/5fd892fbEf69f4365/62351c19000770d1.jpg!cc_150x150.webp', '极光星河'))
        },
        {
          title: '配饰',
          subcategories: Array(20).fill(subcategories('https://img20.360buyimg.com/jdcms/s300x300_jfs/t1/142719/12/444/104550/5ee1988cEd952bf51/74860b136a001168.jpg.webp', '小米手环5'))
        },
        {
          title: '美妆',
          subcategories: Array(20).fill(subcategories('https://img12.360buyimg.com/jdcms/s300x300_jfs/t1/102579/12/8602/267382/5e05d7a2E40d15e4a/fc222549083be151.jpg.webp', '新款超柔水洗棉冬被'))
        },
        {
          title: '个护',
          subcategories: Array(20).fill(subcategories('https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/171293/20/14830/273530/605cc1fdE558c4a33/339bd71ab1b63b30.jpg.webp', '德国进口手表'))
        }
      ])
    }, Math.ceil(Math.random() * 2) * 1000)
  })
}
