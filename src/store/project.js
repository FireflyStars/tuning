class Project {
    constructor(name, description, image = '', id = null, type) {
        this.name = name
        this.description = description
        this.image = image
        this.id = id
        this.type = 0;
    }
}

export default {
    state: {
        project: [{
            id: '1',
            type: 0,
            image: '',
            name: '',
            description: '<span>На прошлой неделе в работе была BMW M4 F82, </span>задача была установить диффузор RKP, пружины KW на стоковые амортизаторы с возможностью регулировки, впуск Dinan, радиатор C&amp;R и дополнить все это прошивкой Stage 1, изначально планировали увидеть цифры в районе 530 лс и 680, +-, но все оказалось куда интереснее. Но обо всем по порядку:<div><br><div><span style="caret-color: rgb(0, 0, 0);">&nbsp;Для начала установили диффузор RPK:</span><br></div></div>'
        }]
    },
    mutations: {
        createProject(state, payload) {
            state.project = payload;
        },
        formatProject(state) {
            state.project = [];
        }
    },
    actions: {},
    getters: {
        project(state) {
            return state.project
        },
        projectById(state) {
            return projectId => {
                return state.project.find(project => project.id == projectId)
            }
        }
    }
}