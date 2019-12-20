import { createStore } from 'redux'

const counter = (state = 0, action ) => {
    switch(action.type) {
        case 'ADD':
            return state + 1
    default:
        return state
    }
}

function createAppStore() {
    return {
        store: createStore(counter)
    }
}

export default createAppStore