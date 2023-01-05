class News {
    constructor(name, description, image = '', id = null) {
        this.name = name
        this.description = description
        this.image = image
        this.id = id
        this.type = 0
    }
}

import image from '../assets/images/test1.jpeg'

export default {
    state: {
        news: [{
            id: '1',
            type: 0,
            image: image,
            name: '',
            description: ''
        }, ]
    },

    mutations: {
        createNews(state, payload) {
            state.news = payload;
        },
        foramtNews(state) {
            state.news = [];
        }
    },
    actions: {
        createNews(context, payload) {
            context.commit('createNews', payload);
        },
        foramtNews(context) {
            context.commit('formatNews');
        }
    },
    getters: {
        news(state) {
            return state.news
        },
        newsById(state) {
            return newsId => {
                return state.news.find(news => news.id == newsId)
            }
        }
    }
}