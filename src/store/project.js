class Project {
  constructor (title, descr, imageScr = '', id = null) {
    this.title = title
    this.descr = descr
    this.imageSrc = imageScr
    this.id = id
  }
}

export default {
  state: {
    project: [
      {
        id: '1',
        imageSrc: 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
        title: 'Проект 1',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ornare pretium. Cras velsapien et purus efficitur interdu'
      },
      {
        id: '2',
        imageSrc: 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
        title: 'Проект 2',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ornare pretium. Cras velsapien et purus efficitur interdu'
      },
      {
        id: '3',
        imageSrc: 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
        title: 'Проект 3',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ornare pretium. Cras velsapien et purus efficitur interdu'
      }
    ]
  },
  mutations: {
    createProject (state, payload) {
      state.project.push(payload)
    }
  },
  actions: {},
  getters: {
    project (state) {
      return state.project
    },
    projectById (state) {
      return projectId => {
        return state.project.find(project => project.id === projectId)
      }
    }
  }
}
