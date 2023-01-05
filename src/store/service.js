class Service {
    constructor(name, description, image = '', id = null) {
        this.name = name
        this.description = description
        this.image = image
        this.id = id
    }
}

// import image from '../assets/images/demo/tuning-1.jpg'

export default {
    state: {
        service: [{
            id: '1',
            image: "",
            name: '',
            description: ''
        }]
    },
    mutations: {
        createService(state, payload) {
            state.service = payload
        },
        formatService(state) {
            state.service = []
        }
    },
    actions: {},
    getters: {
        service(state) {
            return state.service
        },
        serviceById(state) {
            return serviceId => {
                return state.service.find(service => service.id == serviceId)
            }
        }
    }
}