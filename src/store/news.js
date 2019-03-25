class News {
  constructor (title, descr, imageScr = '', id = null) {
    this.title = title
    this.descr = descr
    this.imageSrc = imageScr
    this.id = id
  }
}

export default {
  state: {
    news: [
      {
        id: '1',
        imageSrc: 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
        title: 'Новости 1',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ornare pretium. Cras velsapien et purus efficitur interdu'
      },
      {
        id: '2',
        imageSrc: 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
        title: 'Новости 2',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ornare pretium. Cras velsapien et purus efficitur interdu'
      },
      {
        id: '3',
        imageSrc: 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
        title: 'Новости 3',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ornare pretium. Cras velsapien et purus efficitur interdu'
      }
    ]
  },
  mutations: {
    createNews (state, payload) {
      state.news.push(payload)
    }
  },
  actions: {},
  getters: {
    news (state) {
      return state.news
    },
    newsById (state) {
      return newsId => {
        return state.news.find(news => news.id === newsId)
      }
    }
  }
}
