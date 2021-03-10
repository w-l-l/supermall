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
      ]
    })
  })
}