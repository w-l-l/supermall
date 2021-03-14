// 模拟详情数据
export function mockDetail() {
  return new Promise(resolve => {
    setTimeout(resolve, Math.ceil(Math.random() * 3), {
      imgs: [
        'https://img11.360buyimg.com/pop/s1180x940_jfs/t1/163329/31/9975/92173/60419b4bE3ad8a8f6/949678b595b9d680.jpg.webp',
        'https://img10.360buyimg.com/pop/s1180x940_jfs/t1/165785/21/17672/85583/6045c0a7E0e327dc3/aced10fd2f7e30b7.jpg.webp',
        'https://img20.360buyimg.com/da/s1180x940_jfs/t1/149422/12/10609/56353/5f86fab5E2c3fafe2/b252b8d983c43327.jpg.webp',
        'https://imgcps.jd.com/ling4/100005929367/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd81f3682acdd181dfeb407/a2fc2fcf/cr/s/q.jpg',
        'https://img11.360buyimg.com/pop/s1180x940_jfs/t1/155528/27/20653/57960/603da32dE09998612/5689d335e6a19f1f.jpg.webp',
      ],
      goods: {
        title: '中兴 ZTE V2020 Smart孝心版 星云灰128GB全网通 高清四摄 4G双卡双待时光机老年手机老人机智能手机',
        newPrice: 39,
        oldPrice: 55.52,
        discount: 7,
        columns: ['销量88', '收藏120人', '72小时发货'],
        services: [
          { icon: 'https://m.360buyimg.com/babel/jfs/t1/52683/35/10394/3447/5d7739edE270aa7b3/d4d1151b09b5553b.png', name: '延误必赔' },
          { icon: 'https://m.360buyimg.com/babel/jfs/t1/31069/34/14642/979/5cbf0665Ec7dc8223/5fee386254dd2ebc.png', name: '退货补运费' },
          { icon: 'https://m.360buyimg.com/babel/jfs/t1/32403/22/14829/3699/5cbf0674E04723693/caa83ce9b881cd24.png', name: '全国包邮' },
          { icon: 'https://m.360buyimg.com/babel/jfs/t1/51584/31/10221/1685/5d7739e7E1adb25cd/1d0957d7f2ae01a2.png', name: '7天无理由退货' },
        ]
      },
      shop: {
        logo: 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3697263530,885395973&fm=179&app=42&f=PNG?w=200&h=200&s=71560876ACB46C8657A797F10300501F',
        name: '优米女孩',
        sells: 230000,
        goodsCount: 549,
        score: [
          { isBetter: true, name: '描述相符', score: 5 },
          { isBetter: false, name: '价格合理', score: 1 },
          { isBetter: true, name: '质量满意', score: 4.9 }
        ]
      },
      detailInfo: {
        desc: '小米11 5G游戏手机【10重好礼】 8G+256G 蓝色 55W充电器套装',
        detailImage: {
          key: '机型展示',
          list: [
            'https://img10.360buyimg.com/seckillcms/s500x500_jfs/t1/157536/15/12750/112602/6049e2a0E14cd4ffc/1c99e92c58659e55.jpg',
            'https://img12.360buyimg.com/seckillcms/s500x500_jfs/t1/163803/35/1069/117920/5ff42e24Ed15cf59b/28d25fc366015356.jpg',
            'https://img14.360buyimg.com/seckillcms/s500x500_jfs/t1/162034/3/11886/92909/604994dcE59922056/2eb80012b92a13c0.jpg',
            'https://img13.360buyimg.com/seckillcms/s500x500_jfs/t1/168228/5/8191/133197/603b406eE280a9545/a90f7b3a2867ef90.jpg',
            'https://img10.360buyimg.com/seckillcms/s500x500_jfs/t1/169095/7/11363/198486/60489555E5f3efded/176cb9945e39bde7.png'
          ]
        }
      },
      paramInfo: {
        sizes: [
          [
            ['尺码', 'S', 'M', 'L', 'XL'],
            ['胸围', '100', '104', '108', '112'],
            ['袖长', '61', '62', '63', '64'],
            ['裤长', '96', '97', '98', '99'],
            ['肩宽', '36', '37', '38', '39'],
            ['衣长', '54', '55', '56', '57']
          ]
        ],
        infos: [
          { key: '厚薄', value: '普通' },
          { key: '厂名', value: '美衣梦莎服饰有限公司' },
          { key: '颜色', value: '上衣+裤子' },
          { key: '尺码', value: 'S,XL,L,M' },
          { key: '衣长', value: '常规款（51-65cm）' },
          { key: '季节', value: '秋季' },
          { key: '厂址', value: '广州白云凉溪颐和路31号' },
          { key: '材质', value: '聚酯纤维' },
          { key: '领型', value: '其他领型' },
          { key: '袖长', value: '长袖' },
          { key: '款式', value: '衣裤套餐' },
          { key: '风格', value: '通勤（OL）' },
          { key: '潮流', value: '韩系' }
        ],
        image: 'https://img14.360buyimg.com/babel/s580x740_jfs/t1/123624/4/20139/166366/5fc065bfE4675d21b/40d2c7c4c506292c.jpg!cc_290x370.webp'
      },
      commentInfo: {
        user: {
          avatar: 'http://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
          uname: '棒棒糖闯江湖'
        },
        content: '刚好合适，物美价廉，衣服面料很好，穿着很舒服，版型也好看，非常棒',
        created: 1535694719,
        style: '颜色：上衣+裤子 尺码：M',
        images: [
          'https://img.alicdn.com/bao/uploaded/i2/634491/O1CN01T9PnWc1j2vIMn6gk2_!!634491.jpg_180x180q90.jpg_.webp',
          'https://img.alicdn.com/bao/uploaded/i1/48317215/O1CN01ehQZXZ23AWDj4DFIi_!!0-item_pic.jpg_180x180q90.jpg_.webp',
          'https://img.alicdn.com/bao/uploaded/i1/47967555/TB2AGgQaEyfF1Jjy0FbXXXSupXa_!!47967555.jpg_180x180q90.jpg_.webp',
          'https://img.alicdn.com/bao/uploaded/i1/47967555/TB1Kky0bH1YBuNjSszeYXGblFXa_M2.SS2_100x100q90.jpg_.webp'
        ]
      }
    })
  })
}