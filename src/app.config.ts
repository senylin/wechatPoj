export default {
  pages: [
    "pages/index/index",
    "pages/movies/movies",
    // "pages/person/person",
    // "pages/cinema/cinema",
    // "pages/position/position",
    // "pages/search/search",
    // "pages/detail/detail",
    // "pages/content/content",
    // "pages/cinemaDetail/cinemaDetail",
    // "pages/map/map",
    // "pages/seat/seat",
    // "pages/user/user",
    // "pages/order/order"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: "#e35487",
    navigationBarTitleText: "猫眼电影",
    navigationBarTextStyle: "white",
    enablePullDownRefresh: true
  },
  tabBar: {
    color: '#333',
    selectedColor: '#f03d37',
    backgroundColor: '#FFF',
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/movies/movies",
        text: '电影',
        iconPath: './assets/images/index.png',
        selectedIconPath: './assets/images/index_focus.png'
      },
      {
        pagePath: "pages/movies/movies",
        text: '影院',
        iconPath: './assets/images/themeOld.png',
        selectedIconPath: './assets/images/theme.png'
      },
      {
        pagePath: "pages/movies/movies",
        text: '我的',
        iconPath: './assets/images/person.png',
        selectedIconPath: './assets/images/personSelect.png'
      },
    ]
  }
}
