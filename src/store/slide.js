class slide {
    constructor(name, description, image = '', id = null) {
        this.name = name
        this.description = description
        this.image = image
        this.id = id
    }
}

// import slide1 from '@/assets/images/slider/slide-1.jpg';

export default {
    state: {
        slide: [{
                id: 1,
                name: 'Проект 1',
                description: '',
                image: 'slide1'
            },
            {
                id: 2,
                name: 'Проект 2',
                description: '',
                image: 'slide1'
            },
            {
                id: 3,
                name: 'Проект 3',
                description: '',
                image: 'slide1'
            },
        ]
    },
    mutations: {
        createSlide(state, payload) {
            state.slide = payload;
        },
        formatSlide(state) {
            state.slide = [];
        }
    },
    actions: {
        createSlide(context, payload) {
            context.commit('createSlide', payload)
        },
        formatSlide(context) {
            context.commit('formatSlide');
        }
    },
    getters: {
        slide(state) {
            return state.slide
        }
    }
}