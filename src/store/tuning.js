// import logo1 from '@/assets/images/logo/bmw.jpg';

export default {

    state: {
        brand: [
            { id: 1, logo: '', title: 'BMW' },
        ],
        model: [
            { id: 1, name: 'X43', type: null },
        ],
        year: [
            { id: 1, name: 'All' }
        ],
        engine: [
            { id: 1, name: 'E70-4.4 Turbo 555hp' }
        ],
        car: [],
        engineSpec: [],
        extraServic: []
    },
    mutations: {
        formatBrand(state) {
            state.brand = []
        },
        createBrand(state, payload) {
            state.brand = payload
        },
        formatModel(state) {
            state.Model = []
        },
        createModel(state, payload) {
            state.model = payload
        },
        formatYear(state) {
            state.year = []
        },
        createYear(state, payload) {
            state.year = payload
        },
        formatEngine(state) {
            state.engine = []
        },
        createEngine(state, payload) {
            state.engine = payload
        },
        createCar(state, payload) {
            state.car = payload
        },
        createEngineSpec(state, payload) {
            state.engineSpec = payload
        },
        createExtraService(state, payload) {
            state.extraServic = payload
        }
    },
    actions: {},
    getters: {
        brand(state) {
            return state.brand
        },
        model(state) {
            return state.model
        },
        year(state) {
            return state.year
        },
        engine(state) {
            return state.engine
        },
        brandById(state) {
            return brandId => {
                return state.brand.find(brand => brand.id === brandId)
            }
        },
        brandByName(state) {
            return brandName => {
                return state.brand.find(brand => brand.title == brandName)
            }
        },
        yearById(state) {
            return yearId => {
                return state.year.find(year => year.id == yearId)
            }
        },
        yearByModelId(state) {
            return modelId => {
                return state.year.filter(year => year.model_id == modelId)
            }
        },
        modelById(state) {
            return modelId => {
                return state.model.find(model => model.id == modelId)
            }
        },
        modelByBrandId(state) {
            return brandId => {
                return state.model.filter(model => model.brand_id == brandId)
            }
        },
        engineById(state) {
            return engineId => {
                return state.engine.find(engine => engine.id == engineId)
            }
        },
        engineByYearId(state) {
            return yearId => {
                return state.engine.filter(engine => engine.year_id == yearId)
            }
        }
    }
}