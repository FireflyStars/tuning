import logo1 from '@/assets/images/logo/bmw.jpg';

export default {

  state: {
    brand: [
      {id: 1, logo: logo1, title: 'BMW'},
      {id: 2, logo: logo1, title: 'BMW'},
      {id: 3, logo: logo1, title: 'BMW'},
      {id: 4, logo: logo1, title: 'BMW'},
      {id: 5, logo: logo1, title: 'BMW'},
      {id: 6, logo: logo1, title: 'BMW'},
      {id: 7, logo: logo1, title: 'BMW'},
      {id: 8, logo: logo1, title: 'BMW'},
      {id: 9, logo: logo1, title: 'BMW'},
      {id: 10, logo: logo1, title: 'BMW'},
      {id: 11, logo: logo1, title: 'BMW'},
      {id: 12, logo: logo1, title: 'BMW'},
      {id: 13, logo: logo1, title: 'BMW'},
      {id: 14, logo: logo1, title: 'BMW'},
    ],
    model: [
      {id: 1, name: 'X1'},
      {id: 2, name: 'X21'},
      {id: 3, name: 'X4'},
      {id: 4, name: 'X42'},
      {id: 5, name: 'X3'},
      {id: 6, name: 'X51'},
      {id: 7, name: 'X7'},
      {id: 8, name: 'X43'},
    ],
    year: [
      {id: 1, name: 'All'}
    ],
    engine: [
      {id: 1, name: 'E70-4.4 Turbo 555hp'},
      {id: 2, name: 'E70-4.4 Turbo 555hp'},
      {id: 3, name: 'E70-4.4 Turbo 555hp'},
      {id: 4, name: 'E70-4.4 Turbo 555hp'}
    ]
  },
  mutations: {

  },
  actions: {},
  getters: {
    brand (state) {
      return state.brand
    },
    model (state) {
      return state.model
    },
    year (state) {
      return state.year
    },
    engine (state) {
      return state.engine
    },
    brandById (state) {
      return brandId => {
        return state.brand.find(brand => brand.id === brandId)
      }
    },
    yearById (state) {
      return yearId => {
        return state.year.find(year => year.id === yearId)
      }
    },
    modelById (state) {
      return modelId => {
        return state.model.find(model => model.id === modelId)
      }
    },
    engineById (state) {
      return engineId => {
        return state.engine.find(engine => engine.id === engineId)
      }
    }
  }
}
