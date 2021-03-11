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
      }
    })
  })
}